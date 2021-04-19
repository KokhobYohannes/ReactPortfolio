import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Kokhob Yohannes</h1>
      <p>Full Stack Web Development Portfolio</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          About Me
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
