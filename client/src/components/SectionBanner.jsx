import React from "react";
import { BsDot } from "react-icons/bs";

const SectionBanner = ({ header, main, link }) => {
  return (
    <div className="section-banner pt-120 pb-120 d-flex align-items-center">
      <div className="container pt-80 pb-80 text-center text-white">
        <h1 className="fw-bold mb-4">{header}</h1>
        <div className="d-flex justify-content-center align-items-center lh-1">
          <span className=" fs-7">{main}</span>
          <BsDot className="mx-3 fs-5 text-light" />
          <span className="text-light fs-7">{link}</span>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;
