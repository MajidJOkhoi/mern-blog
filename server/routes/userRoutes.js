const express = require('express');
const { test } = require('../controllers/usercontroller');

const router = express.Router();

// Route to create a new user

router.get("/test",test)


module.exports = router;
