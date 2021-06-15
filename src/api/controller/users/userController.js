const userService = require('../../service/users/userService');

class UserController {
    constructor(){
        this.userService = new userService();
    }

    async createUser(req, res){
        var { isAdmin, email, password, name } = req.body;
   
        await this.userService.createUser(isAdmin, email, password, name).then((response) => {
            res.send(response);
        })
    }

    async getUser(req, res){
        var id = req.params.id;
        console.log(id)
        await this.userService.getUser(id).then((response) => {
            res.send(response);
        });
    }

    async getUsers(req, res){
        await this.userService.getUsers().then((response) => {
            res.send(response);
        });
    }

    async deleteUser(req, res) {
        var id = req.params.id;
        await this.userService.deleteUser(id).then((response) => {
            res.send(response);
        });
    }

    async deleteUserSoft(req, res) {
        var id = req.params.id;
        await this.userService.deleteUserSoft(id).then((response) => {
            res.send(response);
        });
    }

    async updateUser(req, res) {
        var { name, password, isAdmin } = req.body;
        var id = req.params.id;
        await this.userService.updateUser(id, name, password, isAdmin).then((response) => {
            res.send(response);
        });
    }
}
module.exports = new UserController();