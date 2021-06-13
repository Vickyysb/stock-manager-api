const express = require("express");
const userRoute = express.Router();

const userController = require("../../api/controller/users/userController");

userRoute.use(express.json());
userRoute.use(express.urlencoded({ extended: true}));

const path = '/users';


userRoute.post(`${path}/create`, userController.createUser.bind(userController));
userRoute.get(`${path}`, userController.getUsers.bind(userController));


module.exports =  userRoute;