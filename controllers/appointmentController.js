const AppointmentModel = require('../models/appointment');
const UserModel = require('../models/user');
const moment = require('moment');


const AppointmentController = {
    async getAppointments (req, res) {
        try {
            const appointments = await AppointmentModel.find({});
            res.send(appointments);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'There was a problem trying to get the appointments'
            })
        }
    },
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
                date: moment().add(3, 'days').calendar(),
                token_user: user.token,
                email_user: user.email
            }).save();
            res.status(201).send({
                message: `Appointment successfully created`,
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
                token_user: req.params.token_user
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