const router = require('express').Router();
const AppointmentController = require('../controllers/appointmentController');


//Endpoint de creación de una cita nueva
router.post('/newAppointment/:email', AppointmentController.addOne);

//Endpoint de listado de citas pendientes
router.get('/getAppointments/:token_id', AppointmentController.getAll);

//Endpoint de eliminación de cita
router.delete('/deleteAppointment/:_id', AppointmentController.deleteOne);




module.exports = router;