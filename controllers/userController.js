const UserModel = require('../models/user');
const bcrypt = require('bcryptjs');

const UserController = {
    /*async getUsers(req, res) {
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
    },*/
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
            const user = await UserModel({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: hashPass,
            }).save();

            //user.token = user._id
            //await user.save();

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
    async login(req, res) {
        let user = await UserModel.findOne({
            email: req.body.email
        });

        if (!user) {
            res.send({
                message: "No existe el usuario"
            })
        } else {

            let passwordOk = await bcrypt.compare(req.body.password, user.password);

            if (!passwordOk) {
                res.send({
                    message: "Credenciales incorrectas"

                })
            } else {
                res.send({
                    firstname: user.firstname,
                    email: user.email
                });
                user.token = user._id
                await user.save();
            }

        }

    },


    async logout(req, res) {
        try {
            //const token = { token: token };
            const email = {
                email: req.body.email
            };
            const emptyToken = {
                token: ""
            };
            const user = await UserModel.findOneAndUpdate(email, emptyToken);
            res.send(`${user.email} has logout`)
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'There was a problem trying to disconnected the user'
            })
        }
    }

}

module.exports = UserController;