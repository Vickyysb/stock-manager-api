const express = require("express");
const routes = express.Router();

const userRoutes = require('./users/userRoutes');
const loginRoutes = require('./login');
const groupRoutes = require('./groups/groupRoutes');

routes.use(userRoutes);
routes.use(loginRoutes);
routes.use(groupRoutes);

module.exports = routes;