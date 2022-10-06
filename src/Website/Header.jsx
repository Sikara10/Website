
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="container Head">
          <div>
            <h3>Squared Tech</h3>
          </div>
          <div className="Navbar">
            <ul>
              <NavLink
                style={{ textDecoration: "none" }}
                activeclassname="active"
                to="/home"
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none" }}
                activeclassname="active"
                to="/services"
              >
                <li>Services</li>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none" }}
                activeclassname="active"
                to="/about"
              >
                <li>About</li>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none" }}
                activeclassname="active"
                to="/contact"
              >
                <li>Contact</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
