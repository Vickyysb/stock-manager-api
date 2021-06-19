const express = require("express");
const userRoute = express.Router();
const authentication = require('../../api/middlewares/auth');

const userController = require("../../api/controller/users/userController");

userRoute.use(express.json());
userRoute.use(express.urlencoded({ extended: true}));

const path = '/users';

userRoute.post(`${path}/create`, userController.createUser.bind(userController));
userRoute.get(`${path}`, authentication, userController.getUsers.bind(userController));
userRoute.get(`${path}/:id`, authentication, userController.getUser.bind(userController));
userRoute.get(`${path}/delete/:id`, authentication, userController.deleteUser.bind(userController));
userRoute.get(`${path}/delete/soft/:id`, authentication, userController.deleteUserSoft.bind(userController));
userRoute.post(`${path}/update/:id`, authentication, userController.updateUser.bind(userController));

module.exports =  userRoute;