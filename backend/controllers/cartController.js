import userModel from '../models/userModel.js'

//add itemd to user cart
const addToUserCart = async (req , res) => {
    try {
        //check id is same or not
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData;
        //check data is in cart or not
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1
        }else{
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success:true,message:"Added To Cart"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//remove items from user cart 
const removeItemFromUserCart = async (req , res) => {
    // find id
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData;
        if (cartData[req.body.itemId]>0) {
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Removed From Cart"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//fetch user cart data
const getCartdetailFromUserCart = async (req , res) => {

}

export {addToUserCart ,removeItemFromUserCart ,getCartdetailFromUserCart}