const mongoose = require('mongoose');

// Define the schema for the Appointment
const appointmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    userId: { type: String, required: true },
    age: { type: Number, required: true },
    appointmentDate: { type: Date, required: true },
    timeSegment: { type: String, required: true },
    message: { type: String },
});

// Create a model for the schema
const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
