import express from 'express';
import Appointment from '../../models/AppointmentModel.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    console.log("REQUEST BODY:", req.body);

    const { doctorName, department, rating, date, time, patientName } = req.body;

    if (!doctorName || !department || !rating === undefined || !date || !time || !patientName) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newAppointment = new Appointment({ doctorName, department, rating, date, time, patientName });
    const saved = await newAppointment.save();

    res.status(200).json(saved);
  } catch (err) {
    console.error("BACKEND ERROR:", err.message, err.stack);

    res.status(500).json({ message: "Booking failed", error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (err) {
    console.error("GET APPOINTMENT ERROR:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Create a new patient
router.post('/add', async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json({ message: 'Patient added successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// (Optional) Get all patients
router.get('/', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;







