const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db"); // Ensure this path is correct
require("dotenv").config();

const authRoutes = require("./routes/authRoutes"); // Ensure this path is correct

const app = express();
app.use(cors());
app.use(express.json());

// Use the authentication routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
