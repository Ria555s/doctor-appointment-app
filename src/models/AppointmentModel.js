import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  doctorName: String,
  department: String,
  rating: Number,
  date: String,
  time: String,
  patientName: String,
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
export default Appointment;






