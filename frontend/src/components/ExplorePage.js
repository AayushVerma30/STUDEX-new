import React, { useEffect, useState } from "react";
import "./CSS/ExplorePage.css"; // create this

const ExplorePage = () => {
  const [offers, setOffers] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [barterMessage, setBarterMessage] = useState("");
  const [selectedOffer, setSelectedOffer] = useState(null);
  const token = localStorage.getItem("token");

  const fetchOffers = async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (query) params.append("q", query);
    if (category) params.append("category", category);
    if (location) params.append("location", location);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE || ""}/api/offers?${params.toString()}`);
      const data = await res.json();
      setOffers(data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOffers();
  }, [query, category, location]);

  const handleBarterRequest = async (offerId) => {
    if (!token) {
      alert("Please login to request a barter.");
      return;
    }
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE || ""}/api/barter/request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          offerId,
          message: barterMessage || "Hi, I’d like to barter with you."
        }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Barter request sent.");
        setBarterMessage("");
        setSelectedOffer(null);
      } else {
        alert(data.msg || "Failed to send request.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending request.");
    }
  };

  return (
    <div className="explore-page">
      <h2>Explore Offers</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search (title or description)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={fetchOffers}>Refresh</button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : offers.length === 0 ? (
        <p>No offers found.</p>
      ) : (
        <div className="offers-grid">
          {offers.map((o) => (
            <div key={o._id} className="offer-card">
              <h3>{o.title}</h3>
              <p>{o.description}</p>
              <p>
                <strong>Category:</strong> {o.category || "—"}
              </p>
              <p>
                <strong>Location:</strong> {o.location || "—"}
              </p>
              <p>
                <strong>By:</strong> {o.owner?.name || "Unknown"}
              </p>
              <button onClick={() => setSelectedOffer(o)}>Request Barter</button>
            </div>
          ))}
        </div>
      )}

      {selectedOffer && (
        <div className="modal">
          <div className="modal-content">
            <h3>Request barter for: {selectedOffer.title}</h3>
            <textarea
              placeholder="Your message"
              value={barterMessage}
              onChange={(e) => setBarterMessage(e.target.value)}
            />
            <div className="modal-actions">
              <button onClick={() => handleBarterRequest(selectedOffer._id)}>Send Request</button>
              <button onClick={() => setSelectedOffer(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExplorePage;