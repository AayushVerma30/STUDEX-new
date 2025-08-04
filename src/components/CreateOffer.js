import React, { useState } from 'react';
import './CSS/CreateOffer.css';

const CreateOffer = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just show success message
    console.log({ title, description, category, location });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    
    // Reset form
    setTitle('');
    setDescription('');
    setCategory('');
    setLocation('');
  };

  return (
    <div className="create-offer-page">
      <form className="create-offer-form" onSubmit={handleSubmit}>
        <h2>Create an Offer</h2>

        {success && <p className="success-msg">Offer created successfully!</p>}

        <input
          type="text"
          placeholder="Offer Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          required
        />

        <input
          type="text"
          placeholder="Category (e.g., Books, Stationery, Services)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Location (e.g., Hostel A, Room 101)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <button type="submit">Submit Offer</button>
      </form>
    </div>
  );
};

export default CreateOffer;
