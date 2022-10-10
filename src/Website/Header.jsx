import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import square from '../Website/square.png'


const Header = () => {
  const [cname,setcname] = useState("Header")
  // const [rname,setrname]= useState("")
    const toggleNavBar = ()=>{
      setcname("Header activedevice")
    }
    const toggleNavBar2=()=>{
     setcname("Header")
    }
  return (
    <>
      <div className= {cname} >
        <div className=" Head">        
            <img className="square" src={square} /> 
            <div className="Nbar"> 
            <ul className="navbar-list">
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
          <div   className="mobileNavBtn">
            <svg onClick={toggleNavBar} name="hamburger" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list mobileNavIcon" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <svg onClick={toggleNavBar2}  name="delete" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg mobileNavIcon" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
