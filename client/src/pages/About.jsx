import React from "react";
import CompanyRefresh from "../components/home/CompanyRefresh";
import Work from "../components/about/Work";
import TopClients from "../components/home/TopClients";
import { BsDot } from "react-icons/bs";

const About = () => {
  return (
    <div className="about">
      <div className="section-banner about pt-120 pb-80 d-flex align-items-center">
        <div className="container pt-80 pb-80 text-center text-white">
          <h1 className="fw-bolder text-grad_banner lh-lg mb-3">About</h1>
          <div className="d-flex text-black justify-content-center align-items-center lh-1">
            <span className=" fs-7">Home</span>
            <BsDot className="mx-3 fs-5" />
            <span className=" fs-7">About</span>
          </div>
        </div>
      </div>
      <CompanyRefresh />
      <Work />
      <TopClients />
    </div>
  );
};

export default About;
