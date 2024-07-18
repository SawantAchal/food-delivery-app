import express from 'express'
import { loginUser , registerUser } from '../controllers/userController.js'

//create router using express
const userRouter = express.Router()

//created routes for login and register 
userRouter.post("/register" , registerUser);
userRouter.post('/login' , loginUser)

export default userRouter;