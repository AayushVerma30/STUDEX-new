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
    image: "", // Base64 image
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userProfile", JSON.stringify(profile));
    setMessage("Profile updated successfully ✅");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <div className="profile-avatar">
          {profile.image ? (
            <img src={profile.image} alt="Profile" />
          ) : (
            <div className="default-avatar">Upload Photo</div>
          )}
        </div>

        <label className="profile-upload-wrapper">
          Change Photo
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </label>

        <h2>Your Profile</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder="Full Name" required />
          <input type="email" name="email" value={profile.email} onChange={handleChange} placeholder="Email" required />
          <input type="tel" name="phone" value={profile.phone} onChange={handleChange} placeholder="Phone" />
          <input type="text" name="department" value={profile.department} onChange={handleChange} placeholder="Department" />
          <input type="text" name="skills" value={profile.skills} onChange={handleChange} placeholder="Skills (comma-separated)" />
          <textarea name="bio" rows="4" value={profile.bio} onChange={handleChange} placeholder="Short Bio..." />
          

          <button type="submit">Save Changes</button>
        </form>

        {message && <p className="success">{message}</p>}
      </div>
    </div>
  );
};

export default Profile;
