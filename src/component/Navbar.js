import React from "react";
import Style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className={Style.main_nav}>
        <ul className={Style.navul}>
          <li className={Style.list}>
            <NavLink to="/" className={Style.link}>
              Home
            </NavLink>
          </li>
          <li className={Style.list}>
            <NavLink to="/services" className={Style.link}>
              Services
            </NavLink>
          </li>
          <li className={Style.list}>
            <NavLink to="/signup" className={Style.link}>
              Signup
            </NavLink>
          </li>
          <li className={Style.list}>
            <NavLink to="/login" className={Style.link}>
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
