import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/Asset1.png";
import { useDispatch } from "react-redux";
import { logout } from "../store/features/auth/authSlice";
const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    setIsLoading(true);
    await dispatch(logout({ navigate }));
    setIsLoading(true);
  };
  return (
    <nav
      style={{ zIndex: "100" }}
      className="navbar bg-secondary position-absolute w-100 navbar-expand-md py-md-4"
    >
      <div className="container-fluid px-md-5">
        <NavLink to="/" className="navbar-brand">
          <img className="logo" src={Logo} alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-start w-50"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <NavLink to="/" className="navbar-brand">
              <img className="logo" src={Logo} alt="" />
            </NavLink>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {/* <NavLink to="/" className="nav-link">
                Populer
              </NavLink> */}
              <NavLink to="/" className="nav-link">
                Logo
              </NavLink>
              <NavLink to="/social" className="nav-link">
                social media
              </NavLink>
              <NavLink to="/top-clients" className="nav-link">
                Top Clients
              </NavLink>

              <NavLink to="/brand" className="nav-link">
                Branding
              </NavLink>
              <button
                onClick={() => handleLogout()}
                disabled={isLoading}
                className="ms-4 btn btn-outline-danger"
              >
                Logout
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
