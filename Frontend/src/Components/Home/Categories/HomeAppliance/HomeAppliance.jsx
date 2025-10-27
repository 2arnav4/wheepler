import React from "react";
import styles from "./HomeAppliance.module.css";

const HomeAppliance = () => {
  return (
    <div className={styles.section}>
      <div className={styles.headerRow}>
        <h2 className={styles.title}>HOME APPLIANCES</h2>
        <button className={styles.viewAll}>View All</button>
      </div>

      <div className={styles.brandRow}>
        <div className={styles.brandCard}><img src="https://via.placeholder.com/80?text=LG" /><p>LG</p></div>
        <div className={styles.brandCard}><img src="https://via.placeholder.com/80?text=Philips" /><p>Philips</p></div>
      </div>

      <div className={styles.productsGrid}>
        <div className={styles.productCard}>
          <img src="https://via.placeholder.com/200x150?text=Fan" />
          <p className={styles.productName}>Philips Ceiling Fan</p>
          <p className={styles.price}>₹1,999 <span className={styles.oldPrice}>₹2,499</span></p>
          <p className={styles.discount}>20% OFF</p>
        </div>
      </div>
    </div>
  );
};

export default HomeAppliance;
