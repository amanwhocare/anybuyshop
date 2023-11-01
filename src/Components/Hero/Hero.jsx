import React from "react";
import "./Hero.css";
import hand_icon from '../Assests/hand-hero-icon.png'
import arrow_icon from '../Assests/arrow_forward.png'
import hero_img from '../Assests/hero_img.png' 
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-hero-icon">
            <p>new</p>
            <img src={hand_icon} alt=""></img>
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
        <div>Latest Collection</div>
        <img src={arrow_icon} alt=""/>
        </div>
      </div>
      <div className="hero-right">
      <img src={hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
