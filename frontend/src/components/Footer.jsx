import React from "react";
import "./Footer.css"; // Import the CSS file
import logo from "../images/icons/logo.png";
import locIcon from "../images/icons/loc.png";
import emailIcon from "../images/icons/email.png";
import callIcon from "../images/icons/call.png";
import linkIcon from "../images/icons/3.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer top_layer">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="address">
                <a href="index.html">
                  <img src={logo} alt="logo" id="mylogo" />
                </a>
                <p id="footerp">
                  AgriSure Connect (AgroSangam) is a platform designed to
                  facilitate direct communication and contract creation between
                  farmers and buyers. It aims to streamline agricultural trade
                  by offering secure, transparent, and efficient tools for
                  managing farming agreements.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="address">
                <h3>Quick links</h3>
                <ul className="Links_footer">
                  <li>
                    <img src={linkIcon} alt="#" /> <a href="#">Home</a>
                  </li>
                  <li>
                    <img src={linkIcon} alt="#" /> <a href="#">About Us</a>
                  </li>
                  <li>
                    <img src={linkIcon} alt="#" />
                    <a href="#">Farmers</a>
                  </li>
                  <li>
                    <img src={linkIcon} alt="#" /> <a href="#">Buyers</a>
                  </li>
                  <li>
                    <img src={linkIcon} alt="#" />
                    <a href="#">Contract Creation</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="address">
                <h3>Subscribe email</h3>
                <p>Enter your email to subscribe to Argrosangam Connect</p>
                <input
                  className="form-control"
                  placeholder="Your Email"
                  type="email"
                  name="Your Email"
                />
                <button className="submit-btn">Submit</button>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="address">
                <h3>Contact Us</h3>
                <ul className="loca">
                  <li>
                    <a href="#">
                      <img src={locIcon} alt="#" />
                    </a>
                    India
                    <br />
                    United Kingdom
                  </li>
                  <li>
                    <a href="#">
                      <img src={emailIcon} alt="#" />
                    </a>
                    jayesh.22320128@viit.ac.in
                  </li>
                  <li>
                    <a href="#">
                      <img src={callIcon} alt="#" />
                    </a>
                    +917020310029
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <p>
            © 2024 All Rights Reserved. Design By
            <a href="https://html.design/"> Aquatifana</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
