import mongoose from 'mongoose'

//schema for order
const orderSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    items:{type:Array,required:true},
    amount:{type:Number,required:true},
    address:{type:Object,required:true},
    status:{type:String,default:"Food Processing"},
    date:{type:Date,default:Date.now},
    payment:{type:Boolean,default:false},
})

//we create the model to create the database in the mongodb
//order Model
const orderModel = mongoose.models.order || mongoose.model("order" ,orderSchema);

export default orderModel;




// import mongoose from 'mongoose';

// // schema for order
// const orderSchema = new mongoose.Schema({
//     userId: { type: String, required: true },
//     items: { type: Array, required: true },
//     amount: { type: Number, required: true },
//     address: { type: Object, required: true },
//     status: { type: String, default: "Food Processing" },
//     date: { type: Date, default: Date.now },
//     payment: { type: Boolean, default: false }, // true if paid, false if unpaid
//     paymentMethod: { type: String, required: true } // 'card' or 'cash'
// });

// // order Model
// const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);

// export default orderModel;
