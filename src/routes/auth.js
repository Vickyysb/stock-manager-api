const bcrypt = require('bcrypt');
const userService = require('../api/service/users/userService');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json');

class authController {
    constructor(){
        this.userService = new userService();
    }

    async authenticate(req, res){
        const { email, password } = req.body;
        const user = await this.userService.getUserByEmail(email);

        if (!user) {
          return res.status(400).send({ error: 'User not found' });
        }

      
        if (!await bcrypt.compare(password, user.password)) {
          return res.status(400).send({ error: 'Invalid password' });
        }

        user.password = undefined;

        res.send({
          user,
          token: this.generateToken({ "user": {"id": user.id, "groupId": user.groupId}})
        });
    }

    generateToken(params = {}) {
        return jwt.sign(params, authConfig.secret, {
          expiresIn: 86400,
        });
    }
}

module.exports = new authController();