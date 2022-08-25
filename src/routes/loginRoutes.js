const express = require('express');
const LoginController = require('../controllers/loginController');

const loginRoutes = express.Router();

loginRoutes.post('/', LoginController);

module.exports = loginRoutes;