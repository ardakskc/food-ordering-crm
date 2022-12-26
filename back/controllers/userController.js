const Order = require('../models/Order');
const User = require('../models/User');

exports.giveOrder = async (req, res) => {
  try {
    const { count,menu_id,price,loyalty,userID} = req.body;
    const user = await User.findById({_id:userID});
    if (!user) {
      res.status(400).send(JSON.stringify("Please check your username."))
      return next(new CustomError('Please Check Your username', 400));
    }
    const order= await Order.create({
      customer_id:userID,
      order_status:"Order Created",
      foods:{menu_id:menu_id,quantity:count},
      price:price
    })

    if(loyalty){
      user.loyalty_card=0
    }
    user.loyalty_card+=Math.floor(price*0.02) 
    await user.save()
    await order.save()
    res.json({ 
        status: 'success',
        loyalty:user.loyalty_card,
        data:order
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'fail',
      err,
    });
  }
};

exports.getUserInfo = async (req, res) => {
  try {
    const user = await User.findById({_id:req.params.id}).select('first_name last_name loyalty_card')
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

