import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyAppointment.css';
import medicalImage from './images/medical.jpg';
import { Eye } from 'lucide-react';


const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [year, setYear] = useState('2025');


  useEffect(() => {
    fetchAppointments()
  }, [year]);

  const fetchAppointments = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/appointments`);
      setAppointments(res.data);
    } catch (err) {
      alert('Failed to fetch appointments!');
    }
  };
  const onViewDetails = (appointment) => {
    console.log("Clicked appointment:", appointment);
  };


  return (
    <div className="p-10 bg-purple-100 min-h-screen">
      <div className="flex justify-center mb-6">
        <select
          className="border rounded px-3 py-2"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>

      <div className="grid grid-cols-80 md:grid-cols-2 gap-18">
        {appointments.map((appt, i) => (
          <div key={i} className="bg-white rounded shadow p-2">
            <img
              src={medicalImage}
              alt="doc"
              className="w-full h-60 object-contain border-4 border-purple-500 rounded-md"
            />

            <div className="mt-2 text-blue-600 font-bold">{appt.date}</div>
            <div className="text-sm mt-1">
              <p><strong>Doctor:</strong> {appt.doctorDetails?.name}</p>
              <p><strong>Department:</strong> {appt.department}</p>
              <p><strong>Rating:</strong> {appt.rating}</p>
              <p className="mt-2"><strong>Patient:</strong> {appt.patientName}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
