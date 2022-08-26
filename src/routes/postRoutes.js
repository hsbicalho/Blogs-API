const express = require('express');
const postController = require('../controllers/postController');
const authentication = require('../middlewares/authentication');
const { validatePost } = require('../middlewares/postMiddleware');

const postRoutes = express.Router();

postRoutes.post('/', authentication, validatePost, postController.createPost);

module.exports = postRoutes;