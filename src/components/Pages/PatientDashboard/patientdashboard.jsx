import React from 'react';
import './patientdashboard.css';




const PatientDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-pink-100 to-purple-200 p-10">

      <div className="flex flex-1 overflow-hidden">

        {/* Patient Details Form */}
        <div className="flex-1 p-10">
          <h2 className="text-2xl font-bold mb-6">Patient Dashboard</h2>
          <div className="bg-white p-6 rounded shadow-md max-w-4xl">
            <h3 className="text-lg font-semibold mb-4">Patient Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input type="text" placeholder="First Name" className="border p-2 rounded" />
              <input type="text" placeholder="Last Name" className="border p-2 rounded" />
              <input type="text" placeholder="Phone" className="border p-2 rounded" />
              <input type="email" placeholder="Email" className="border p-2 rounded" />
              <input type="text" placeholder="Address Line 1" className="border p-2 rounded" />
              <input type="text" placeholder="Address Line 2" className="border p-2 rounded" />
              <input type="text" placeholder="City" className="border p-2 rounded" />
              <input type="text" placeholder="State" className="border p-2 rounded" />
              <input type="text" placeholder="Zipcode" className="border p-2 rounded" />
            </div>
            <button className="add-btn">
          ADD
        </button>
          </div>
        </div>
      </div>
      </div>
  );
};

export default PatientDashboard;
