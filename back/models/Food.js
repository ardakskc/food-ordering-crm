const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  menu_name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  menu_id: {
    type: String,
    required: [true, 'Please provide a id'],
  },
  price:{
    type:Number,
    required:[true,'Pleae provide a price'],
  },
  image_url:{
    type:"String",
  },

//   orders:[ {
//     type: Schema.Types.ObjectId,
//     ref: 'Movie',
//   }],
});


module.exports = mongoose.model('Food', FoodSchema);