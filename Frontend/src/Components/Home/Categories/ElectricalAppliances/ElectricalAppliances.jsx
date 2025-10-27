import React from "react";
import styles from "./ElectricalAppliances.module.css";

const ElectricalAppliances = () => {
  // 1. Kept your existing brands data
  const brands = [
    { name: "FAB", logo: "https://via.placeholder.com/80?text=FAB" },
    { name: "CabONE", logo: "https://via.placeholder.com/80?text=CabONE" },
    { name: "Elson", logo: "https://via.placeholder.com/80?text=Elson" },
    { name: "Fabgold", logo: "https://via.placeholder.com/80?text=Fabgold" },
  ];

  // 2. Added this new data based on the Moglix screenshot
  const topCategories = [
    {
      name: "Air Blowers",
      image: "https://via.placeholder.com/150/1E90FF/FFFFFF?text=Air+Blower",
    },
    {
      name: "Angle Grinders",
      image: "https://via.placeholder.com/150/1E90FF/FFFFFF?text=Grinder",
    },
    {
      name: "Rotary Hammers",
      image: "https://via.placeholder.com/150/1E90FF/FFFFFF?text=Hammer",
    },
    {
      name: "Demolition Hammers",
      image: "https://via.placeholder.com/150/1E90FF/FFFFFF?text=Demo+Hammer",
    },
  ];

  // 3. Kept your existing products data
  const products = [
    {
      name: "FAB 1 Sqmm Single Core Red FR PVC CC Wire",
      image: "https://via.placeholder.com/200x150?text=FAB+Wire",
      price: 429,
      oldPrice: 1600,
      discount: "73% OFF",
      rating: 4.7,
      reviews: 172,
    },
    {
      name: "Muscle Grid Legendary 10KVA Heavy Duty",
      image: "https://via.placeholder.com/200x150?text=Muscle+Grid",
      price: 15539,
      oldPrice: 27999,
      discount: "44% OFF",
      rating: 4.6,
      reviews: 15,
    },
    {
      name: "Weldex 1200W 3.6m Rotary Hammer",
      image: "https://via.placeholder.com/200x150?text=Weldex+Hammer",
      price: 2199,
      oldPrice: 4500,
      discount: "51% OFF",
      rating: 4.5,
      reviews: 88,
    },
    {
      name: "HiKOKI G10SS2 600W Angle Grinder",
      image: "https://via.placeholder.com/200x150?text=HiKOKI+Grinder",
      price: 1119,
      oldPrice: 2200,
      discount: "49% OFF",
      rating: 4.8,
      reviews: 205,
    },
  ];

  return (
    <div className={styles.section}>
      {/* Header row is the same */}
      <div className={styles.headerRow}>
        <h2 className={styles.title}>ELECTRICALS</h2>
        <button className={styles.viewAll}>View All</button>
      </div>

      {/* 4. This wrapper creates the new 3-column horizontal layout */}
      <div className={styles.contentWrapper}>
        
        {/* Column 1: Brands */}
        <div className={styles.brandsContainer}>
          <h3 className={styles.columnTitle}>Top Brands</h3>
          <div className={styles.brandRow}>
            {brands.map((brand) => (
              <div key={brand.name} className={styles.brandCard}>
                <img src={brand.logo} alt={brand.name} className={styles.brandImage} />
                <p>{brand.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Top Categories (NEW) */}
        <div className={styles.topCategoriesContainer}>
          <div className={styles.categoriesGrid}>
            {topCategories.map((cat) => (
              <div key={cat.name} className={styles.categoryCard}>
                <img src={cat.image} alt={cat.name} className={styles.categoryImage} />
                <p>{cat.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Products (Now horizontally scrolling) */}
        <div className={styles.productsContainer}>
          <div className={styles.productsGrid}>
            {products.map((p, i) => (
              <div key={i} className={styles.productCard}>
                <img src={p.image} alt={p.name} className={styles.productImage} />
                <div className={styles.productInfo}>
                  <p className={styles.rating}>
                    ⭐ {p.rating} ({p.reviews} Reviews)
                  </p>
                  <p className={styles.productName}>{p.name}</p>
                  <div className={styles.priceContainer}>
                    <span className={styles.price}>₹{p.price}</span>
                    <span className={styles.oldPrice}>₹{p.oldPrice}</span>
                  </div>
                  <p className={styles.discount}>{p.discount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ElectricalAppliances;