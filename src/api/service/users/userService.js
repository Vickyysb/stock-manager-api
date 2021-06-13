const User = require('../../model/users/userModel');

class UserService{

    async createUser(isAdmin, email, password, name){
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
                name: name
            })
            return ({message : `Created user ${email}`});
        }catch(err) {
            return ({error : err});
        }
    }

    // async getUsers(id){
    //         if(id !== -1){
    //             var products = await Product.findOne({
    //                 where : {
    //                     id: id
    //                 }
    //             })
    //         }else{
    //             var products = await Product.findAll({
    //                 where: {
    //                     status: 1
    //                 }
    //             })
    //         }
    //         return { products }
    // }

    async getUsers(){
        var users = await User.findAll({
            where: {
                status: 1
            }
        });

        return ({message: users});
    }
}

module.exports = UserService