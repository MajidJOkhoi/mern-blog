const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// Use the custom error handler middleware
app.use(errorHandler);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
