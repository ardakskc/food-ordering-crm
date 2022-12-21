const { findOne } = require('../models/User');
const CustomError = require('../helpers/CustomError');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  const { first_name,last_name,email, id, password, gender, username,phone_number } = req.body;
  const user = await User.create({ first_name,last_name,email, id, password, gender, username,phone_number });
  res.status(200).json({
    success: true,
    data: {
      name: user.name,
      surname: user.surname,
      email: user.email,
      id: user.id,
      password: user.password,
      username: user.username,
    },
  });
};

exports.login = async (req, res, next) => {
  const { username, password } = req.body;
  console.log(req.body);
  const user = await User.findOne({ username: username });
  if (!user) {
    res.send('Please Check Your username');
    return next(new CustomError('Please Check Your username', 400));
  }
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      req.session.userID= user._id
      res.status(200).json({
        status: 'success',
        data: {
          password: user.password,
          username: user.username,
          id: req.session.userID,
        },
      });
    } else {
      res.send('Please Check your password')
      return next(new CustomError('Please Check your password', 400));
    }
  });

};

exports.logout = async (req, res, next) => {
  req.session.destroy(()=> {
    res.json({success:true})
  })
}