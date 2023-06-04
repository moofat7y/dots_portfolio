import React from "react";
import SectionMainHeader from "../components/SectionMainHeader";
import BrandList from "../components/brand-design/BrandList";

const Brand = () => {
  return (
    <section className="popular bg-secondary">
      <SectionMainHeader title="brand" header="manage branding images" />
      <div className="container">
        <BrandList />
      </div>
    </section>
  );
};

export default Brand;
