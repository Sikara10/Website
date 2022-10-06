import React from "react";
import web from "../Website/web.png";
const Template = ({ text }) => {

  return (
    <>
      
        <div className="content">
          <div style={{ border: "none" }} className="card c1">
            <h1>{text}</h1>
            <br />
            <h1 className="tech">Tech Giants</h1>
            <p className="my-3 text-muted" style={{ fontSize: "1rem" }}>
              We Are Team of taleted developer making websites
            </p>
            <br />
          </div>
          <div>
            <img className="img1" src={web} alt="web" />
          </div>
        </div>
      
    </>
  );
};
export default Template;
