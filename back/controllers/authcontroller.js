const { findOne } = require('../models/User');
const CustomError = require('../helpers/CustomError');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.register = async (req, res,next) => {
  const { first_name,last_name,email, password, gender,username,phone_number,reference } = req.body;
  const referenceUser = await User.findOne({username:reference}).select('loyalty_card');
  if(referenceUser){
    referenceUser.loyalty_card +=10;
    await referenceUser.save();
    const user = await User.create({ first_name,last_name,email, password, gender, username,phone_number, loyalty_card:20}); 
    res.status(200).json({
      success: true,
      status:'success',
      data: {
        name: user.name,
        surname: user.surname,
        email: user.email,
        password: user.password,
        username: user.username,
        loyalty_card:user.loyalty_card,
      },
    });
  }else if(reference==""){
    const user = await User.create({ first_name,last_name,email, password, gender, username,phone_number}); 
    res.status(200).json({
      success: true,
      status:'success',
      data: {
        name: user.name,
        surname: user.surname,
        email: user.email,
        password: user.password,
        username: user.username,
        loyalty_card:user.loyalty_card,
      },
    });
  }else{
    res.status(400).send(JSON.stringify("Wrong reference username "));
    return next(new CustomError('Please Check Your reference username', 400));
  }
};

exports.login = async (req, res, next) => {
  const { username, password } = req.body;
  console.log(req.body);
  const user = await User.findOne({ username: username });
  if (!user) {
    res.status(400).send(JSON.stringify("Please check your username."))
    return next(new CustomError('Please Check Your username', 400));
  }
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      res.status(200).json({
        status: 'success',
        data: {
          password: user.password,
          username: user.username,
          loyalty_card:user.loyalty_card,
          id: user._id,
        },
      }).send();
    } else {
      res.status(400).send(JSON.stringify("Please check your password."))
      return next(new CustomError('Please Check Your password', 400));
    }
  });

};

exports.logout = async (req, res, next) => {
  req.session.destroy(()=> {
    res.json({success:true})
  })
}