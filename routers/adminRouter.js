const router = require('express').Router();
const AdminController = require('../controllers/adminController');

//Endpoint de mostrar todos los usuarios
router.get('/allUsers', AdminController.getUsers);

//Endpoint de mostrar todas las citas
router.get('/allAppointments', AdminController.getAppointments);


module.exports = router;