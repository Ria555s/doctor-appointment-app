import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";

const Sidebar = ({ onShowPatientDetails }) => {
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState(
    "https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-illustration-download-in-svg-png-gif-file-formats--person-girl-business-pack-illustrations-6515859.png"
  );
  const [name, setName] = useState("Lorem Ipsum");

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    sessionStorage.clear();
    navigate("/signup");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <aside className="sidebar">
      <div className="profile-section">
        <label htmlFor="upload" className="upload-label">
          <img
            src={profilePic}
            alt="profile"
            className="profile-img"
            style={{ cursor: "pointer" }}
            
          />
        </label>
        <input
          type="file"
          id="upload"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
        <h3>{name}</h3>
        <p>Patient 📷</p>
      </div>

      <div className="sidebar-buttons">
        <button onClick={onShowPatientDetails}>Patient</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </aside>
  );
};

export default Sidebar;



