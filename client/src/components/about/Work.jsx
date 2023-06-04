import React from "react";

const Work = () => {
  return (
    <section className="work position-relative pt-120 pb-120">
      <div className="overlay position-absolute"></div>
      <div className="container d-flex align-items-center justify-content-center">
        <div
          style={{
            maxWidth: "700px",
            zIndex: "8",
          }}
          className="widget-wrap px-80 mx-3 mx-sm-5 pt-120 pb-80 text-center rounded-4 bg-primary"
        >
          <h3 className="text-grad mb-4 fs-2 fw-semibold">
            Find Your Work Now
          </h3>
          <p className=" mb-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that.
          </p>
          <button className="btn btn-outline-danger px-4 px-md-5 py-2 py-md-3 rounded-pill">
            GET STARTED
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
