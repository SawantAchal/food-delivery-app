import express from "express";
import { addFood ,listFood ,removeFood} from "../controllers/foodController.js";
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
//route to post
foodRouter.post("/add" ,upload.single("image"), addFood)
//route to get list of food
foodRouter.get('/list' ,listFood)
//route to remove food from food list
foodRouter.post('/remove' ,removeFood)



export default foodRouter;