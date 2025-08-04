import React, { useEffect, useState } from 'react';
import './CSS/ViewOffers.css';

const dummyOffers = [
  {
    id: 1,
    title: 'Scientific Calculator',
    description: 'Casio fx-991ES PLUS, barely used.',
    image: 'https://via.placeholder.com/150',
    user: 'Ravi Sharma',
    department: 'ECE'
  },
  {
    id: 2,
    title: 'Drawing Set',
    description: 'Complete set for engineering drawing.',
    image: 'https://via.placeholder.com/150',
    user: 'Neha Verma',
    department: 'Civil'
  },
  {
    id: 3,
    title: 'Reference Book - Java',
    description: 'Head First Java - like new condition.',
    image: 'https://via.placeholder.com/150',
    user: 'Aman Patel',
    department: 'CSE'
  }
];

function ViewOffers() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    // Fetch from backend here
    setOffers(dummyOffers);
  }, []);

  return (
    <div className="view-offers-container">
      <h2 className="offers-title">Available Offers</h2>

      <div className="offers-grid">
        {offers.map((offer) => (
          <div className="offer-card" key={offer.id}>
            <img src={offer.image} alt={offer.title} className="offer-image" />
            <div className="offer-info">
              <h3>{offer.title}</h3>
              <p className="description">{offer.description}</p>
              <p className="user-info">Offered by: <strong>{offer.user}</strong> ({offer.department})</p>
              <div className="card-actions">
                <button className="btn-view">View</button>
                <button className="btn-message">Message</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewOffers;
