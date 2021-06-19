const express = require("express");
const routes = express.Router();

const userRoutes = require('./users/userRoutes');
const loginRoutes = require('./login');

routes.use(userRoutes);
routes.use(loginRoutes);

module.exports = routes;