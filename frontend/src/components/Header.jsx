import React from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import loc1 from "../images/icons/loc1.png";
import email1 from "../images/icons/email1.png";
import call1 from "../images/icons/call1.png";
import logo from "../images/icons/logo.png";

export default function Header() {
  return (
    // header
    <header>
      {/* header inner */}
      <div className="header">
        <div className="container">
          {/* Contact Info Section */}
          <div className="row contact-info">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 logo_section">
              <div className="logo">
                <a href="index.html">
                  <img src={logo} alt="Logo" />
                </a>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 contact-details">
              <ul>
                <li>
                  <img src={loc1} alt="Location Icon" /> Location
                </li>
                <li>
                  <img src={email1} alt="Email Icon" /> demo@gmail.com
                </li>
                <li>
                  <img src={call1} alt="Call Icon" /> (+71)9876543109
                </li>
              </ul>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="row nav-section">
            <div className="col-md-8">
              <nav className="main-menu">
                <ul>
                  <li className="active">
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#product">Products</a>
                  </li>
                  <li>
                    <a href="#testimonial">Testimonial</a>
                  </li>
                  <li>
                    <a href="#contact">Contact Us</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-4">
              <form className="search">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
                />
                <button>
                  <FaSearch />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* end header inner */}
    </header>
    // end header
  );
}
