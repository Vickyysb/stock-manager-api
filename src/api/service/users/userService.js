const User = require('../../model/users/userModel');
const Group = require('../../model/groups/groupModel');

class UserService{

    async createUser(isAdmin, email, password, name, groupId){
        try{
            //verifica se já existe um usuário com o e-mail que esta sendo cadastrado
            let userExists = await User.findOne({where : {email: email}})
    
            if(await userExists){
                return ({error : 'User already exists'});
            }
    
            await User.create({
                isAdmin: isAdmin,
                email: email,
                password: password,
                name: name,
                groupId: groupId
            })
            return ({message : `Created user ${email}`});
        }catch(err) {
            return ({error : err});
        }
    }

    async getUser(id){
        try{
            var user = await User.findOne({
                where: { id }
            });

            return(user);
        }catch(err) {
            return ({error : err});
        }
    }

    async getUserByEmail(email){
        try{
            var user = await User.findOne({
                where: { email }
            });
            return(user);
        }catch(err){
            return ({error: err})
        }
    }

    async getUsers(groupId){
        try{
            var users = await User.findAll({
                where: {
                    status: 1,
                    groupId: groupId
                }
            });
            return ({message: users});
        }catch(err) {
            return ({error: err});
        }
    }

    async deleteUser(id){
        try{
            await User.destroy({
                where : { id : id}
            });
            return({message: 'Deleted user'});
        }catch(err){
            return ({error: err});
        }
    }

    async deleteUserSoft(id){
        try{
            await User.update({
                status: 0
            },
            {
                where : { id : id}
            });
            return({message: 'Deleted user'});
        }catch(err){
            return ({error: err});
        }
    }

    async updateUser(id, name, password, isAdmin){
        try{
            await User.update({
                name: name,
                password: password,
                isAdmin: isAdmin
            },
            {
                where : {
                    id : id
                }
            });
            return ({message: "Updated user"})
        }catch(err){
            return ({error: err});
        }
    }
}

module.exports = UserService;