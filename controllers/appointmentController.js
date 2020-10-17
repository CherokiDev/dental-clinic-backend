const AppointmentModel = require('../models/appointment');
const UserModel = require('../models/user');


const AppointmentController = {
    async addOne(req, res) {
        let user = await UserModel.findOne({
            email: req.params.email
        });

        if (!user.token) {
            res.status(400).send({
                message: 'You must be registered and logged in'
            });

        }else{
        try {
            const appointment = await AppointmentModel({
                status: req.body.status,
                date: req.body.date,
                token_id: user.token
            }).save();
            res.status(201).send({
                message: `appointment successfully created`,
                appointment
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'An error occurred while trying to create your appointment'
            })
        }}

    },
    async deleteOne(req, res) {
        try {
            const appointment = await AppointmentModel.findByIdAndDelete({
                _id: req.params._id
            })
            res.send({
                message: 'Your appointment has been successfully deleted',
                appointment
            })
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'An error occurred while trying to delete your appointment'
            })
            
        }
    },

    async getAll(req, res) {
        try {
            const appointment = await AppointmentModel.find({
                token_id: req.params.token_id
            })
            res.send({
                appointment
            })
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'An error occurred while trying to display your appointments'
            })
            
        }
    }

}

module.exports = AppointmentController;