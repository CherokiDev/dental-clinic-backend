const UserModel = require('../models/user');
const bcrypt = require('bcryptjs');

const UserController = {
    async singup(req, res) {
        let regExEmail = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
        let regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
        let hashPass = await bcrypt.hash(req.body.password, 10);

        if (!regExEmail.test(req.body.email)) {
            res.send({
                message: "El email introducido no es válido"
            });
            return;
        }

        if (!regExPassword.test(req.body.password)) {
            res.send({
                message: "El password introducido no es válido"
            });
            return;
        }

        try {
            const user = await new UserModel({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: hashPass
            }).save();

            res.status(201).send({
                message: 'Account created successfully.',
                user
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'There was a problem trying to register the user'
            })
        }
    },
    async getUsers(req, res) {
        try {
            const users = await UserModel.find({});
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