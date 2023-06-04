import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Asset1.png";
const Header = () => {
  const navRef = useRef();
  let currentScroll = 0;
  window.addEventListener("scroll", (e) => {
    if (e.currentTarget.scrollY > 110) {
      if (e.currentTarget.scrollY < currentScroll) {
        navRef?.current?.classList.add("show");
        navRef?.current?.classList.remove("hide");
      } else {
        navRef?.current?.classList.remove("show");
        navRef?.current?.classList.add("hide");
      }
      currentScroll = e.currentTarget.scrollY;
    } else {
      navRef?.current?.classList.remove("hide");
      navRef?.current?.classList.remove("show");
    }
  });
  return (
    <nav
      ref={navRef}
      style={{ zIndex: "100" }}
      className="navbar w-100 fixed-top navbar-expand-md py-md-3"
    >
      <div className="container-fluid px-md-5">
        <Link to="/" className="navbar-brand">
          <img className="logo" src={Logo} alt="" />
        </Link>
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
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              <NavLink to="/portfolio" className="nav-link">
                Portfolio
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
