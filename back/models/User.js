const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  last_name: {
    type: String,
    required: [true, 'Please provide a surname'],
  },
  username: {
    type: String,
    require: [true, 'Please provide a username'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide a email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  gender: {
    type: String,
    required: [true, 'Please provide a gender'],
  },
  phone_number: {
    type: String,
    required: [true, 'Please provide a phone_number'],
  },
  loyalty_card:{
    type:Number,
    default:0
  }
  // orders:[{
  //   amount:{type:Number, required: [true, 'Please provide a id']},
  //   food:{type:Schema.Types.ObjectId,ref:"Food"}
  // }]
});

UserSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(10, function(err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) return next(err);
          user.password = hash;
          next();
      });
  });
});

module.exports = mongoose.model('User', UserSchema);