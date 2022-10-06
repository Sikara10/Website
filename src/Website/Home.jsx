import React from "react";
import { NavLink } from "react-router-dom";
import Template from "./Template";

const Home = () => {
  return (
    <>
    <div className="container template">
      <Template text="Grow Your Business With" />
      <NavLink to="/services">
        <button
          type="button"
          className="btn btn-outline-secondary decision"
        >
          Get Started
        </button>
      </NavLink>
      </div>
    </>
  );
};
export default Home;
