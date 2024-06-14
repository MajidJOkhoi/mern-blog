const express = require('express');
const { signup, signin, googleSignIn } = require('../controllers/authController');
const router = express.Router();

// Route for user signup
router.post('/signup', signup);

// Route for user signin
router.post('/signin', signin);

// Route for handling Google sign-in
router.post('/google', googleSignIn);


module.exports = router;
