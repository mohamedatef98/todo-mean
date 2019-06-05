const express = require('express');
const dispatch = require('../lib/ControllerDispatcher');
const router = express.Router();

const UsersController = require('../controllers/UsersControllers');


router.post('/login', dispatch(UsersController, 'login'));

router.post('/signup', dispatch(UsersController, 'signup'));

module.exports = router;
