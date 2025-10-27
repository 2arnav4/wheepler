import React from "react";
import styles from "./PlumbingHardware.module.css";

const PlumbingHardware = () => {
  return (
    <div className={styles.section}>
      <div className={styles.headerRow}>
        <h2 className={styles.title}>PLUMBING HARDWARE</h2>
        <button className={styles.viewAll}>View All</button>
      </div>

      <div className={styles.brandRow}>
        <div className={styles.brandCard}><img src="https://via.placeholder.com/80?text=Jaquar" /><p>Jaquar</p></div>
        <div className={styles.brandCard}><img src="https://via.placeholder.com/80?text=Hindware" /><p>Hindware</p></div>
      </div>

      <div className={styles.productsGrid}>
        <div className={styles.productCard}>
          <img src="https://via.placeholder.com/200x150?text=Faucet" />
          <p className={styles.productName}>Hindware Faucet</p>
          <p className={styles.price}>₹899 <span className={styles.oldPrice}>₹1,199</span></p>
          <p className={styles.discount}>25% OFF</p>
        </div>
      </div>
    </div>
  );
};

export default PlumbingHardware;
