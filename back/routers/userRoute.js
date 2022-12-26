const express = require('express');
const userController= require('../controllers/userController');

const router = express.Router();

router.get('/account/:id',userController.getUserInfo);
router.post('/survey',userController.addSurvey);
router.get('/getGreatest',userController.getGreatestLoyaltyUser);

module.exports=router;