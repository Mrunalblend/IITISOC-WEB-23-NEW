// server.js
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const User = require('./user'); // Import the User model
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Route for user registration
app.post('/register', async (req, res) => {
  try {const { email, password } = req.body; } } )
     

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Create a new user and save it to the database
