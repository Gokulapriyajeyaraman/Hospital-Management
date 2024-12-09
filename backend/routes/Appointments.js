const express = require('express');
const Appointment = require('../models/Appointment');

const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const appointment = new Appointment(req.body);
        await appointment.save();
        res.status(201).json({ message: 'Appointment created successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create appointment' });
    }
});

router.get('/', async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch appointments' });
    }
});

module.exports = router;
