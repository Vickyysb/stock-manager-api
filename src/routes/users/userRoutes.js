const express = require("express");
const userRoute = express.Router();

const userController = require("../../api/controller/users/userController");

userRoute.use(express.json());
userRoute.use(express.urlencoded({ extended: true}));

const path = '/users';


userRoute.post(`${path}/create`, userController.createUser.bind(userController));
userRoute.get(`${path}`, userController.getUsers.bind(userController));
userRoute.get(`${path}/:id`, userController.getUser.bind(userController));
userRoute.get(`${path}/delete/:id`, userController.deleteUser.bind(userController));
userRoute.get(`${path}/delete/soft/:id`, userController.deleteUserSoft.bind(userController));
userRoute.post(`${path}/update/:id`, userController.updateUser.bind(userController));

module.exports =  userRoute;