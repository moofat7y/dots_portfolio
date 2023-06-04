import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { Link } from "react-router-dom";
import LoadingBtn from "../LoadingBtn";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin } from "../../store/features/auth/authSlice";
const Signin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [passwordShow, setPasswordShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
    setIsLoading(true);
    await dispatch(signin({ data, navigate }));
    setIsLoading(false);
  };
  return (
    <div
      style={{ minWidth: "320px", width: "48%" }}
      className="signin d-flex flex-column"
    >
      <h3 className="text-center mb-4">
        <span className="text-danger fw-bold fs-1">A</span>
        dmin Dashboard
      </h3>
      <h4 className="mb-2">Welcome, Back!</h4>
      <p className="fs-7 lh-sm">
        Please enter your email and password to enter to your dashboard.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group mb-3">
          <input
            {...register("emailorusername", {
              required: "Please enter your username or email",
            })}
            type="text"
            className={`form-control px-3 py-2 rounded-3 ${
              errors.emailorusername ? "is-invalid" : ""
            }`}
            placeholder="Email Or Username"
          />
          {errors.emailorusername ? (
            <div className="invalid-feedback">
              {errors.emailorusername.message}
            </div>
          ) : null}
        </div>

        <div className=" form-group">
          <div className=" position-relative">
            <input
              {...register("password", {
                required: "Password required",
              })}
              type={`${passwordShow ? "text" : "password"}`}
              name="password"
              className={`form-control rounded-3 px-3 py-2 ${
                errors.password ? "is-invalid" : ""
              }`}
              placeholder="Password"
            />
            <div
              onClick={() => setPasswordShow((prev) => !prev)}
              role="button"
              className="password-switch position-absolute top-50 end-0 translate-middle"
            >
              {passwordShow ? (
                <VscEyeClosed className="fs-6" />
              ) : (
                <VscEye className="fs-6" />
              )}
            </div>
          </div>
          {errors.password ? (
            <div className="invalid-feedback d-block">
              {errors.password.message}
            </div>
          ) : null}
        </div>

        <LoadingBtn
          label="Login"
          bgcolor="btn-primary"
          loading={isLoading}
          extraClass="py-2  w-100 mt-3"
        />
      </form>
    </div>
  );
};

export default Signin;
