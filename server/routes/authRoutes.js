const express = require('express');
const { signup, signin } = require('../controllers/authcontroller');

const router = express.Router();

// Signup route
router.post('/signup', signup);

// Signin route
router.post('/signin', signin);

module.exports = router;
