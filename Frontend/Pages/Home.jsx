import React from "react";
import Banner from "../src/Components/Home/Banner/Banner";
import Categories from "../src/Components/Home/Categories/Categories";
import ElectricalAppliances from "../src/Components/Home/Categories/ElectricalAppliances/ElectricalAppliances";
import HardwareAccessories from "../src/Components/Home/Categories/HardwareAccessories/HardwareAccessories";
import HomeAppliance from "../src/Components/Home/Categories/HomeAppliance/HomeAppliance";
import PlumbingHardware from "../src/Components/Home/Categories/PlumbingHardware/PlumbingHardware";



const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <Categories />
      <ElectricalAppliances />
      <HardwareAccessories />
      <HomeAppliance />
      <PlumbingHardware />
    </div>

    
  );
};

export default Home;
