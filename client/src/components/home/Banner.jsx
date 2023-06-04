import React from "react";

import { CiMobile2, CiEdit, CiMedal } from "react-icons/ci";
const Banner = () => {
  return (
    <section className="home_banner pt-120 bg-primary pb-4 pb-md-5">
      <div className="layer position-relative pt-120">
        <div className="container text-center">
          <div className="d-flex justify-content-center header">
            <h1 className="fw-bolder text-grad_banner lh-bg text-center">
              The Dots Of
              <br /> Your Search.
            </h1>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="offers d-flex justify-content-center gap-3 gap-xl-5 flex-wrap flex-lg-nowrap">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <CiMedal className="text-danger display-4 mb-3" />
            <h3 className="fw-bolder mb-2 fs-4">Creative Designs</h3>
            <p className="fw-light text-break">
              Developing original concepts for your designs.
            </p>
          </div>

          <div className="d-flex flex-column align-items-center justify-content-center">
            <CiEdit className="text-danger display-4 mb-3" />
            <h3 className="fw-bolder mb-2 fs-4">Strategic Plans</h3>
            <p className="fw-light text-break">
              Making strategies based on research into <br />
              your channels and rivals to get the greatest outcomes.
            </p>
          </div>

          <div className="d-flex flex-column align-items-center justify-content-center">
            <CiMobile2 className="text-danger display-4 mb-3" />
            <h3 className="fw-bolder mb-2 fs-4">
              Web Development
              <br /> & Mobile Applications
            </h3>
            <p className="fw-light text-break">
              Creating a website and mobile application
              <br /> from scratch for your company to increase revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
