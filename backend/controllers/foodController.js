import foodModel from '../models/foodModel.js';
import fs from 'fs'

//add food item 
const addFood = async (req, res) => {
    //logic to store product data into the database

    //to store name of the image 
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })

    try {
        await food.save()
        res.json({success:true,message:'Food Added'})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:'Error'})
    }
}

// all food list
const listFood = async (req, res) => {
    //logic to access all food list and send them as a response
    try {
        //in this variable we will get all the data of the food items
        const foods = await foodModel.find({});
        res.json({success:true ,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:'Error'})
    }
}

export {addFood, listFood};