const express = require('express');
const UserController = require('../controllers/userController');
const userMiddleware = require('../middlewares/userMiddleware');

const userRoutes = express.Router();

userRoutes.post('/', userMiddleware.validateUser, UserController.postUser);

module.exports = userRoutes;