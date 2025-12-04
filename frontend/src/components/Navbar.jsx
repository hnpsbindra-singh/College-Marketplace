import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark thapar-navbar shadow-sm">
      <div className="container">
        
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
          <div className="logo-circle d-flex align-items-center justify-content-center">
            TU
          </div>
          <span className="fw-bold">Thapar Marketplace</span>
        </Link>

        <button 
          className="navbar-toggler" 
          data-bs-toggle="collapse" 
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <div className="navbar-nav ms-auto gap-3">
            <Link className={isActive("/")} to="/">Home</Link>
            <Link className={isActive("/sell")} to="/sell">Sell</Link>
            <Link className={isActive("/buy")} to="/buy">Buy</Link>
          </div>
        </div>

      </div>
    </nav>
  );
}
