import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/auth/Login/login.jsx';
import Signup from './components/auth/Signup/signup.jsx';


import MyProfile from "./components/Pages/MyProfile/myprofile.jsx";
import BookAppointment from "./components/Pages/BookAppointment/bookappointment.jsx";
import MyAppointment from "./components/Pages/MyAppointment/myappointments.jsx";
import PatientDashboard from './components/Pages/PatientDashboard/patientdashboard.jsx';
import Patient from "./components/Pages/Patient/patient.jsx"; 

import Services from './components/Pages/Services/services.jsx';
import Header from "./components/Header/header.jsx";
import Sidebar from "./components/Sidebar/sidebar.jsx";

const DashboardLayout = ({ children }) => (
  <div className="flex flex-col h-screen">
    <Header />
    <div className="flex flex-1 overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {children}
      </div>
    </div>
  </div>
);


function App() {
  return (
    <Router>
      <Routes>
        {/* Standalone routes */}
        <Route path="/services" element={<DashboardLayout><Services /></DashboardLayout>} />

        {/* Routes with Dashboard layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/*Sidebar button */}
        <Route path="/" element={<DashboardLayout><PatientDashboard /></DashboardLayout>} />
        <Route path="/patient" element={<DashboardLayout><Patient /></DashboardLayout>} />

         {/*Dashboard pages */}
        <Route path="/patientdashboard" element={<DashboardLayout><PatientDashboard /></DashboardLayout>} />
        <Route path="/myprofile" element={<DashboardLayout><MyProfile /></DashboardLayout>} />
        <Route path="/services" element={<DashboardLayout><Services /></DashboardLayout>} />
        <Route path="/bookappointment" element={<DashboardLayout><BookAppointment /></DashboardLayout>} />
        <Route path="/myappointments" element={<DashboardLayout><MyAppointment /></DashboardLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
