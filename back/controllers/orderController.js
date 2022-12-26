const Food = require('../models/Food');
const User = require('../models/User');

exports.getAllOrders = async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json({
      status: 'success',
      Foods:foods,
      _pageName:'foods'
    }); 
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'fail',
      err,
    });
  }
};

exports.getBestCustomer = async (req, res) => {
    try {
        const user = await User.findOne().sort('-loyalty_card').select('first_name last_name')
        res.status(200).json({
            status: 'success',
            Foods:foods,
            _pageName:'foods'
      }); 
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: 'fail',
        err,
      });
    }
  };


