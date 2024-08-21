import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import validator from 'validator'


// login user
const loginUser = async (req, res) => {
    const {email , password} = req.body;
    try {
        // to check user is available to this email id
        const user = await userModel.findOne({email});
        //to check we get user or not 
        if (!user) {
            //if we not get any user
            return res.json({success:false, messsage:"user Does not exist"})
        }
        //if getting user then we match password the store password in the db
        const isMatch = await bcrypt.compare(password , user.password)
        //id password is not match 
        if (!isMatch) {
            return res.json({success:false, message:"Invalid credentials"})
        }

        //if password is match we gemerated  one token 
        const token = createToken(user._id)
        res.json({success:true,token})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

const createToken = (id) => {
    //generated token
    return jwt.sign({id} ,process.env.JWT_SECRET , {expiresIn:'1hr'})
}

//register user 
const registerUser = async (req, res) => {
    //logic to register user ti the website 
    const {name,password,email} = req.body;
    try {
        //check email is already register or not
        const exists = await userModel.findOne({email});
        if (exists) {
            return res.json({success:false,message:"User already exixts"})
        }
        //validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"Please enter valid email"})
        }

        if (password.length<8) {
            return res.json({success:false,message:"Please enter strong password"})
        }

        //to encrypt the passowrd
        const salt = await bcrypt.genSalt(10)
        const hashedPassowrd = await bcrypt.hash(password,salt);

        // create new user
        const newUser  = new userModel({
            name:name,
            email:email,
            password:hashedPassowrd,
        })

        // to save the user in database
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export {loginUser , registerUser}