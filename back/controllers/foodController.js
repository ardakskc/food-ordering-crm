const Food = require('../models/Food');
const User = require('../models/User');

exports.addFoodtoDatabase = async (req, res) => {
  try {
    const { menu_id,price,menu,menu_name } = req.body;
    const food = await Food.create({  menu_id,price,menu,menu_name });
    res.json({ 
        status: 'success',
        data: food
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'fail',
      err,
    });
  }
};



exports.getFoods = async (req, res) => {
  try {
    const foods = await Food.find().sort('menu_name');
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



