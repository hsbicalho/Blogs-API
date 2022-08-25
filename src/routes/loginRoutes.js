const express = require('express');

const loginRoutes = express.Router();

loginRoutes.post('/');

module.exports = loginRoutes;