import React from "react";
import { HeroStyles } from "./Styles";
import backgroundImg from "../assets/bg.png";
const Hero = () => {
  return (
    <HeroStyles>
      <div className="hero">
        <img className="hero-image" src={backgroundImg} alt={backgroundImg} />
        <div className="hero-text">
          <h1>Cravedu</h1>
          <p>Your Study Companion</p>
        </div>
      </div>
    </HeroStyles>
  );
};

export default Hero;
