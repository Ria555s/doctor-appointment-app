import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  addressLine1: String,
  addressLine2: String,
  city: String,
  state: String,
  zipcode: String
});

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;

