import React from "react";
import "./Hero.css";
import Crypto from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <h1>Register, invest, withdraw.</h1>
        <p>
          For the past two years, 7FX has maintained Its reputation on
          consistent customer service and has dedicated its self to hairwork and
          improvement to serve better
        </p>
        <button className="btn">Get Started</button>
      </div>
      <div className="right">
        <img src={Crypto} alt="" />
      </div>
    </div>
  );
};

export default Hero;
