import React from "react";
import SectionMainHeader from "../SectionMainHeader";
import { IoLogoAmplify, IoShareSocialOutline } from "react-icons/io5";
import { TbWaveSine } from "react-icons/tb";
import { FiTrendingUp } from "react-icons/fi";
import { SiNintendogamecube } from "react-icons/si";
import { MdOutlineCreate } from "react-icons/md";
import { RiEmotionLaughLine } from "react-icons/ri";
import { SiWebmoney } from "react-icons/si";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
const Service = () => {
  return (
    <section className="service bg-primary pb-5 pt-120">
      <div className="container text-center">
        <SectionMainHeader
          title="What we can do for you"
          header="Services provide for you"
        />

        <div className="services px-xl-4 mt-4 row">
          <div className="box  p-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="item h-100 bg-light py-5 px-4 rounded-3 text-start">
              <IoLogoAmplify className="fs-1 text-danger mb-3" />
              <div className="content">
                <h3 className="fs-5 fw-semibold mb-4">Branding</h3>
                <p className="text-dark mb-0  fs-6">
                  Building a complete identity for your company to reflect the
                  character of your brand.
                </p>
              </div>
            </div>
          </div>

          <div className="box  p-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="item h-100 bg-light py-5 px-4 rounded-3 text-start">
              <TbWaveSine className="fs-1 text-danger mb-3" />
              <div className="content">
                <h3 className="fs-5 fw-semibold mb-4">
                  Content strategy & Planning
                </h3>
                <p className="text-dark mb-0  fs-6">
                  Putting together a research-based content strategy to maximize
                  your organic reach.
                </p>
              </div>
            </div>
          </div>

          <div className="box  p-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="item h-100 bg-light py-5 px-4 rounded-3 text-start">
              <MdOutlineCreate className="fs-1 text-danger mb-3" />
              <div className="content">
                <h3 className="fs-5 fw-semibold mb-4">Content Creation</h3>
                <p className="text-dark mb-0  fs-6">
                  Developing a content strategy that works for each of your
                  business's channels will help you attract new clients.
                </p>
              </div>
            </div>
          </div>

          <div className="box  p-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="item h-100 bg-light py-5 px-4 rounded-3 text-start">
              <RiEmotionLaughLine className="fs-1 text-danger mb-4" />
              <div className="content">
                <h3 className="fs-5 fw-semibold mb-3">Motion Graphic</h3>
                <p className="text-dark mb-0  fs-6">
                  Through it, we can create innovative ways to communicate with
                  the viewer, and add depth to your story.
                </p>
              </div>
            </div>
          </div>

          <div className="box  p-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="item h-100 bg-light py-5 px-4 rounded-3 text-start">
              <IoShareSocialOutline className="fs-1 text-danger mb-3" />
              <div className="content">
                <h3 className="fs-5 fw-semibold mb-4">
                  Social Media Management
                </h3>
                <p className="text-dark mb-0  fs-6">
                  Maintaining all of your channels and replying to all of your
                  DMs and comments will save you time and work.
                </p>
              </div>
            </div>
          </div>

          <div className="box  p-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="item h-100 bg-light py-5 px-4 rounded-3 text-start">
              <FiTrendingUp className="fs-1 text-danger mb-4" />
              <div className="content">
                <h3 className="fs-5 fw-semibold mb-3">Media Buying</h3>
                <p className="text-dark mb-0  fs-6">
                  putting your money in the right order to increase your
                  earnings with regular updates.
                </p>
              </div>
            </div>
          </div>

          <div className="box  p-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="item h-100 bg-light py-5 px-4 rounded-3 text-start">
              <MdOutlineSlowMotionVideo className="fs-1 text-danger mb-4" />
              <div className="content">
                <h3 className="fs-5 fw-semibold mb-3">
                  Photography & Videography
                </h3>
                <p className="text-dark mb-0  fs-6">
                  Supplying a videographer and a photographer to record your
                  events and use the footage to support your channels.
                </p>
              </div>
            </div>
          </div>

          <div className="box  p-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="item h-100 bg-light py-5 px-4 rounded-3 text-start">
              <SiNintendogamecube className="fs-1 text-danger mb-4" />
              <div className="content">
                <h3 className="fs-5 fw-semibold mb-3">SEO</h3>
                <p className="text-dark mb-0  fs-6">
                  Putting together a set of techniques aimed at enhancing the
                  look and positioning of web sites in organic search results.
                </p>
              </div>
            </div>
          </div>

          <div className="box  p-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="item h-100 bg-light py-5 px-4 rounded-3 text-start">
              <SiWebmoney className="fs-1 text-danger mb-4" />
              <div className="content">
                <h3 className="fs-5 fw-semibold mb-3">
                  Web Development & Mobile Application
                </h3>
                <p className="text-dark mb-0  fs-6">
                  Developing mobile applications and user-friendly websites to
                  support your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
