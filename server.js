import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';
import Appointment from './src/models/AppointmentModel.js';
import appointmentRouter from './src/components/routes/myappointment.js'; // THIS is now correct

dotenv.config();

const app = express(); 

app.use(express.json());
app.use(cors());

// Routes
app.use('/appointments', appointmentRouter); 

//post request
app.post('/appointments', async (req, res) => {
  try {
    const { doctorName, department, rating, date, patientName } = req.body;

    const newAppointment = new Appointment({
      doctorName,
      department,
      rating,
      date: new Date(date),
      patientName,
    });

    await newAppointment.save();

    res.status(201).json({
      message: 'Appointment added successfully',
      appointment: newAppointment,
    });
  } catch (err) {
    console.error('Error adding appointment:', err);
    res.status(500).json({ message: 'Failed to add appointment' });
  }
});

// GET request to fetch all appointments
app.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (err) {
    console.error('Error fetching appointments:', err);
    res.status(500).json({ message: 'Failed to retrieve appointments' });
  }
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log(" MongoDB connected successfully"))
  .catch(err => console.log(" DB error ", err));
  console.log('ENV MONGO_URI:', process.env.MONGO_URI);


// File storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Sample static service route
app.get('/services', (req, res) => {
  res.json([
    "Regular healthcare package",
    "CT-SCAN | X-RAY",
    "Lab Test",
    "gynae health",
    "Ayurveda Treatment",
    "Dental Checkup"
  ]);
});

// Server start
app.listen(5000, () => {
  console.log(" Server running on port 5000");
});

