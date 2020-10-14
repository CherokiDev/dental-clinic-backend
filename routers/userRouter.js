const router = require('express').Router();
const UserController = require('../controllers/userController');

//Endpoint de registro de usuarios
router.post('/signup', UserController.singup);

//Endpoint de login de usuarios


//Endpoint de logout de usuarios




module.exports = router;