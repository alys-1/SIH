import React from "react";
import "./Hero.css"; // Importing the CSS file
import banner from "../images/banner.jpg"; // Ensure to import your images

export default function HeroSection() {
  return (
    <section className="hero_section">
      <div className="hero-banner">
        <img className="hero-image" src={banner} alt="Hero Banner" />
        <div className="container">
          <div className="hero-content">
            <h1>AGROSANGAM CONNECT</h1>
            <span>BRIDGING FARMERS AND MARKETS</span>
            <p>Empowering agriculture with smart ,stable and fair solutions.</p>
            <a className="infobutton" href="#about">
              About us
            </a>
            <a className="infobutton" href="#">
              Get a quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
