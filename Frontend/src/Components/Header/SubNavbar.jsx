import React, { useState } from "react";
import styles from "./SubNavbar.module.css";
import { FaChevronDown } from "react-icons/fa";

const categories = [
  {
    name: "Electricals",
    icon: "💡",
    subcategories: [
      {
        title: "Fans",
        items: ["Ceiling Fans", "Wall Fans", "Pedestal Fans", "Exhaust Fans", "Table Fans"],
      },
      {
        title: "Geysers & Water Heaters",
        items: ["Storage Geysers", "Instant Geysers", "Gas Geysers", "Immersion Rods"],
      },
      {
        title: "LED Lighting",
        items: ["LED Flood Lights", "LED Torches", "LED Bulbs", "LED Street Lights", "LED Panel Lights"],
      },
      {
        title: "Power Generation",
        items: ["Stabilizers", "Batteries", "Generators", "Soft Starters", "Variable Frequency Drives"],
      },
    ],
  },
  {
    name: "Hardware & Accessories",
    icon: "🔧",
    subcategories: [
      {
        title: "Power Tools",
        items: ["Drills", "Grinders", "Saws", "Air Compressors", "Impact Wrenches"],
      },
      {
        title: "Hand Tools",
        items: ["Screwdrivers", "Wrenches", "Pliers", "Hammers", "Spanners"],
      },
      {
        title: "Fasteners",
        items: ["Screws", "Bolts", "Nuts", "Washers", "Rivets"],
      },
      {
        title: "Measuring Tools",
        items: ["Multimeters", "Calipers", "Thermometers", "Levels", "Tapes"],
      },
    ],
  },
  {
    name: "Home Appliance",
    icon: "🏠",
    subcategories: [
      {
        title: "Kitchen Appliances",
        items: ["Mixer Grinders", "Food Processors", "Juicers", "Blenders", "Toasters"],
      },
      {
        title: "Cleaning Equipment",
        items: ["Vacuum Cleaners", "Steam Cleaners", "Floor Polishers", "Carpet Cleaners"],
      },
      {
        title: "Air Conditioning",
        items: ["Split ACs", "Window ACs", "Portable ACs", "Air Purifiers", "Humidifiers"],
      },
      {
        title: "Home Security",
        items: ["CCTV Cameras", "Door Locks", "Alarm Systems", "Motion Sensors"],
      },
    ],
  },
  {
    name: "Plumbing Hardware",
    icon: "🚰",
    subcategories: [
      {
        title: "Pipes & Fittings",
        items: ["PVC Pipes", "CPVC Pipes", "GI Pipes", "Pipe Fittings", "Elbows"],
      },
      {
        title: "Valves & Controls",
        items: ["Gate Valves", "Ball Valves", "Check Valves", "Pressure Valves", "Flow Controls"],
      },
      {
        title: "Water Pumps",
        items: ["Submersible Pumps", "Centrifugal Pumps", "Sewage Pumps", "Booster Pumps"],
      },
      {
        title: "Bathroom Fixtures",
        items: ["Taps", "Showers", "Basins", "Toilets", "Bathroom Accessories"],
      },
    ],
  },
];

const SubNavbar = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleMouseEnter = (category) => {
    setActiveCategory(category);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.categoryBar}>
        {categories.map((category, index) => (
          <div
            key={index}
            className={styles.categoryItem}
            onMouseEnter={() => handleMouseEnter(category)}
          >
            <span className={styles.icon}>{category.icon}</span>
            <span>{category.name}</span>
            <FaChevronDown className={styles.arrowIcon} />
          </div>
        ))}
      </div>

      {activeCategory && (
        <div
          className={styles.dropdownContent}
          onMouseEnter={() => handleMouseEnter(activeCategory)}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.dropdownGrid}>
            {activeCategory.subcategories.map((sub, i) => (
              <div key={i} className={styles.subcategory}>
                <h4>{sub.title}</h4>
                <ul>
                  {sub.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubNavbar;
