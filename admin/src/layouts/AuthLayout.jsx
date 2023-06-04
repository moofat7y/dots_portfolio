import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Logo from "../assets/Asset1.png";
const AuthLayout = () => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  return (
    <div className="layout auth position-relative row w-100 m-0 vh-100">
      <div className="left order-2 order-md-1 h-100 d-flex flex-column justify-content-center align-items-center col-md-6 col-12">
        <Outlet />
      </div>
      <div className="bg-light order-1 order-md-2 right h-100 d-flex justify-content-center align-items-center col-md-6 col-12">
        <img
          style={{ width: "50%", minWidth: "200px" }}
          className="ratio ratio-1x1"
          src={Logo}
          alt=""
        />
      </div>
    </div>
  );
};

export default AuthLayout;
