import React from "react";
import CardSec from "../components/contact/CardSec";
import Form from "../components/contact/Form";
import MapLocation from "../components/contact/Location";
import TopClients from "../components/home/TopClients";
import { BsDot } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="contact ">
      <div className="section-banner contact pt-120 pb-80 d-flex align-items-center">
        <div className="container pt-80 pb-80 text-center text-white">
          <h1 className="fw-bolder text-grad_banner lh-lg mb-3">
            Contact with us
          </h1>
          <div className="d-flex text-black justify-content-center align-items-center lh-1">
            <span className=" fs-7">Home</span>
            <BsDot className="mx-3 fs-5" />
            <span className=" fs-7">Contact</span>
          </div>
        </div>
      </div>
      <CardSec />
      <Form />
      <MapLocation />
      <TopClients />
    </div>
  );
};

export default Contact;
