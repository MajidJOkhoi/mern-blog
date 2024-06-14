const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/errorResponse');

// User registration (signup)
const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    // Validate request
    if (!username || !email || !password) {
        return next(new ErrorResponse('Please fill all the fields', 400));
    }

    try {
        // Check if the user already exists
        let user = await User.findOne({ email });
        if (user) {
            return next(new ErrorResponse('User already exists', 400));
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        user = new User({
            username,
            email,
            password: hashedPassword,
        });

        // Save user to the database
        await user.save();

        // Generate JWT token
        const payload = {
            user: {
                id: user.id
            }
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ msg: 'Signup Successful', token });
    } catch (err) {
        next(err);
    }
};

// User login (signin)
const signin = async (req, res, next) => {
    const { email, password } = req.body;

    // Validate request
    if (!email || !password) {
        return next(new ErrorResponse('Please fill all the fields', 400));
    }

    try {
        // Check if the user exists
        let user = await User.findOne({ email });
        if (!user) {
            return next(new ErrorResponse('Invalid credentials', 400));
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return next(new ErrorResponse('Invalid credentials', 400));
        }

        // Generate JWT token
        const payload = {
            user: {
                id: user.id
            }
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (err) {
        next(err);
    }
};

// Google Sign-In
const googleSignIn = async (req, res) => {
    const { name, email, photoURL } = req.body;
  
    try {
      // Check if the user already exists
      let user = await User.findOne({ email });
  
      if (!user) {
        // If user does not exist, create a new user
        user = new User({
          username: name,
          email,
          photoURL,
          provider: 'google',
        });
  
        await user.save();
      }
  
      // Generate JWT token
      const payload = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.status(200).json({
        message: 'User authenticated successfully',
        user,
        token,
        isNewUser: !user, // This can be used to determine if the user is new
      });
    } catch (err) {
      console.error('Google Sign-In Error:', err); // Log the error
      res.status(500).json({
        message: 'Server error',
        error: err.message,
      });
    }
  };

module.exports = {
    signup,
    signin,
    googleSignIn
};
