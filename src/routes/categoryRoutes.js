const express = require('express');
const categoryController = require('../controllers/categoryController');
const authentication = require('../middlewares/authentication');
const validateName = require('../middlewares/categoryMiddleware');

const loginRoutes = express.Router();

loginRoutes.post('/', authentication, validateName, categoryController.postCategory);
loginRoutes.get('/', authentication, categoryController.getCategories);

module.exports = loginRoutes;