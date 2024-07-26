import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { placeOrder, verifyOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

//api endpoint
orderRouter.post("/placeorder" , authMiddleware ,placeOrder);
orderRouter.post("/verifyorder" , authMiddleware ,verifyOrder);

export default orderRouter;