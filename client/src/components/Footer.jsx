import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import Logo from "../assets/website.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container">
        <div className="d-flex gap-3 flex-column flex-md-row justify-content-between py-5 ">
          <h2 className="fw-bold">
            Enough Talk, Let's Build
            <br /> Something Together
          </h2>
          <button className="py-3 py-md-4 px-4 px-md-5 btn-outline-custom text-white rounded-pill ">
            READ OUT NOW
          </button>
        </div>
        <hr />
        <div className="py-5 row">
          <div className="col-12 col-sm-6 col-lg-5">
            <div className="box p-2 pe-lg-5">
              <div className="mb-5">
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                  className="image d-flex"
                >
                  <LazyLoadImage
                    loading="lazy"
                    className="w-100 h-100"
                    src={Logo}
                    alt=""
                  />
                </div>
              </div>

              <p className="text-dark">
                Copyright © 2023 All rights reserved by{" "}
                <a
                  className="nav-link d-inline-block"
                  target="_blank"
                  href="https://www.instagram.com/moo.fat7y/"
                >
                  moo.fat7y
                </a>
                . Built with love in Bangladesh All rights reserved.
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-2">
            <div className="box p-2">
              <h5>Quick Link</h5>
              <ul className="navbar-nav footer-nav text-dark">
                <li className="nav-item">
                  <NavLink
                    to="/portfolio"
                    state={{ navProp: "logo-sec" }}
                    className="nav-link"
                  >
                    Logo
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/portfolio"
                    state={{ navProp: "branding" }}
                    className="nav-link"
                  >
                    Branding
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/portfolio"
                    state={{ navProp: "social-media" }}
                    className="nav-link"
                  >
                    Social Media
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-2">
            <div className="box p-2">
              <h5>Company</h5>
              <ul className="navbar-nav footer-nav text-dark">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/portfolio" className="nav-link">
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="box p-2">
              <h5>Say Hello</h5>
              <ul className="navbar-nav footer-nav text-dark">
                <li className="nav-item">
                  <a
                    href="mailto:dotsmarketinghub@gmail.com"
                    className="nav-link fs-7"
                  >
                    Email: dotsmarketinghub@gmail.com
                  </a>
                </li>
                <li className="nav-item">
                  <a href="tel:0100 555 942" className="nav-link fs-7">
                    Phone: 0100 555 942
                  </a>
                </li>
                <li className="nav-item">
                  <a href="tel:050 23 96 859" className="nav-link fs-7">
                    Phone: 050 23 96 859
                  </a>
                </li>
              </ul>
              <div className="social gap-3 d-flex mt-2">
                <a
                  className="fs-4 text-dark"
                  href="https://www.instagram.com/dots.marketingagency/?igshid=YmMyMTA2M2Y%3D"
                  target="_blank"
                >
                  <AiOutlineInstagram />
                </a>

                <a
                  className="fs-4 text-dark"
                  href="https://web.facebook.com/DotsMHub?mibextid=ZbWKwL&_rdc=1&_rdr"
                  target="_blank"
                >
                  <GrFacebookOption />
                </a>

                <a
                  className="fs-4 text-dark"
                  href="https://wa.me/201005550942"
                  target="_blank"
                >
                  <AiOutlineWhatsApp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
