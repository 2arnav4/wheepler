import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => (
  <>
    {/* Top Navbar */}
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
      <a className="navbar-brand fw-bold" href="#">
          <img
            src="/Blue and Green Vibrant Modern Brutalist Geometric Website Logo.jpg"
            alt="Wheeptler Logo"
            style={{ 
              height: "60px",
              width: "auto",
              marginRight: "20px"
            }}
          />
        </a>

        {/* Center Search Bar */}
        <form
          className="d-flex mx-auto me-lg-4" // <-- CHANGED THIS LINE
          style={{ maxWidth: "800px", width: "100%" }} // <-- CHANGED THIS LINE
          role="search"
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Product, Category, Brand..."
            aria-label="Search"
            style={{ fontSize: "16px", padding: "12px 16px" }}
          />
          <button className="btn btn-primary" type="submit" style={{ padding: "12px 24px" }}>
            Search
          </button>
        </form>

        {/* Right-side Links */}
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 flex-row gap-4 align-items-center" style={{ gap: "2rem" }}>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center" href="#" style={{ fontSize: "14px", fontWeight: "500" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "6px" }}>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Login Now
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center" href="#" style={{ fontSize: "14px", fontWeight: "500" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "6px" }}>
                <path d="M16 3h5v5"></path>
                <path d="M8 3H3v5"></path>
                <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"></path>
                <path d="M21 3l-7.828 7.828A4 4 0 0 0 12 13.172V22"></path>
              </svg>
              Track Order
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center" href="#" style={{ fontSize: "14px", fontWeight: "500" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "6px" }}>
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default Navbar;