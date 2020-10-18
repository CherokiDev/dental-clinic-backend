const AppointmentModel = require('../models/appointment');
const UserModel = require('../models/user');

const AdminController = {
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
    }
}



module.exports = AdminController;