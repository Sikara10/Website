import React, { useState } from "react";

const Contact = ()=>{
    const [input,setInput]= useState([])
    const [credentials,setCredentials]=useState({
        fullname:"",
        Phoneno:"",
        Email:"",
        Message:""
    })

    const formSubmit= ()=>{
        setInput((preValue)=>{
            return [...preValue,credentials]
        })
    }
    const inputevent=(e)=>{
        const name = e.target.name
        const value = e.target.value
        setCredentials((preValue)=>{
            return{
                ...preValue,
                [name] : value
            }
        })

    }
    
    return(<>
    <div className="container info">
    <h1>Contact Us</h1>
        <form>
  <div className="form-group">
    <label >Full Name</label>
    <input name="fullname" value={credentials.fullname} onChange={inputevent} type="text" className="form-control" placeholder="Enter Email" />
  </div>
  <div className="form-group">
    <label >Phone No.</label>
    <input name="Phoneno" value={credentials.Phoneno} onChange={inputevent} type="text" className="form-control" placeholder="Enter Phone No" />
  </div>
  <div className="form-group">
    <label >Email Address</label>
    <input name="Email" value={credentials.Email} onChange={inputevent} type="email" className="form-control" placeholder="Enter your email" />
  </div>
  <div className="form-group">
    <label >Message</label>
    <textarea name="Message" value={credentials.Message} onChange={inputevent} className="form-control" rows="3"></textarea>
  </div>
  <button type="button" onClick={formSubmit} className="btn btn-outline-primary">Submit</button>
</form>
</div>

    </>)
}
export default Contact;