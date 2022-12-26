const Food = require('../models/Food');
const User = require('../models/User');
const Order = require('../models/Order');

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
        const customer_ids = await Order.find().distinct("customer_id");
        const all_customer_ids = await Order.find();
        let id
        let max=1;

        for(const customer_id of customer_ids){     
            const countQuery = await Order.where({ customer_id: customer_id }).countDocuments();
            if(countQuery>max){
                id=customer_id;
                max=countQuery;
            }  
        }
        const user = await User.findById({_id:id}).select('first_name last_name')
        res.status(200).json({
            status: 'success',
            user:user,
      }); 
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: 'fail',
        err,
      });
    }
  };


