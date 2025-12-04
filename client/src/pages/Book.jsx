import React, { useState } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // change when deploying

const Book = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    aadhaarNumber: "",
    numPeople: 1,
    numAdults: 1,
    numKids: 0,
    checkInDate: "",
    checkOutDate: "",
    roomType: "Standard",
    specialRequests: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    message: "",
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear status on change
    setStatus({ loading: false, message: "", error: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", error: false });

    try {
      const res = await axios.post(`${API_BASE_URL}/api/bookings`, formData);

      setStatus({
        loading: false,
        message:
          res.data?.message ||
          "Your booking request has been submitted. If rooms are available for your dates, the hotel will contact you.",
        error: false,
      });

      // Don’t wipe all fields so user can adjust easily – only clear special requests
      setFormData((prev) => ({
        ...prev,
        specialRequests: "",
      }));
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        message:
          err.response?.data?.message ||
          "Something went wrong while submitting your request. Please try again.",
        error: true,
      });
    }
  };

  return (
    <section className="page page-book">
      <h2>Book a room request</h2>
      <p className="page-subtitle">
        Fill in the basic details below. This form sends a booking request to Hotel Vyom.
        If rooms are available for your selected dates, the hotel team will contact you
        on your mobile number.
      </p>

      <form className="card booking-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Full name*
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Mobile number*
            <input
              type="tel"
              name="mobileNumber"
              placeholder="10-digit mobile number"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email (optional)
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            Aadhaar number* (any one guest)
            <input
              type="text"
              name="aadhaarNumber"
              placeholder="12-digit Aadhaar number"
              value={formData.aadhaarNumber}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Total people*
            <input
              type="number"
              name="numPeople"
              min="1"
              value={formData.numPeople}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Adults*
            <input
              type="number"
              name="numAdults"
              min="0"
              value={formData.numAdults}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Kids*
            <input
              type="number"
              name="numKids"
              min="0"
              value={formData.numKids}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            Check-in date*
            <input
              type="date"
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Check-out date*
            <input
              type="date"
              name="checkOutDate"
              value={formData.checkOutDate}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Room type
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
            >
              <option value="Standard">Standard</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Suite">Suite</option>
            </select>
          </label>
        </div>

        <div className="form-row">
          <label className="form-full">
            Special requests
            <textarea
              name="specialRequests"
              placeholder="Any timing preference, early check-in, extra bed, etc."
              rows="3"
              value={formData.specialRequests}
              onChange={handleChange}
            />
          </label>
        </div>

        <button className="primary-btn" type="submit" disabled={status.loading}>
          {status.loading ? "Submitting..." : "Submit booking request"}
        </button>

        {status.message && (
          <p className={`form-status ${status.error ? "error" : "success"}`}>
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
};

export default Book;
