const groupService = require('../../service/groups/groupService');

class GroupController {
    constructor(){
        this.groupService = new groupService();
    }


    async createGroup(req, res){
        var { name, description } = req.body;

        await this.groupService.createGroup(name, description).then((response) => {
            res.send(response);
        })
    }

    async getGroups(req, res){
        await this.groupService.getGroups().then((response) => {
            res.send(response);
        });
    }

    async getGroup(req, res){
        var id = req.params.id;

        await this.groupService.getGroup(id).then((response) => {
            res.send(response);
        });
    }

    async deleteGroup(req, res) {
        var id = req.params.id;
        await this.groupService.deleteGroup(id).then((response) => {
            res.send(response);
        });
    }

    async deleteGroupSoft(req, res) {
        var id = req.params.id;
        await this.groupService.deleteGroupSoft(id).then((response) => {
            res.send(response);
        });
    }

    async updateGroup(req, res) {
        var { name, description, status } = req.body;
        var id = req.params.id;
        await this.groupService.updateGroup(id, name, description, status).then((response) => {
            res.send(response);
        });
    }
}
module.exports = new GroupController();