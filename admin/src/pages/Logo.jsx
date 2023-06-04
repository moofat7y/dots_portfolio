import React from "react";
import SectionMainHeader from "../components/SectionMainHeader";
import LogoList from "../components/logo/LogoList";

const Logo = () => {
  return (
    <section className="popular bg-secondary">
      <SectionMainHeader title="logo" header="manage logo images" />
      <div className="container">
        <LogoList />
      </div>
    </section>
  );
};

export default Logo;
