const router = require('express').Router();
const UserController = require('../controllers/userController');

//Endpoint de mostrar todos los usuarios
//router.get('/', UserController.getUsers);

//Endpoint de registro de usuarios
router.post('/signup', UserController.singup);

//Endpoint de login de usuarios
router.post('/login', UserController.login);

//Endpoint de logout de usuarios
router.put('/logout', UserController.logout)




module.exports = router;