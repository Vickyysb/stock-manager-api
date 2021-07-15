const Group = require('../../model/groups/groupModel');

class GroupService{

    async createGroup(name, description){
        try{
            await Group.create({
                name: name,
                description: description
            })
            return ({message : `Created group ${name}`});
        }catch(err) {
            return ({error : err});
        }
    }

    async getGroup(id){
        try{
            var group = await Group.findOne({
                where: { id }
            });

            return(group);
        }catch(err) {
            return ({error : err});
        }
    }


    async getGroups(){
        try{
            var group = await Group.findAll({
                where: {
                    status: 1
                }
            });
            return ({message: group});
        }catch(err) {
            return ({error: err});
        }
    }

    async deleteGroup(id){
        try{
            await Group.destroy({
                where : { id : id}
            });
            return({message: 'Deleted group'});
        }catch(err){
            return ({error: err});
        }
    }

    async deleteGroupSoft(id){
        try{
            await Group.update({
                status: 0
            },
            {
                where : { id : id}
            });
            return({message: 'Deleted group'});
        }catch(err){
            return ({error: err});
        }
    }

    async updateGroup(id, name, description, status){
        try{
            await Group.update({
                name: name,
                description: description,
                status: status
            },
            {
                where : {
                    id : id
                }
            });
            return ({message: "Updated group"})
        }catch(err){
            return ({error: err});
        }
    }
}

module.exports = GroupService;