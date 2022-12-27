const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    textValue: {
        type: String,
        default:""
    },
    rating: {
        type: Number,
        default:3,
    }
})



module.exports = mongoose.model('Review', ReviewSchema);