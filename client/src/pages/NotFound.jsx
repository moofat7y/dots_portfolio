import React from "react";

const NotFound = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="w-100 d-flex flex-column align-items-center justify-content-center"
    >
      <h3 className="text-secondary fw-bold">
        4<span className="mb-0 text-danger">0</span>4
      </h3>
      <h3 className="text-secondary fw-bold">
        N<span className="text-danger mb-0">O</span>T F
        <span className="text-danger mb-0">O</span>UND
      </h3>
    </div>
  );
};

export default NotFound;
