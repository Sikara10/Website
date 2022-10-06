import React from "react";
import { Data } from "./obj";

const Services = () => {
  
  return (
    <>
      <div className="container-fluid container">
        <div style={{ marginTop: "50px" }}>
          <h1 className="service">Our Services</h1>
        </div>
        <div className="flow">
        {
            Data.map((element)=>{
                return <div className=" mx-3 my-3 card crd" style={{ height:"25rem", width: "20rem",float:"left" }}>
          <img className="card-img-top serv" src={element.src} alt="img" />
          <div className="card-body">
            <h5 className="card-title">{element.sname}</h5>
            <p className="card-text">{element.message}</p>
          </div>
          <button style={{width:"120px", marginBottom:"15px",marginLeft:"15px"}} type="button" class="btn btn-outline-primary">Check Now</button>
        </div>
            })
        }
        </div>

        
      </div>
    </>
  );
};
export default Services;
