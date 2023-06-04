import React from "react";
import ReactDOM from "react-dom";

const CustomModel = ({ children }) => {
  return ReactDOM.createPortal(
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: "#70707057" }}
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      {children}
    </div>,
    document.getElementById("modals")
  );
};

export default CustomModel;
