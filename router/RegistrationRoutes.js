const express = require('express');
const { registration, login, currentUser } = require('../Controller/userController');
const validationToken = require('../middleware/validationHandlerToken');
const router = express.Router();

// router.use()
router.post('/register', registration);
router.post('/login', login);
router.get('/current',validationToken, currentUser)

module.exports = router;