const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const OrderSchema = new Schema({
    customer_id: {
        type: Schema.Types.ObjectId,
        ref:'User',
        required: [true,'Please provide a customer ıd'],
    },
    foods:[{
        menu_id: {
            type: Schema.Types.ObjectId,
            ref:'Food',
            required: [true, 'Please provide a menuid'],
        },
        quantity: {
            type: Number,
            require: [true, 'Please provide a quentity'],
            unique: true,
        },
    }],
    order_status: {
        type: String,
        required: [true, 'Please provide a order status'],
        unique: true,
    },
    order_id: {
        type: String,
        required: [true, 'Please provide a id'],
    },
},
{timestamps:true});



module.exports = mongoose.model('Order', OrderSchema);