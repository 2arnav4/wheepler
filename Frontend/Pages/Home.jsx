import React from "react";
import Banner from "../src/Components/Home/Banner/Banner";
import Categories from "../src/Components/Home/Categories/Categories";
// import Slider from '../src/Components/Home/Slider/Slider';

const Home = () => {
  return (
    <div className="home-page">
      {/* Auto-rotating Banner Section */}
      <section className="banner-section">
        <Banner />
      </section>

      {/* Browse All Categories Section */}
      <section className="categories-section">
        <Categories />
      </section>
    </div>
  );
};

export default Home;
