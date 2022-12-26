const express = require('express');
const userController= require('../controllers/userController');

const router = express.Router();

router.get('/account/:id',userController.getUserInfo);

module.exports=router;