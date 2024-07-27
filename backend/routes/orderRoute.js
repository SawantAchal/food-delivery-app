import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { listOrders, placeOrder, userOrder, verifyOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

//api endpoint
orderRouter.post("/placeorder" , authMiddleware ,placeOrder);
orderRouter.post("/verifyorder" ,verifyOrder);
orderRouter.post("/userorders" , authMiddleware ,userOrder);
orderRouter.get("/getorderofuser" ,listOrders);


export default orderRouter;