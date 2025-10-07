import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => (
  <>
    {/* Top Navbar */}
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
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
          className="d-flex mx-auto"
          style={{ maxWidth: "500px", width: "100%" }}
          role="search"
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Product, Category, Brand..."
            aria-label="Search"
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>

        {/* Right-side Links */}
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 flex-row gap-3 align-items-center">
          <li className="nav-item">
            <a className="nav-link" href="#">
              👤 Login Now
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              🚚 Track Order
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              🛒 Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default Navbar;
