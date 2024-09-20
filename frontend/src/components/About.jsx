import React from "react";
import "./AboutUs.css"; // Import the CSS file
import about from "../images/about.png"; // Import the image

export default function AboutUs() {
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
            <div className="about_box">
              <h2>
                ABOUT AGROSANGAM
                <br />
                <strong className="black">BUY AND SELL</strong>
              </h2>
              <p>
                Revolutionizing agriculture with reliable contract and
                guaranteed market access.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
            <div className="about_img">
              <figure>
                <img src={about} alt="About" />{" "}
                {/* Use the imported variable */}
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
