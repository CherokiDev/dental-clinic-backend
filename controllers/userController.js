const UserModel = require('../models/user');

const UserController = {
    async singup(req, res) {
        try {
            const user = await UserModel.create(req.body);
            res.status(201).send(user);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'There was a problem trying to register the user'
            })
        }
    },
    async getUsers(req, res) {
        try{
            const users = await UserModel.find({
            });
            res.send(users);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'There was a problem trying to get the users'
            })
        }
    },
   /* getUsers = (req, res) => {
        UserModel.find({})
            .then(users => {
                res.send(users)
            })
            .catch(error => console.log(error))

    }*/
}

module.exports = UserController;