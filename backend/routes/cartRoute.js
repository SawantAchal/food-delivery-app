import express from 'express';
import {addToUserCart ,removeItemFromUserCart ,getCartdetailFromUserCart} from '../controllers/cartController.js'
import authMiddleware from '../middleware/auth.js';

const cartRouter =  express.Router();

//api endpoint
cartRouter.post('/addtousercart' ,authMiddleware,addToUserCart)
cartRouter.post('/removefromcart' ,authMiddleware,removeItemFromUserCart)
cartRouter.post('/getcartdetails' ,authMiddleware,getCartdetailFromUserCart)

export default cartRouter;