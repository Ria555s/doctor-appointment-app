import React, { useState } from 'react';
import axios from 'axios';
import './patientdashboard.css';

const PatientDashboard = ({ showPatients }) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });

  const [patients, setPatients] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddPatient = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/patients', form);
  
      alert('Patient added!');
      setForm({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
      });
    } catch (error) {
      console.error('Error adding patient:', error);
    }
  };

  const handleShowPatientDetails = async () => {
    try {
      await axios.post('http://localhost:5000/api/patients', form);
      setPatients(response.data);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  // If the Sidebar triggers a request to show patients
  React.useEffect(() => {
    if (showPatients) {
      handleShowPatientDetails();
    }
  }, [showPatients]);

  return (
    <div className="min-h-screen bg-gradient-to-bl from-pink-100 to-purple-200 p-10">
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 p-10">
          <h2 className="text-2xl font-bold mb-6">Patient Dashboard</h2>
          <div className="bg-white p-4 sm:p-6 rounded shadow-md w-full max-w-4xl">

            <h3 className="text-lg font-semibold mb-4">Patient Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input name="firstName" value={form.firstName} onChange={handleChange} type="text" placeholder="First Name" className="border p-2 rounded" />
              <input name="lastName" value={form.lastName} onChange={handleChange} type="text" placeholder="Last Name" className="border p-2 rounded" />
              <input name="phone" value={form.phone} onChange={handleChange} type="text" placeholder="Phone" className="border p-2 rounded" />
              <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" className="border p-2 rounded" />
              <input name="address1" value={form.address1} onChange={handleChange} type="text" placeholder="Address Line 1" className="border p-2 rounded" />
              <input name="address2" value={form.address2} onChange={handleChange} type="text" placeholder="Address Line 2" className="border p-2 rounded" />
              <input name="city" value={form.city} onChange={handleChange} type="text" placeholder="City" className="border p-2 rounded" />
              <input name="state" value={form.state} onChange={handleChange} type="text" placeholder="State" className="border p-2 rounded" />
              <input name="zip" value={form.zip} onChange={handleChange} type="text" placeholder="Zipcode" className="border p-2 rounded" />
            </div>
            <button onClick={handleAddPatient} className="add-btn">
              ADD
            </button>
          </div>

          {/* Patient List Section */}
          <div className="bg-white p-6 rounded shadow-md max-w-4xl mt-10">
            <h3 className="text-lg font-semibold mb-4">Saved Patients</h3>
            {patients.length > 0 ? (
              <ul className="space-y-4">
                {patients.map((patient, index) => (
                  <li key={index} className="border-b pb-2">
                    <strong>{patient.firstName} {patient.lastName}</strong> - {patient.email}
                    <div className="text-sm text-gray-600">{patient.city}, {patient.state}</div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No patients yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;



