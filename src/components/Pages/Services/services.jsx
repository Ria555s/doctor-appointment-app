import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.error("Failed to fetch services:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-bl from-pink-100 to-purple-200 p-10">
      <div className="services-container">
        <h2 className="services-title">Hospital Services 💉</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              {service}
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

