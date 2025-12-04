import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "http://localhost:5000";

const Register = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [status, setStatus] = useState({ loading: false, message: "", error: false });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setStatus({ loading: false, message: "", error: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", error: false });

    try {
      const res = await axios.post(`${API_BASE_URL}/api/auth/register`, form);
      console.log("Register response:", res.data);
      login(res.data.user, res.data.token);
      setStatus({ loading: false, message: "Registration successful.", error: false });
      navigate("/");
    } catch (err) {
      console.error("Register error:", err.response || err);
      setStatus({
        loading: false,
        message:
          err.response?.data?.message ||
          "Registration failed. Please check your details and try again.",
        error: true,
      });
    }
  };

  return (
    <section className="page">
      <h2>Create an account</h2>
      <p className="page-subtitle">
        Save your basic details for a smoother booking experience.
      </p>

      <form className="card booking-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Full name
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Minimum 6 characters"
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <button className="primary-btn" type="submit" disabled={status.loading}>
          {status.loading ? "Creating account..." : "Register"}
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

export default Register;
