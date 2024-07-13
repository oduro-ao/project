import React from "react";
import MainHeader from "./mainHeader";
import HeaderLinks from "./headerLinks";
import Home from "./home";
import Featured from "./featuredSlider";
import IconSection from "./iconSection";
import NewsLetter from "./newsLetter";
import Arrivals from "./arrivals";
import Footer from "./footer";
import SignIn from "./signIn";
import "./allCss/homePage.css";


const homePage = () => {
  return (
    <div className="homePageContainer">
      <MainHeader></MainHeader>
      <HeaderLinks />
      <Home />
      <IconSection />
      <Featured />
      <NewsLetter />
      <Arrivals />
      <Footer />
    </div>
  );
};

export default homePage;
