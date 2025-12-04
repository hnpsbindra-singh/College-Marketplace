import React from "react";

const Rooms = () => {
  const rooms = [
    {
      name: "Standard Room",
      price: "₹1,499 / night",
      tag: "Best for students & solo stays",
      details: [
        "Compact AC room with attached washroom",
        "Comfortable bed, study table and chair",
        "Ideal for short exam or interview visits",
      ],
    },
    {
      name: "Deluxe Room",
      price: "₹2,199 / night",
      tag: "Balanced comfort & space",
      details: [
        "Spacious AC room with better furnishings",
        "Seating space and better lighting",
        "Good for couples or 2–3 day visits",
      ],
    },
    {
      name: "Suite",
      price: "₹3,499 / night",
      tag: "For family & longer stays",
      details: [
        "Larger room with extra seating",
        "Comfortable for small families",
        "Better privacy and relaxed layout",
      ],
    },
  ];

  const reviews = [
    {
      name: "Rohit Verma",
      type: "Student – Entrance exam stay",
      rating: "★★★★☆",
      text: "Room was clean and check-in was quick. Location made it easy to reach the exam centre in the morning without stress.",
    },
    {
      name: "Neha & Parents",
      type: "Parents visiting campus",
      rating: "★★★★★",
      text: "We booked a Deluxe room. Staff was polite, and they helped us with cab information and local guidance.",
    },
    {
      name: "Amit Sharma",
      type: "Business visit",
      rating: "★★★★☆",
      text: "Simple, practical place to stay for 1–2 nights. Decent Wi-Fi, quiet room and no unnecessary complications.",
    },
  ];

  return (
    <div className="page page-rooms">
      {/* Rooms section */}
      <section className="card">
        <h2>Room categories at Hotel Vyom</h2>
        <p className="page-subtitle">
          These sample prices are indicative and can change based on season and availability.
          Final prices are confirmed directly by the hotel at the time of booking.
        </p>

        <div className="room-grid">
          {rooms.map((room) => (
            <div key={room.name} className="room-card">
              <div className="room-header">
                <h3>{room.name}</h3>
                <span className="room-price">{room.price}</span>
              </div>
              <p className="room-tag">{room.tag}</p>
              <ul className="room-list">
                {room.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews section */}
      <section className="card">
        <h2>Guest reviews</h2>
        <p className="page-subtitle">
          Below are example reviews to demonstrate how feedback and experiences could appear
          for guests staying at Hotel Vyom.
        </p>

        <div className="review-grid">
          {reviews.map((review) => (
            <div key={review.name} className="review-card">
              <div className="review-header">
                <strong>{review.name}</strong>
                <span className="review-rating">{review.rating}</span>
              </div>
              <p className="review-type">{review.type}</p>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Rooms;
