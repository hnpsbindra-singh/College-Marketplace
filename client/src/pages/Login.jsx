import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "http://localhost:5000";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState({ loading: false, message: "", error: false });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setStatus({ loading: false, message: "", error: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", error: false });

    try {
      const res = await axios.post(`${API_BASE_URL}/api/auth/login`, form);
      console.log("Login response:", res.data);

      login(res.data.user, res.data.token);
      setStatus({ loading: false, message: res.data.message || "Login successful.", error: false });
      navigate("/");
    } catch (err) {
      console.error("Login error:", err.response || err);
      setStatus({
        loading: false,
        message:
          err.response?.data?.message ||
          "Login failed. Please check your email and password.",
        error: true,
      });
    }
  };

  return (
    <section className="page">
      <h2>Login to BAR</h2>
      <p className="page-subtitle">
        Use your registered email and password or demo credentials.
      </p>

      <form className="card booking-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com or demo@bar.com"
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
              placeholder="Your password or demo123"
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <button className="primary-btn" type="submit" disabled={status.loading}>
          {status.loading ? "Logging in..." : "Login"}
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

export default Login;
