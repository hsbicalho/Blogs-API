const express = require('express');
const LoginController = require('../controllers/loginController');
const loginMiddleware = require('../middlewares/loginMiddleware');

const loginRoutes = express.Router();

loginRoutes.post('/', loginMiddleware.validateLogin, LoginController);

module.exports = loginRoutes;