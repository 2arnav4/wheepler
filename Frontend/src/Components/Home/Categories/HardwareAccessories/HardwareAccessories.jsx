import React, { useRef } from "react";
import styles from "./HardwareAccessories.module.css";

// ✅ Import local images (ensure these files exist)
import a from "../../../../assets/HardwareImage/a.jpg";
import b from "../../../../assets/HardwareImage/b.jpg";
import c from "../../../../assets/HardwareImage/c.jpg";
import d from "../../../../assets/HardwareImage/d.jpg";

const HardwareAccessories = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -350 : 350;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  // ✅ Top Categories section (like Electricals)
  const topCategories = [
    { name: "Power Tools", img: a },
    { name: "Hand Tools", img: b },
    { name: "Fasteners", img: c },
    { name: "Measuring Instruments", img: d },
  ];

  // ✅ Products section
  const products = [
    { name: "Bosch Cordless Drill", price: 2499, oldPrice: 3499, discount: "29% OFF", img: a },
    { name: "Stanley Hammer", price: 499, oldPrice: 799, discount: "38% OFF", img: b },
    { name: "Taparia Screwdriver Set", price: 299, oldPrice: 499, discount: "40% OFF", img: c },
    { name: "Spanner Wrench Set", price: 899, oldPrice: 1299, discount: "30% OFF", img: d },
    { name: "Bosch Cordless Drill", price: 2499, oldPrice: 3499, discount: "29% OFF", img: a },
    { name: "Stanley Hammer", price: 499, oldPrice: 799, discount: "38% OFF", img: b },
    { name: "Taparia Screwdriver Set", price: 299, oldPrice: 499, discount: "40% OFF", img: c },
    { name: "Spanner Wrench Set", price: 899, oldPrice: 1299, discount: "30% OFF", img: d },
  ];

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>HARDWARE ACCESSORIES</h2>
        <button className={styles.viewAll}>View All</button>
      </div>

      {/* 🟡 Top yellow category section (same as Electricals) */}
      <div className={styles.topCategories}>
        {topCategories.map((cat, i) => (
          <div key={i} className={styles.catCard}>
            <img src={cat.img} alt={cat.name} />
            <p>{cat.name}</p>
            <span>Explore Now</span>
          </div>
        ))}
      </div>

      {/* 🔁 Product slider with arrows */}
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

export default HardwareAccessories;
