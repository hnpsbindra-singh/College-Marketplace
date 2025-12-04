import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page page-home">
      {/* HERO SECTION */}
      <section className="hero">
        {/* Left: main intro */}
        <div className="hero-left">
          <p className="home-eyebrow">Hotel Vyom • Patiala</p>
          <h1>Plan a calm and organised stay in Patiala.</h1>
          <p>
            BAR – BookARoom is a simple booking assistant created for Hotel Vyom.
            Share your dates and basic details in a clean form and let the hotel
            team contact you if rooms are available. No accounts, no complex
            steps – just a structured way to plan your visit.
          </p>

          <ul className="hero-highlights">
            <li>Neat, comfortable rooms</li>
            <li>Student & family friendly</li>
            <li>Clear, direct coordination</li>
          </ul>

          <div className="home-cta-row">
            <Link to="/book" className="primary-btn">
              Submit a booking request
            </Link>
            <span className="home-cta-note">
              Takes less than 2 minutes • No payment on this website
            </span>
          </div>

          <div className="home-trust-strip">
            <div>
              <strong>For short, focused stays</strong>
              <p>Ideal for exams, admissions, interviews and family visits.</p>
            </div>
            <div className="home-trust-metric">
              <span className="home-trust-number">3</span>
              <span className="home-trust-label">Room categories</span>
            </div>
          </div>
        </div>

        {/* Right: highlight card */}
        <div className="hero-right home-hero-right">
          <h2>Your stay at a glance</h2>
          <p>
            A compact, practical hotel with essential amenities, well-suited for
            visitors who want a calm base while handling work, exams or family
            responsibilities in Patiala.
          </p>

          <div className="home-key-points">
            <div className="home-key-point">
              <h4>Location</h4>
              <p>Convenient access to key city areas and educational institutes.</p>
            </div>
            <div className="home-key-point">
              <h4>Guests</h4>
              <p>Students, parents, working professionals and small families.</p>
            </div>
            <div className="home-key-point">
              <h4>Approach</h4>
              <p>Simple rooms, clear communication, organised stay experience.</p>
            </div>
          </div>

          <p className="home-small-note">
            BAR is a booking request tool – final room confirmation and payment
            are handled directly by Hotel Vyom.
          </p>
        </div>
      </section>

      {/* INFO CARDS SECTION */}
      <section className="card home-info-section">
        <div className="home-info-grid">
          <div className="home-info-card">
            <h3>Room options</h3>
            <p>
              Choose between Standard, Deluxe and Suite categories. You can mention
              your preference in the booking form and the hotel will try to align
              room allocation based on availability.
            </p>
          </div>
          <div className="home-info-card">
            <h3>Who it works best for</h3>
            <p>
              Guests who prefer a sensible price, basic comfort and a stay that
              runs on time rather than luxury features – especially during busy
              admission or exam seasons.
            </p>
          </div>
          <div className="home-info-card">
            <h3>Why use BAR?</h3>
            <p>
              Instead of making multiple calls, you leave a clear, structured
              request. The hotel has all your details in one place before
              contacting you to confirm.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="card home-steps-section">
        <div className="home-section-header">
          <h2>How BAR – BookARoom works</h2>
          <p className="page-subtitle">
            A simple three-step flow to keep your stay planning neat and documented.
          </p>
        </div>

        <div className="home-steps-grid">
          <div className="home-step-card">
            <div className="home-step-badge">Step 1</div>
            <h4>Share your basic details</h4>
            <p>
              Fill in your name, contact number, Aadhaar of any one guest, total
              people and your planned check-in and check-out dates.
            </p>
          </div>
          <div className="home-step-card">
            <div className="home-step-badge">Step 2</div>
            <h4>Mention preferences clearly</h4>
            <p>
              Add room type preference and any important notes – early check-in,
              exam timings, campus visit schedule or extra bed requirements.
            </p>
          </div>
          <div className="home-step-card">
            <div className="home-step-badge">Step 3</div>
            <h4>Hotel team contacts you</h4>
            <p>
              If rooms are available for those dates, the hotel team calls you to
              confirm the booking, discuss pricing and finalise your stay plan.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="card home-final-cta">
        <div>
          <h2>Ready to plan your stay at Hotel Vyom?</h2>
          <p className="page-subtitle">
            Submitting a booking request does not lock you into payment – it simply
            helps both you and the hotel stay organised.
          </p>
        </div>
        <div className="home-final-cta-actions">
          <Link to="/book" className="primary-btn">
            Go to booking form
          </Link>
          <Link to="/rooms" className="home-secondary-link">
            View room categories
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
