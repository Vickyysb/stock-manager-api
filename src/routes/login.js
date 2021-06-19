const express = require("express");
const loginRoute = express.Router();

const authController = require("./auth");

loginRoute.use(express.json());
loginRoute.use(express.urlencoded({ extended: true}));

const path = '/login';


loginRoute.post(`${path}`, authController.authenticate.bind(authController));


module.exports =  loginRoute;