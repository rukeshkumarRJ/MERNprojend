import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Signup(props) {
  const [uname, setUname] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');
  const [back, setBG] = useState('');
  const [design, setDesign] = useState('');

  
  const arr = [uname, pwd, name, email, design, back];
  const handleDesignationChange = (e) => {
    setDesign(e.target.value);
  };

  const handleClick = () => {
    console.log("Register button clicked.");
    return props.getState(arr);
  };
  

  return (
    <>
    <p class="text-center p-2 fs-3 topdefColor" style={{marginBottom: '0px'}}>Eventzz</p>      
      
      <br/>
      <br/>
      <h3 className="text-center py-3">
        Registration form
      </h3>
      <div className="container mb-3">
        <Link to="/">
          <button className="btn btn-dark">
            <span className="mx-2 my-3">GO BACK</span>
          </button>
        </Link>
        <br />
      </div>
      <div>
            <input placeholder="Enter your name" type="text"
                class="form-control mx-auto my-3" style={{ maxWidth: "500px" }}
                onChange={(e) => setName(e.target.value)} 
                defaultValue={props.nameValue}/>
            <input placeholder="Enter your Username" type="text"
                class="form-control mx-auto my-3" style={{ maxWidth: "500px" }}
                onChange={(e) => setUname(e.target.value)} 
                defaultValue={props.unameValue}/>
                <input placeholder="Enter your Password" type="password"
                class="form-control mx-auto my-3" style={{ maxWidth: "500px" }}
                onChange={(e) => setPwd(e.target.value)} 
                defaultValue={props.nameValue}/>
            <input placeholder="Enter your email" type="email"
                class="form-control mx-auto my-3" style={{ maxWidth: "500px" }}
                onChange={(e) => setEmail(e.target.value)} 
                defaultValue={props.emailValue}/>
           <select class="form-control mx-auto my-3" style={{ maxWidth: "500px" }} placeholder="Enter your Designation"
            onChange={(e) => setDesign(e.target.value)} 
            >
                <option value="">Select your Designation</option>
              <option value="Organizer">Organizer</option>
              <option value="Student">Student</option>
            </select>
            <input placeholder="Enter your University or company" type="text"
                class="form-control mx-auto my-3" style={{ maxWidth: "500px" }}
                onChange={(e) => setBG(e.target.value)} 
                defaultValue={props.backValue}/>
            
            <center>
                <button class="btn btn-success" type="submit" onClick={handleClick}>{props.btnName}</button>
            </center>
        </div>
        
    </>
  );
}

export default Signup;