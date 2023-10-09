import React from "react";
import "./HeroStyles.css";
import Header from "../Header/Header";
import HeroImg from "../../assets/gymImg8.webp";
import { AiOutlineHeart } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="blur hero-blur"></div>

      <div className="left-hero">
        <Header />
        {/* best add starts */}
        <div className="the-best-add">
          <div></div>
          <span>The best fitness gym in the town</span>
        </div>
        {/* best add ends */}

        {/* hero heading starts*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div className="span">
            <span>
              here we will help you to shape and build your ideal body and
              liveup your life to fullest
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Expert Coachs</span>
          </div>
          <div>
            <span>+1000 </span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Fitness Programs</span>
          </div>
        </div>

        {/* hero buttons */}

        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-hero">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
          <AiOutlineHeart className="icon" />
          <span>Heart Rate</span>
          <span> 116 bpm</span>
        </div>
        {/* hero image */}
        <img src={HeroImg} alt="hero-img" className="hero-img" />

        {/* calories */}
        <div className="calories">
          <span>Calories Burned</span>
          <span>220 Kcal</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
