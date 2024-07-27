import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { placeOrder, userOrder, verifyOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

//api endpoint
orderRouter.post("/placeorder" , authMiddleware ,placeOrder);
orderRouter.post("/verifyorder" ,verifyOrder);
orderRouter.post("/userorders" , authMiddleware ,userOrder);

export default orderRouter;