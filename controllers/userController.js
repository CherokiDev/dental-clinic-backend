const UserModel = require('../models/user');

const UserController = {
    async singup(req,res) {
        try {
            const user = await UserModel.create(req.body);
            res.status(201).send(user);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error, message: 'There was a problem trying to register the user'
            })
        }
    }
}

module.exports = UserController;