import React from "react";
import SectionMainHeader from "../SectionMainHeader";
import { useForm } from "react-hook-form";
import FormImg from "../../assets/contact-us.png";
const Form = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <section className="contact-form bg-primary pb-5 pt-120">
      <div className="container">
        <div className="wrapper row">
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <div className="box px-xl-3 px-xxl-5">
              <SectionMainHeader
                title="Let's Say Hi"
                header="Contact Us"
                dec="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                extraClass="text-start"
              />

              <form onSubmit={handleSubmit()}>
                <div className="form-group mb-3">
                  <input
                    {...register("name", {
                      required: "The field is required.",
                    })}
                    type="text"
                    className={`form-control px-4 fs-7 border border-2 bg-primary ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    placeholder="Your Name *"
                  />
                  {errors.name ? (
                    <div className="invalid-feedback">
                      {errors.name.message}
                    </div>
                  ) : null}
                </div>

                <div className="form-group mb-3">
                  <input
                    {...register("email", {
                      required: "The field is required.",
                    })}
                    type="text"
                    className={`form-control px-4 fs-7 border border-2 bg-primary ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    placeholder="Your Email *"
                  />
                  {errors.email ? (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  ) : null}
                </div>

                <div className="form-group mb-3">
                  <input
                    {...register("subject")}
                    type="text"
                    className={`form-control px-4 fs-7 border border-2 bg-primary `}
                    placeholder="Your Subject *"
                  />
                </div>

                <div className="form-group mb-3">
                  <input
                    {...register("message", {
                      required: "The field is required.",
                    })}
                    type="text"
                    className={`form-control px-4 fs-7 border border-2 bg-primary ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    placeholder="Your Name *"
                  />
                  {errors.message ? (
                    <div className="invalid-feedback">
                      {errors.message.message}
                    </div>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-secondary px-4 py-form fs-7 border border-secondary border-2 fw-semibold fadeup mt-3"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>

          <div className="col-12 col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
            <div className="box  px-xl-3 px-xxl-5">
              <img
                style={{ maxHeight: "640px", objectFit: "cover" }}
                className="ratio ratio-2x3 rounded-3"
                loading="lazy"
                src={FormImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
