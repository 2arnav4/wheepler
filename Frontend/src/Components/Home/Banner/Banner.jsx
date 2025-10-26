import React, { useState, useEffect } from 'react';
import styles from './banner.module.css';
import banner1 from '../../../assets/Banner/1.jpg';
import banner2 from '../../../assets/Banner/2.jpg';
import banner3 from '../../../assets/Banner/3.jpg';
import banner4 from '../../../assets/Banner/4.jpg';
import banner5 from '../../../assets/Banner/5.jpg';
import banner6 from '../../../assets/Banner/6.jpg';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Banner images - using the actual banner images from assets
  const banners = [
    {
      id: 1,
      image: banner1,
      title: 'Industrial Tools & Equipment',
      subtitle: 'Get up to 70% OFF on Premium Tools',
      buttonText: 'Shop Now',
      link: '#tools'
    },
    {
      id: 2,
      image: banner2,
      title: 'Electrical & Appliances',
      subtitle: 'Best Deals on Electrical Products',
      buttonText: 'Explore',
      link: '#electrical'
    },
    {
      id: 3,
      image: banner3,
      title: 'Safety & Security',
      subtitle: 'Protect Your Workforce',
      buttonText: 'View Products',
      link: '#safety'
    },
    {
      id: 4,
      image: banner4,
      title: 'Office Supplies',
      subtitle: 'Everything for Your Office',
      buttonText: 'Shop Office',
      link: '#office'
    },
    {
      id: 5,
      image: banner5,
      title: 'Construction Materials',
      subtitle: 'Build with Quality Materials',
      buttonText: 'Browse',
      link: '#construction'
    },
    {
      id: 6,
      image: banner6,
      title: 'Medical & Lab Supplies',
      subtitle: 'Professional Medical Equipment',
      buttonText: 'Shop Medical',
      link: '#medical'
    }
  ];

  // Auto-rotate banners every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === banners.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide(currentSlide === 0 ? banners.length - 1 : currentSlide - 1);
  };

  const goToNext = () => {
    setCurrentSlide(currentSlide === banners.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerWrapper}>
        {/* Main Banner Display */}
        <div 
          className={styles.bannerSlide}
          onClick={() => window.open(banners[currentSlide].link, '_blank')}
          style={{ cursor: 'pointer' }}
        >
          <img 
            src={banners[currentSlide].image} 
            alt={banners[currentSlide].title}
            className={styles.bannerImage}
          />
        </div>

        {/* Navigation Arrows */}
        <button 
          className={styles.navButton} 
          onClick={goToPrevious}
          aria-label="Previous banner"
        >
          &#8249;
        </button>
        <button 
          className={`${styles.navButton} ${styles.nextButton}`} 
          onClick={goToNext}
          aria-label="Next banner"
        >
          &#8250;
        </button>

        {/* Dots Indicator */}
        <div className={styles.dotsContainer}>
          {banners.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
