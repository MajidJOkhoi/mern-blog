const express = require('express');
const User = require('../models/user');

const router = express.Router();

// Route to create a new user
router.post('/users', async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = new User({ name, email });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
