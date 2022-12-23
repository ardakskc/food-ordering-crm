const Order = require('../models/Order');
const User = require('../models/User');

exports.giveOrder = async (req, res) => {
  try {
    const { count,id,price,loyalty} = req.body;
    const order= await Order.create({
        customer_id:req.session.userID,
        order_status:"Order Created",
        foods:{menu_id:id,quantity:count},
    })
    await order.foods.push({menu_id:menu_id,amount:quantity})
    await order.save()
    res.json({ 
        status: 'success',
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

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find({vote_average:{$gt:6},vote_count:{$gt:5000}}).select('poster_path overview title vote_count').limit(5);
    res.status(200).json({
      status: 'success',
      Movies:movies,
      _pageName:'movies'
    }); 
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'fail',
      err,
    });
  }
};


exports.getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById({ _id: req.params.id });
    res.status(200).json({
      data:movie,
      status: 'success',
      page_name: movie,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'fail',
      err,
    });
  }
};

exports.getMoviesByGenre = async (req, res) => {
  console.log(req.params.id);
  try {
    const movies = await Movie.find({
      genres: { $elemMatch: { id: req.params.id } },
    });
    res.status(200).json({
      status: 'success1234',
      movies,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'fail',
      err,
    });
  }
};