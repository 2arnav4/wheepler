import React, { useState, useEffect } from 'react';
import styles from './categories.module.css';

const Categories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Category data - you'll need to add your actual category images
  const categories = [
    {
      id: 1,
      name: 'Industrial Tools',
      image: '/assets/categories/tools.jpg',
      icon: '🔧'
    },
    {
      id: 2,
      name: 'Safety Equipment',
      image: '/assets/categories/safety.jpg',
      icon: '🛡️'
    },
    {
      id: 3,
      name: 'Electrical',
      image: '/assets/categories/electrical.jpg',
      icon: '⚡'
    },
    {
      id: 4,
      name: 'Office Supplies',
      image: '/assets/categories/office.jpg',
      icon: '📋'
    },
    {
      id: 5,
      name: 'Medical Supplies',
      image: '/assets/categories/medical.jpg',
      icon: '🏥'
    },
    {
      id: 6,
      name: 'Construction',
      image: '/assets/categories/construction.jpg',
      icon: '🏗️'
    },
    {
      id: 7,
      name: 'Automotive',
      image: '/assets/categories/automotive.jpg',
      icon: '🚗'
    },
    {
      id: 8,
      name: 'Packaging',
      image: '/assets/categories/packaging.jpg',
      icon: '📦'
    },
    {
      id: 9,
      name: 'Lighting',
      image: '/assets/categories/lighting.jpg',
      icon: '💡'
    },
    {
      id: 10,
      name: 'Plumbing',
      image: '/assets/categories/plumbing.jpg',
      icon: '🚰'
    },
    {
      id: 11,
      name: 'Security',
      image: '/assets/categories/security.jpg',
      icon: '🔒'
    },
    {
      id: 12,
      name: 'Gardening',
      image: '/assets/categories/gardening.jpg',
      icon: '🌱'
    },
    {
      id: 13,
      name: 'HVAC',
      image: '/assets/categories/hvac.jpg',
      icon: '❄️'
    },
    {
      id: 14,
      name: 'Fire Safety',
      image: '/assets/categories/fire.jpg',
      icon: '🔥'
    },
    {
      id: 15,
      name: 'Cleaning',
      image: '/assets/categories/cleaning.jpg',
      icon: '🧽'
    },
    {
      id: 16,
      name: 'IT Equipment',
      image: '/assets/categories/it.jpg',
      icon: '💻'
    },
    {
      id: 17,
      name: 'Lab Equipment',
      image: '/assets/categories/lab.jpg',
      icon: '🧪'
    },
    {
      id: 18,
      name: 'Furniture',
      image: '/assets/categories/furniture.jpg',
      icon: '🪑'
    },
    {
      id: 19,
      name: 'Stationery',
      image: '/assets/categories/stationery.jpg',
      icon: '📝'
    },
    {
      id: 20,
      name: 'Sports',
      image: '/assets/categories/sports.jpg',
      icon: '⚽'
    },
    {
      id: 21,
      name: 'Kitchen',
      image: '/assets/categories/kitchen.jpg',
      icon: '🍳'
    },
    {
      id: 22,
      name: 'Textiles',
      image: '/assets/categories/textiles.jpg',
      icon: '🧵'
    },
    {
      id: 23,
      name: 'Electronics',
      image: '/assets/categories/electronics.jpg',
      icon: '📱'
    },
    {
      id: 24,
      name: 'Tools & Hardware',
      image: '/assets/categories/hardware.jpg',
      icon: '🔨'
    }
  ];

  const itemsPerSlide = 8; // Number of categories to show at once
  const totalSlides = Math.ceil(categories.length / itemsPerSlide);

  // Auto-rotate categories every 6 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? totalSlides - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === totalSlides - 1 ? 0 : currentIndex + 1);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const getCurrentCategories = () => {
    const startIndex = currentIndex * itemsPerSlide;
    return categories.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <div className={styles.categoriesContainer}>
      <div className={styles.categoriesHeader}>
        <h2 className={styles.categoriesTitle}>Browse All Categories</h2>
      </div>

      <div 
        className={styles.categoriesWrapper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Left Arrow */}
        <button 
          className={`${styles.navArrow} ${styles.leftArrow}`}
          onClick={goToPrevious}
          aria-label="Previous categories"
        >
          &#8249;
        </button>

        {/* Categories Display */}
        <div className={styles.categoriesDisplay}>
          <div 
            className={styles.categoriesSlider}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: 'transform 0.5s ease-in-out'
            }}
          >
            {Array.from({ length: totalSlides }, (_, slideIndex) => (
              <div key={slideIndex} className={styles.slideGroup}>
                {categories
                  .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                  .map((category) => (
                    <div key={category.id} className={styles.categoryItem}>
                      <div className={styles.categoryIcon}>
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className={styles.categoryImage}
                        />
                        <div className={styles.categoryEmoji}>{category.icon}</div>
                      </div>
                      <span className={styles.categoryName}>{category.name}</span>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button 
          className={`${styles.navArrow} ${styles.rightArrow}`}
          onClick={goToNext}
          aria-label="Next categories"
        >
          &#8250;
        </button>
      </div>

      {/* Dots Indicator */}
      <div className={styles.dotsContainer}>
        {Array.from({ length: totalSlides }, (_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
