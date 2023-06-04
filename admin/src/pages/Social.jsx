import React from "react";
import SectionMainHeader from "../components/SectionMainHeader";
import SocialList from "../components/social/SocialList";

const Social = () => {
  return (
    <section className="popular bg-secondary">
      <SectionMainHeader title="social" header="manage social images" />
      <div className="container">
        <SocialList />
      </div>
    </section>
  );
};

export default Social;
