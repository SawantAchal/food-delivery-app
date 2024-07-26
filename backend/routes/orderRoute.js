import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { placeOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

//api endpoint
orderRouter.post("/placeorder" , authMiddleware ,placeOrder);

export default orderRouter;