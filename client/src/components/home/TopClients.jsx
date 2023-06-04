import React, { useState } from "react";
import SectionMainHeader from "../SectionMainHeader";
import { useSelector } from "react-redux";

const TopClients = () => {
  const { images, isLoading, count } = useSelector((state) => state.client);
  const clients_list = images?.map((image) => {
    return (
      <li key={image._id} className="col-6 col-sm-4 col-lg-3 col-xl-2">
        <a target="_blank" href={image.link ? image.link : "#"}>
          <div className="box p-4">
            <img className="w-100 h-100" src={image.secure_url} alt="" />
          </div>
        </a>
      </li>
    );
  });
  return (
    <section id="clients" className="top-clients bg-primary pb-5 pt-120">
      <div className="container">
        <SectionMainHeader
          title="Top clients"
          header="We worked with brands."
          dec={``}
        />
        {count === 0 ? (
          <div
            style={{ height: "50vh" }}
            className="d-flex align-items-center justify-content-center"
          >
            <p className="fw-semibold fs-5 text-grad">No Content Available</p>
          </div>
        ) : (
          <ul
            className="clients-list px-0 row justify-content-center"
            style={{ listStyle: "none" }}
          >
            {clients_list}
          </ul>
        )}

        <div className="branding-dev"></div>
      </div>
    </section>
  );
};

export default TopClients;
