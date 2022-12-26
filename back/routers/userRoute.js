const express = require('express');
const userController= require('../controllers/userController');
const orderController= require('../controllers/orderController');

const router = express.Router();

router.get('/account/:id',userController.getUserInfo);
router.post('/survey',userController.addSurvey);
router.get('/getGreatest',userController.getGreatestLoyaltyUser);
router.get('/getBestCustomer',orderController.getBestCustomer)

module.exports=router;