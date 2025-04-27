import React, { useState } from 'react';
import './BookAppointment.css';
import axios from 'axios';

const BookAppointment = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [department, setDepartment] = useState('');
  const [comments, setComments] = useState('');
 

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const appointmentData = {
      date: date,
      time: time,
      department: department,
      doctorName: "Anirban Paul",
      patientName: "Alina Doe",
      rating: 5
    };
    console.log("appointmentData I'm sending:", appointmentData);
    try {
      const res = await fetch("http://localhost:5000/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointmentData),
      });
  
      if (!res.ok) throw new Error("Booking Failed");
      const result = await res.json();
      alert("Your Appointment Is Booked");
    } catch (err) {
      alert("Booking Failed");
      console.error("POST ERROR:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-pink-100 to-purple-200 p-10">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 mt-20 w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6">Book an Appointment</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Select Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border rounded px-3 py-2 w-full" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Select Time</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="border rounded px-3 py-2 w-full" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Department</label>
          <select value={department} onChange={(e) => setDepartment(e.target.value)} className="border rounded px-3 py-2 w-full">
            <option value="">Select Department</option>
            <option value="dermatologist">Dermatologist</option>
            <option value="cardiologist">Cardiologist</option>
            <option value="neurologist">Neurologist</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Comments</label>
          <textarea value={comments} onChange={(e) => setComments(e.target.value)} className="border rounded w-full px-3 py-2" rows="3" placeholder="Explain your problem..." />
        </div>

        <div className="mb-4">
          <label className="text-gray-700 font-medium flex items-center cursor-pointer">Upload Reports <img width="20" height="20" src="https://img.icons8.com/ios/50/upload--v1.png" alt="upload--v1"/>
            <input type="file" className="hidden" onChange={(e) => setFile(e.target.files[0])} />
          </label>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default BookAppointment;
