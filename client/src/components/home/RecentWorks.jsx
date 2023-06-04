import React from "react";
import SectionMainHeader from "../SectionMainHeader";
import { NavLink } from "react-router-dom";
import BradingLogo from "../../assets/branding.png";
import SocialLogo from "../../assets/social-media.png";
import Logo2Logo from "../../assets/Logo2.png";
const RecentWorks = () => {
  return (
    <section className="recent-work bg-primary pb-5 pt-120">
      <div className="container">
        <SectionMainHeader
          title="Our project"
          header="Some of our Recent Works"
        />

        <div className="works px-xl-4 mt-4 row">
          <div className="box p-3 p-sm-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <NavLink
              to="/portfolio"
              state={{ navProp: "logo-sec" }}
              className="position-relative nav-link p-4 d-flex flex-column justify-content-end thumbnail"
            >
              <div className="content text-white">
                <h3 className="fw-bold">Logo</h3>
              </div>
              <div className="inner">
                <img className="" loading="lazy" src={Logo2Logo} alt="" />
              </div>
            </NavLink>
          </div>
          <div className="box p-3 p-sm-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <NavLink
              to="/portfolio"
              state={{ navProp: "branding" }}
              className="position-relative nav-link p-4 d-flex flex-column justify-content-end thumbnail"
            >
              <div className="content text-white">
                <h3 className="fw-bold">Branding</h3>
              </div>
              <div className="inner">
                <img className="" loading="lazy" src={BradingLogo} alt="" />
              </div>
            </NavLink>
          </div>
          <div className="box p-3 p-sm-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <NavLink
              to="/portfolio"
              state={{ navProp: "social-media" }}
              className="position-relative nav-link p-4 d-flex flex-column justify-content-end thumbnail"
            >
              <div className="content text-white">
                <h3 className="fw-bold">Social Media</h3>
              </div>
              <div className="inner">
                <img className="" loading="lazy" src={SocialLogo} alt="" />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
