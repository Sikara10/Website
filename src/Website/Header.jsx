
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="container Head">
          <div>
            <h3>Squared Tech<sup style={{color:"orange"}}>2</sup></h3> 
          </div>
          <div className="Navbar">
            <ul>
              <NavLink
                style={{ textDecoration: "none" }}
                activeclassname="active"
                to="sikara10.github.io/home"
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none" }}
                activeclassname="active"
                to="sikara10.github.io/services"
              >
                <li>Services</li>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none" }}
                activeclassname="active"
                to="sikara10.github.io/about"
              >
                <li>About</li>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none" }}
                activeclassname="active"
                to="sikara10.github.io/contact"
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
