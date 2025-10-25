import React from 'react';
import styles from './SubNavbar.module.css';

// 4 specific categories as requested with images
const categories = [
  {
    name: 'Electrical Appliances',
    image: '/src/assets/SubNavbar/electrical.jpg',
    icon: '⚡',
    subcategories: [
      {
        title: 'Fans',
        items: ['Ceiling Fans', 'Wall Fans', 'Pedestal Fans', 'Exhaust Fans', 'Table Fans']
      },
      {
        title: 'Geysers & Water Heaters',
        items: ['Storage Geysers', 'Instant Geysers', 'Gas Geysers', 'Immersion Rods']
      },
      {
        title: 'LED Lighting',
        items: ['LED Flood Lights', 'LED Torches', 'LED Bulbs', 'LED Street Lights', 'LED Panel Lights']
      },
      {
        title: 'Power Generation',
        items: ['Stabilizers', 'Batteries', 'Generators', 'Soft Starters', 'Variable Frequency Drives']
      }
    ]
  },
  {
    name: 'Hardware & Accessories',
    image: '/src/assets/SubNavbar/hardware.jpg',
    icon: '🔧',
    subcategories: [
      {
        title: 'Power Tools',
        items: ['Drills', 'Grinders', 'Saws', 'Air Compressors', 'Impact Wrenches']
      },
      {
        title: 'Hand Tools',
        items: ['Screwdrivers', 'Wrenches', 'Pliers', 'Hammers', 'Spanners']
      },
      {
        title: 'Fasteners',
        items: ['Screws', 'Bolts', 'Nuts', 'Washers', 'Rivets']
      },
      {
        title: 'Measuring Tools',
        items: ['Multimeters', 'Calipers', 'Thermometers', 'Levels', 'Tapes']
      }
    ]
  },
  {
    name: 'Home Appliance',
    image: '/src/assets/SubNavbar/home.jpg',
    icon: '🏠',
    subcategories: [
      {
        title: 'Kitchen Appliances',
        items: ['Mixer Grinders', 'Food Processors', 'Juicers', 'Blenders', 'Toasters']
      },
      {
        title: 'Cleaning Equipment',
        items: ['Vacuum Cleaners', 'Steam Cleaners', 'Floor Polishers', 'Carpet Cleaners']
      },
      {
        title: 'Air Conditioning',
        items: ['Split ACs', 'Window ACs', 'Portable ACs', 'Air Purifiers', 'Humidifiers']
      },
      {
        title: 'Home Security',
        items: ['CCTV Cameras', 'Door Locks', 'Alarm Systems', 'Motion Sensors']
      }
    ]
  },
  {
    name: 'Plumbing Hardware',
    image: '/src/assets/SubNavbar/plumbing.jpg',
    icon: '🚰',
    subcategories: [
      {
        title: 'Pipes & Fittings',
        items: ['PVC Pipes', 'CPVC Pipes', 'GI Pipes', 'Pipe Fittings', 'Elbows']
      },
      {
        title: 'Valves & Controls',
        items: ['Gate Valves', 'Ball Valves', 'Check Valves', 'Pressure Valves', 'Flow Controls']
      },
      {
        title: 'Water Pumps',
        items: ['Submersible Pumps', 'Centrifugal Pumps', 'Sewage Pumps', 'Booster Pumps']
      },
      {
        title: 'Bathroom Fixtures',
        items: ['Taps', 'Showers', 'Basins', 'Toilets', 'Bathroom Accessories']
      }
    ]
  }
];

const SubNavbar = () => {
  return (
    <nav className={styles.subNavbar}>
      <div className={styles.navContainer} style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <ul className={styles.navList}>
          {categories.map((category) => (
            <li key={category.name} className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                <div className={styles.categoryIcon}>
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className={styles.categoryImage}
                  />
                  <div className={styles.categoryEmoji}>{category.icon}</div>
                </div>
                <span className={styles.categoryName}>{category.name}</span>
                {category.subcategories && <span className={styles.arrow}> ▼</span>}
              </a>
              {category.subcategories && (
                <div className={styles.megaMenu}>
                  <div className={styles.menuContent}>
                    {category.subcategories.map((sub) => (
                      <div key={sub.title} className={styles.menuColumn}>
                        <h6 className={styles.menuTitle}>{sub.title}</h6>
                        <ul className={styles.subList}>
                          {sub.items.map((item) => (
                            <li key={item}>
                              <a href="#" className={styles.subLink}>{item}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SubNavbar;