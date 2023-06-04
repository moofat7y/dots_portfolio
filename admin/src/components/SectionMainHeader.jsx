import React from "react";

const SectionMainHeader = ({ title, header, dec, extraClass }) => {
  return (
    <div className={`${extraClass ? extraClass : "text-center"}`}>
      <span className="text-grad fw-semibold mb-1">{title}</span>
      <h2 className="fw-bold fs-1 mb-3 fw-semibold">{header}</h2>

      <p className="text-dark" dangerouslySetInnerHTML={{ __html: dec }} />
    </div>
  );
};

export default SectionMainHeader;
