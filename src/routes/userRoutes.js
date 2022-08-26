const express = require('express');
const UserController = require('../controllers/userController');
const userMiddleware = require('../middlewares/userMiddleware');
const authorization = require('../middlewares/authentication');

const userRoutes = express.Router();

userRoutes.post('/', userMiddleware.validateUser, UserController.postUser);
userRoutes.get('/', authorization, UserController.getAllUsers);
userRoutes.get('/:id', authorization, UserController.getUserById);

module.exports = userRoutes;