import React from "react";

const Loading = () => {
  return (
    <div
      style={{ zIndex: "1030" }}
      className="position-fixed bg-primary w-100 vh-100 d-flex align-items-center justify-content-center"
    >
      <div className="loader">
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__ball"></div>
      </div>
    </div>
  );
};

export default Loading;
