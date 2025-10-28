import React, { useRef } from "react";
import styles from "./ElectricalAppliances.module.css";
import a from "../../../../assets/ElectricalImage/a.jpg";
import b from "../../../../assets/ElectricalImage/b.jpg";
import c from "../../../../assets/ElectricalImage/c.jpg";
import d from "../../../../assets/ElectricalImage/d.jpg";

const ElectricalAppliances = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -350 : 350;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  const topCategories = [
    { name: "House Wires", img: a },
    { name: "Multicore Cables", img: b },
    { name: "Stabilizers", img: c },
    { name: "Batteries", img: d },
  ];

  const products = [
    { name: "FAB 1 Sqmm Single Core Red FR PVC CC Wire", price: 429, oldPrice: 1600, discount: "73% OFF", img: a },
    { name: "Muscle Grid 10KVA Heavy Duty", price: 15539, oldPrice: 27999, discount: "44% OFF", img: b },
    { name: "Weldex 1200W Rotary Hammer", price: 2199, oldPrice: 4500, discount: "51% OFF", img: c },
    { name: "HiKOKI 600W Angle Grinder", price: 1119, oldPrice: 2200, discount: "49% OFF", img: d },
    { name: "Eastman Omega 1500VA", price: 6499, oldPrice: 11600, discount: "44% OFF", img: a },
    { name: "Luminous Eco Watt Neo 1650", price: 7929, oldPrice: 8100, discount: "2% OFF", img: b },
    { name: "Anchor Wire Roll 20m", price: 319, oldPrice: 600, discount: "47% OFF", img: c },
  ];

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>ELECTRICALS</h2>
        <button className={styles.viewAll}>View All</button>
      </div>

      {/* Top yellow category section */}
      <div className={styles.topCategories}>
        {topCategories.map((cat, i) => (
          <div key={i} className={styles.catCard}>
            <img src={cat.img} alt={cat.name} />
            <p>{cat.name}</p>
            <span>Explore Now</span>
          </div>
        ))}
      </div>

      {/* Product slider */}
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

export default ElectricalAppliances;
