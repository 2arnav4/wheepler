import React from "react";
import styles from "./HardwareAccessories.module.css";

const HardwareAccessories = () => {
  return (
    <div className={styles.section}>
      <div className={styles.headerRow}>
        <h2 className={styles.title}>HARDWARE ACCESSORIES</h2>
        <button className={styles.viewAll}>View All</button>
      </div>

      <div className={styles.brandRow}>
        <div className={styles.brandCard}><img src="https://via.placeholder.com/80?text=Bosch" /><p>Bosch</p></div>
        <div className={styles.brandCard}><img src="https://via.placeholder.com/80?text=Hitachi" /><p>Hitachi</p></div>
      </div>

      <div className={styles.productsGrid}>
        <div className={styles.productCard}>
          <img src="https://via.placeholder.com/200x150?text=Drill" />
          <p className={styles.productName}>Bosch Cordless Drill</p>
          <p className={styles.price}>₹2,499 <span className={styles.oldPrice}>₹3,499</span></p>
          <p className={styles.discount}>29% OFF</p>
        </div>
      </div>
    </div>
  );
};

export default HardwareAccessories;
