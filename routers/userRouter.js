const router = require('express').Router();
const UserController = require('../controllers/userController');



//Endpoint de registro de usuario
router.post('/signup', UserController.singup);




module.exports = router;