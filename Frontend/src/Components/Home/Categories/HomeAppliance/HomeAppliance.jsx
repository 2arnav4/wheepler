import React, { useRef } from "react";
import styles from "./HomeAppliance.module.css";

// ✅ Import local images
import main from "../../../../assets/HomeApplianceImage/main.png";
import image1 from "../../../../assets/HomeApplianceImage/image1.png";
import image2 from "../../../../assets/HomeApplianceImage/image2.png";
import image3 from "../../../../assets/HomeApplianceImage/image3.png";

const HomeAppliance = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const scrollAmount = dir === "left" ? -350 : 350;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // ✅ Top categories (like Electricals layout)
  const topCategories = [
    { name: "Refrigerators", img: main },
    { name: "Ceiling Fans", img: image1 },
    { name: "Microwave Ovens", img: image2 },
    { name: "Washing Machines", img: image3 },
  ];

  // ✅ Product slider items
  const products = [
    { name: "LG Smart Refrigerator", price: 27999, oldPrice: 35999, discount: "22% OFF", img: main },
    { name: "Philips Ceiling Fan", price: 1999, oldPrice: 2499, discount: "20% OFF", img: image1 },
    { name: "Samsung Microwave Oven", price: 7499, oldPrice: 9999, discount: "25% OFF", img: image2 },
    { name: "Whirlpool Washing Machine", price: 13999, oldPrice: 18999, discount: "26% OFF", img: image3 },
    { name: "LG Smart Refrigerator", price: 27999, oldPrice: 35999, discount: "22% OFF", img: main },
    { name: "Philips Ceiling Fan", price: 1999, oldPrice: 2499, discount: "20% OFF", img: image1 },
    { name: "Samsung Microwave Oven", price: 7499, oldPrice: 9999, discount: "25% OFF", img: image2 },
    { name: "Whirlpool Washing Machine", price: 13999, oldPrice: 18999, discount: "26% OFF", img: image3 },
  ];

  return (
    <div className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <h2>HOME APPLIANCES</h2>
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

export default HomeAppliance;
