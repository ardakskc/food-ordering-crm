const express = require('express');
const foodController= require('../controllers/foodController');
const userController = require('../controllers/UserController');

const router = express.Router();

router.get('/',foodController.getFoods);
router.post('/addFood',foodController.addFoodtoDatabase);
router.post('/addFoodtoOrder',userController.addFoodtoOrder);

module.exports=router; 