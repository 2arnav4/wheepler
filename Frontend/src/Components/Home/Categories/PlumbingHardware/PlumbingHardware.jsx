import React, { useRef } from "react";
import styles from "./PlumbingHardware.module.css";

import img1 from "../../../../assets/PlumbingImage/1.jpg";
import img2 from "../../../../assets/PlumbingImage/2.jpg";
import img3 from "../../../../assets/PlumbingImage/3.jpg";
import img4 from "../../../../assets/PlumbingImage/4.jpg";

const PlumbingHardware = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const scrollAmount = dir === "left" ? -350 : 350;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Yellow Top Category Section
  const topCategories = [
    { name: "Bathroom Fittings", img: img1 },
    { name: "Showers & Taps", img: img2 },
    { name: "Pipes & Valves", img: img3 },
    { name: "Wash Basins", img: img4 },
  ];

  // Product Cards Below
  const products = [
    { name: "Hindware Faucet", price: 899, oldPrice: 1199, discount: "25% OFF", img: img1 },
    { name: "Jaquar Shower Set", price: 2199, oldPrice: 2899, discount: "24% OFF", img: img2 },
    { name: "Cera Sink Mixer", price: 1499, oldPrice: 1899, discount: "21% OFF", img: img3 },
    { name: "Kohler Basin Tap", price: 2599, oldPrice: 3299, discount: "21% OFF", img: img4 },
    { name: "Jaquar Shower Set", price: 2199, oldPrice: 2899, discount: "24% OFF", img: img2 },
  ];

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>PLUMBING HARDWARE</h2>
        <button className={styles.viewAll}>View All</button>
      </div>

      {/* Yellow Top Categories Section */}
      <div className={styles.topCategories}>
        {topCategories.map((cat, i) => (
          <div key={i} className={styles.catCard}>
            <img src={cat.img} alt={cat.name} />
            <p>{cat.name}</p>
            <span>Explore Now</span>
          </div>
        ))}
      </div>

      {/* Product Slider Section */}
      <div className={styles.sliderWrapper}>
        <button className={`${styles.arrow} ${styles.left}`} onClick={() => scroll("left")}>
          ❮
        </button>

        <div className={styles.slider} ref={scrollRef}>
          {products.map((p, i) => (
            <div key={i} className={styles.product}>
              <img src={p.img} alt={p.name} />
              <div className={styles.info}>
                <p className={styles.name}>{p.name}</p>
                <div className={styles.priceBox}>
                  <span className={styles.price}>₹{p.price}</span>
                  <span className={styles.old}>₹{p.oldPrice}</span>
                </div>
                <p className={styles.discount}>{p.discount}</p>
              </div>
            </div>
          ))}
        </div>

        <button className={`${styles.arrow} ${styles.right}`} onClick={() => scroll("right")}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default PlumbingHardware;
