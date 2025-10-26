import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navbar.module.css";
import { FaUser, FaShippingFast, FaShoppingCart } from "react-icons/fa";

const Navbar = () => (
  <>
    {/* Top Navbar */}
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <a className={styles.brand} href="#">
          Wheepler
        </a>

        {/* Center Search Bar */}
        <form className={styles.searchForm} role="search">
          <input
            className={styles.searchInput}
            type="search"
            placeholder="Search Product, Category, Brand..."
            aria-label="Search"
          />
          <button className={styles.searchButton} type="submit">
            Search
          </button>
        </form>

        {/* Right-side Links */}
        <ul className={styles.iconList}>
          <li className={styles.iconItem}>
            <FaUser className={styles.icon} />
            <a href="#" className={styles.iconLink}>
              Login Now
            </a>
          </li>

          <li className={styles.iconItem}>
            <FaShippingFast className={styles.icon} />
            <a href="#" className={styles.iconLink}>
              Track Order
            </a>
          </li>

          <li className={styles.iconItem}>
            <FaShoppingCart className={styles.icon} />
            <a href="#" className={styles.iconLink}>
              Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default Navbar;
