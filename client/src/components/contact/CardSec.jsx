import React from "react";
import SectionMainHeader from "../SectionMainHeader";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";

const CardSec = () => {
  return (
    <section className="contact-card bg-primary pb-5 pt-120">
      <div className="container  text-center">
        <SectionMainHeader
          title="Our contact address"
          header="Quick Contact Address"
          dec={`There are many variations of passages of Lorem Ipsum available,<br/> but the majority have suffered alteration.`}
        />

        <div className="services px-xl-4 mt-4 row">
          <div className="box  p-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="item h-100 bg-light py-5 px-4 rounded-3 text-start">
              <FiPhoneCall className="fs-1 text-danger mb-3" />
              <div className="content">
                <h3 className="fs-5 fw-semibold mb-4">Contact Phone Number</h3>
                <a className="nav-link mb-2 fs-5" href="tel:0100 555 0942">
                  PH: 0100 5550 942
                </a>
                <a className="nav-link fs-5" href="tel:050 23 96 859">
                  HM: 050 23 96 859
                </a>
              </div>
            </div>
          </div>

          <div className="box  p-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="item h-100 bg-light py-5 px-4 rounded-3 text-start">
              <HiOutlineMail className="fs-1 text-danger mb-4" />
              <div className="content">
                <h3 className="fs-5 fw-semibold mb-3">Our Email Address</h3>
                <a
                  className="nav-link mb-2 fs-6"
                  href="mailto:dotsmarketinghub@gmail.com"
                >
                  MR:dotsmarketinghub@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="box  p-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="item h-100 bg-light py-5 px-4 rounded-3 text-start">
              <HiOutlineLocationMarker className="fs-1 text-danger mb-4" />
              <div className="content">
                <h3 className="fs-5 fw-semibold mb-3">Our Location</h3>
                <p className="text-dark mb-0  fs-6">
                  Egypt - Mansoura - Hay El Gamaa - Mouaz Ibn Gabal ST. Front Of
                  El Waha Restront.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSec;
