const express = require('express');
const router = express.Router();

const user = require('../Controllers/UserController');

router.post('/register', user.registerUser);
router.post('/login', user.loginUser);
router.get('/logout', user.logoutUser);
router.get('/getUserDetail/:id', user.getUserDetail);

module.exports = router;