import React from "react";
import PopularList from "../components/popular/PopularList";
import SectionMainHeader from "../components/SectionMainHeader";

const Popular = () => {
  return (
    <section className="popular bg-secondary">
      <SectionMainHeader title="populer" header="manage populer images" />
      <div className="container">
        <PopularList />
      </div>
    </section>
  );
};

export default Popular;
