import React, { useState, useEffect } from "react";
import Sidebar from '../../Sidebar/sidebar';
import axios from 'axios';



const Patient = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.post('/api/patients');

        setPatients(response.data);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-6">Patient List</h2>
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
        <p>No patients found.</p>
      )}
    </div>
  );
};

export default Patient;