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

    async getUsers(req, res){
        await this.userService.getUsers().then((response) => {
            res.send(response);
        });
    }
}
module.exports = new UserController();