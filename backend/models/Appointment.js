const mongoose = require('mongoose');


const appointmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    userId: { type: String, required: true },
    age: { type: Number, required: true },
    appointmentDate: { type: Date, required: true },
    timeSegment: { type: String, required: true },
    message: { type: String },
});


const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
