const express = require("express");
const groupRoute = express.Router();
const authentication = require('../../api/middlewares/auth');

const groupController = require("../../api/controller/groups/groupsController");

groupRoute.use(express.json());
groupRoute.use(express.urlencoded({ extended: true}));

const path = '/groups';

groupRoute.post(`${path}/create`, groupController.createGroup.bind(groupController));
groupRoute.get(`${path}`, authentication, groupController.getGroups.bind(groupController));
groupRoute.get(`${path}/:id`, authentication, groupController.getGroup.bind(groupController));
groupRoute.get(`${path}/delete/:id`, authentication, groupController.deleteGroup.bind(groupController));
groupRoute.get(`${path}/delete/soft/:id`, authentication, groupController.deleteGroupSoft.bind(groupController));
groupRoute.post(`${path}/update/:id`, authentication, groupController.updateGroup.bind(groupController));

module.exports =  groupRoute;