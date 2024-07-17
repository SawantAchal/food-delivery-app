import express from "express";
import { addFood } from "../controllers/foodController.js";
//to store image 
import multer from "multer";

const foodRouter = express.Router();

//image storage engine using multer 
const storage = multer.diskStorage({
    destination:'uploads',
    filename:(res,file,cb)=>{
        // file will be store in upload folder with time stamp
        return cb(null , `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

//post method (if we have to upload file)
foodRouter.post("/add" ,upload.single("image"), addFood)



export default foodRouter;