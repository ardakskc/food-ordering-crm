const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SurveySchema = new Schema({

  customer_id: {
    type: Schema.Types.ObjectId,
    ref:'User',
    required: [true,'Please provide a customer ıd'],
  },
  question_one: {
    type: Number,
    required: [true, 'Please provide result'],
  },
  question_two: {
    type: Number,
    required: [true, 'Please provide result'],
  },
  question_three:{
    type:Number,
    required:[true,'Pleae provide result'],
  }
});


module.exports = mongoose.model('SurveyResult', SurveySchema);