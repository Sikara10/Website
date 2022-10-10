import React from "react";
import { NavLink } from "react-router-dom";
import Template from "./Template";


const About = ()=>{
    
    return(<>
    <div className="container template">
    <Template text="Welcome to Tech Giants" />
    <NavLink  to="/contact">
    <button  type="button" className="decision btn btn-outline-secondary">Contact Us</button>
    </NavLink>
    </div>
    </>)
}
export default About;