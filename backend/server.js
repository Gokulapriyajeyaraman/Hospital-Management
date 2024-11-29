const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import CORS package
const Appointment = require('./models/Appointment');

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());  // This will allow all origins by default

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/hospitalDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Route to handle booking an appointment
app.post('/book-appointment', async (req, res) => {
  const { name, userId, age, appointmentDate, timeSegment, message } = req.body;

  console.log('Received data:', req.body);

  // Create a new appointment document
  const newAppointment = new Appointment({
    name,
    userId,
    age,
    appointmentDate,
    timeSegment,
    message,
  });

  try {
    // Save the new appointment to the database
    await newAppointment.save();
    console.log('Appointment booked successfully!');
    res.json({ message: 'Appointment booked successfully!' });
  } catch (error) {
    console.error('Error while booking appointment:', error);
    res.status(500).json({ message: 'Failed to book appointment' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
