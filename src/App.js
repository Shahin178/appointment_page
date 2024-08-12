import React, { useState } from 'react';
import "./App.css"
// import { Button, Checkbox, Form, Input } from 'antd';

const App = () => {
  const [fullname, setfullname]= useState("");
  const [email, setemail] = useState("");
  const [department, setdepartment] = useState("");
  const [time, settime] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    
    if(fullname=="") setErrorMessage("Name is required!");
    else if (email == "") setErrorMessage("Mail is required!");
    else if (department == "") setErrorMessage("Department is required!");
    else if (time == "") setErrorMessage("Time is required!");

    // if (email == "") console.log("Email is required");
    // if (department == "") console.log("Department is required");
    // if (time == "") console.log("Time is required");    
  }

  return (
    <div className="app">
      <div className="main">
        <div className="title">
          <h3>Contact Us</h3>
          <h1>Make an Appointment</h1>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <div className="inputs">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setfullname(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="inputs">
            <select
              value={department}
              onChange={(e) => setdepartment(e.target.value)}
            >
              <option value="">Please Select</option>
              <option value="CS">CS</option>
              <option value="IT">IT</option>
            </select>

            <select value={time} onChange={(e) => settime(e.target.value)}>
              <option value="">Please Select</option>
              <option value="4">4:00 Availabel</option>
              <option value="5">5:00 Availabel</option>
            </select>
          </div>
          <div className="message">
            <input type="text" name="message" placeholder="Message" />
          </div>
          <button type="submit">Book Appointment</button>
          </form>
          {errorMessage && <div className="error"> {errorMessage} </div>}
      </div>
    </div>
  );
}

export default App