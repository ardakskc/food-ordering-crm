const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const OrderSchema = new Schema({
    customer_id: {
        type: Schema.Types.ObjectId,
        ref:'User',
        required: [true,'Please provide a customer ıd'],
    },
    foods:{
        menu_id: {
            type: Schema.Types.ObjectId,
            ref:'Food',
            required: [true, 'Please provide a menu id'],
        },
        quantity: {
            type: Number,
            require: [true, 'Please provide a quentity'],
            unique: true,
        },
    },
    order_status: {
        type: String,
        required: [true, 'Please provide a order status'],
        unique: true,
    },
    price:{
        type:Number,
    }
},
{timestamps:true});



module.exports = mongoose.model('Order', OrderSchema);