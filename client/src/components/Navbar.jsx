import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo" onClick={() => navigate("/")}>
          <div className="navbar-logo-mark">BAR</div>
          <div className="navbar-logo-text">BookARoom</div>
        </div>

        <nav className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) => "nav-btn" + (isActive ? " nav-btn-active" : "")}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => "nav-btn" + (isActive ? " nav-btn-active" : "")}
          >
            About
          </NavLink>

          <NavLink
            to="/rooms"
            className={({ isActive }) => "nav-btn" + (isActive ? " nav-btn-active" : "")}
          >
            Rooms
          </NavLink>

          <NavLink
            to="/book"
            className={({ isActive }) => "nav-btn" + (isActive ? " nav-btn-active" : "")}
          >
            Book
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => "nav-btn" + (isActive ? " nav-btn-active" : "")}
          >
            Contact
          </NavLink>

          {/* Auth buttons */}
          {!user ? (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  "nav-btn" + (isActive ? " nav-btn-active" : "")
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  "nav-btn" + (isActive ? " nav-btn-active" : "")
                }
              >
                Sign up
              </NavLink>
            </>
          ) : (
            <>
              <span className="nav-btn" style={{ cursor: "default", opacity: 0.9 }}>
                Hi, {user.name.split(" ")[0]}
              </span>
              <button
                className="nav-btn"
                type="button"
                onClick={logout}
                style={{ border: "1px solid rgba(248,250,252,0.25)", background: "transparent" }}
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
