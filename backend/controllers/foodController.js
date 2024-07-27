import foodModel from '../models/foodModel.js';
import fs from 'fs'

 //add food item 
const addFood = async (req, res) => {
    try {
        let image_filename = req.file.filename; // Ensure the filename is correct

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename
        });

        await food.save();
        res.json({ success: true, message: 'Food Added' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' });
    }
};


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

// Remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, (err) => {
            if (err) console.log('Error removing file:', err);
        });
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: 'Food removed' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' });
    }
}

export {addFood, listFood , removeFood};