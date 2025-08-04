import React, { useEffect, useState } from "react";
import "./CSS/Profile.css";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    skills: "",
    bio: "",
    photo: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (storedProfile) setProfile(storedProfile);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfile((prev) => ({ ...prev, photo: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userProfile", JSON.stringify(profile));
    setMessage("✅ Profile updated successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="profile-page">
      <h2>Your Profile</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="photo-section">
          {profile.photo ? (
            <img src={profile.photo} alt="Profile" className="profile-photo" />
          ) : (
            <div className="photo-placeholder">Upload Photo</div>
          )}
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
        </div>

        <div className="form-section">
          <label>Name:</label>
          <input name="name" value={profile.name} onChange={handleChange} required />

          <label>Email:</label>
          <input name="email" type="email" value={profile.email} onChange={handleChange} required />

          <label>Phone:</label>
          <input name="phone" type="tel" value={profile.phone} onChange={handleChange} />

          <label>Department:</label>
          <input name="department" value={profile.department} onChange={handleChange} />
          
          <label>Year:</label>
          <input name="yearr" value={profile.year} onChange={handleChange} />

          <label>Skills:</label>
          <input name="skills" value={profile.skills} onChange={handleChange} />

          <label>Bio:</label>
          <textarea name="bio" value={profile.bio} rows="4" onChange={handleChange}></textarea>

          <button type="submit">Save Changes</button>
        </div>
      </form>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default Profile;
