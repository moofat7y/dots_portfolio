import React from "react";
import SectionMainHeader from "../SectionMainHeader";
import Slider from "../Slider";
import { useSelector } from "react-redux";
const Popular = () => {
  const { images, isLoading } = useSelector((state) => state.populer);
  return (
    <section className="populer bg-primary pb-5 pt-120">
      <SectionMainHeader
        title="Populer"
        header="Design"
        dec="There are many variations of passages of Lorem Ipsum available,<br/> but the majority have suffered alteration."
      />

      <Slider data={images} isLoading={isLoading} />
    </section>
  );
};

export default Popular;
