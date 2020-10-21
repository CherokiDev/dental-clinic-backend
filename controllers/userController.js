const UserModel = require('../models/user');
const bcrypt = require('bcryptjs');

const UserController = {
    async singup(req, res) {
        let regExEmail = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
        let regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
        let hashPass = await bcrypt.hash(req.body.password, 10);

        if (!regExEmail.test(req.body.email)) {
            res.send(
                `The email is not valid, it must be like the following example:
                - user@example.com`
            );
            return;
        }

        if (!regExPassword.test(req.body.password)) {
            res.send(
                `The password is not in the correct format, it must contain:
                - Between 8 and 16 characters
                - At least 1 number
                - At least 1 lowercase letter
                - At least 1 uppercase letters
                - At least 1 special character`
            );
            return;
        }

        try {
            const user = await UserModel({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: hashPass,
                phone: req.body.phone,
                photo: req.body.photo,
                birthdate: req.body.birthdate,
                address: req.body.address,
                token: ""
            })
            const email = await UserModel.findOne({
                email: req.body.email
            })

            if (!email) {
                res.send({
                    message: 'Account created successfully',
                    user
                })
                return user.save();
            } else
                res.send({
                    message: 'Sorry, but that email is already registered. Choose another email'
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
            res.send(
                `There is no registered user with this email.
                Sign up!`
            )
        } else {

            let passwordOk = await bcrypt.compare(req.body.password, user.password);

            if (!passwordOk) {
                res.send(
                    `Wrong credentials`
                )
            } else {
                user.token = user._id
                await user.save();
                res.send({
                    message: 'Welcome',
                    user
                });
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
            res.send({
                message: `Goodbye ${user.firstname}!`
            });
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