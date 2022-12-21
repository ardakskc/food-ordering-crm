const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
// const movieRoute = require('./routers/movieRoute');
// const userRoute = require('./routers/userRoute');
// const pageRoute = require('./routers/pageRoute');
const authRoute = require('./routers/authRoute');


const app = express();

mongoose
  .connect('mongodb://127.0.0.1:27017/YemekSepetiDB', {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('DB Connected Successfully');
  });

app.set('view engine', 'ejs');

//Middleware
app.use(express.static('public'));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(function(req, res, next) { 
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next(); }); 
var bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'keybord_key',
  resave: false,
  saveUninitialized: true,
}))

// app.use('/',pageRoute);
// app.use('/movies', movieRoute);
// app.use('/users', userRoute);
app.use('/auth',authRoute);

const port = 5000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});