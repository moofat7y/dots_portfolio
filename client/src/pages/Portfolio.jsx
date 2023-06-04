import React, { useEffect } from "react";
import Popular from "../components/portfolio/Popular";
import { useLocation } from "react-router-dom";
import Design from "../components/portfolio/Design";
import SocialMedia from "../components/portfolio/SocialMedia";
import TopClients from "../components/home/TopClients";
import Branding from "../components/portfolio/Branding";
import { BsDot } from "react-icons/bs";

const Portfolio = () => {
  const state = useLocation();

  useEffect(() => {
    if (state?.state?.navProp) {
      const sec = document.getElementById(`${state.state.navProp}`);
      sec.scrollIntoView({ behavior: "smooth" });
    }
  }, [state?.state]);
  return (
    <div className="portfolio bg-primary">
      <div className="section-banner portfolio pt-120 pb-80 d-flex align-items-center">
        <div className="container pt-80 pb-80 text-center text-white">
          <h1 className="fw-bolder text-grad_banner lh-lg mb-3">Portfolio</h1>
          <div className="d-flex text-black justify-content-center align-items-center lh-1">
            <span className=" fs-7">Home</span>
            <BsDot className="mx-3 fs-5" />
            <span className=" fs-7">Portfolio</span>
          </div>
        </div>
      </div>
      {/* <Popular /> */}
      <Design />
      <Branding />
      <SocialMedia />
      <TopClients />
    </div>
  );
};

export default Portfolio;
