import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Main.css';

function Signin(props) {
  const [uname, setUname] = useState('');
  const [pwd, setPwd] = useState('');

  
  const arr = [uname, pwd];
  const handleClick = () => {
    return props.getState(arr);
  };

  return (
    <>
    <div>
      <p class="text-center p-2 fs-3 topdefColor" style={{marginBottom: '0px'}}>Eventzz</p>      
      </div>
      <br/>
      <br/>
      <br/>
      <h3 className=" text-center py-3">
        Login
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
            <input placeholder="Enter your Username" type="text"
                class="form-control mx-auto my-3" style={{ maxWidth: "500px" }}
                onChange={(e) => setUname(e.target.value)} 
                defaultValue={props.unameValue}/>
                <input placeholder="Enter your Password" type="password"
                class="form-control mx-auto my-3" style={{ maxWidth: "500px" }}
                onChange={(e) => setPwd(e.target.value)} 
                defaultValue={props.nameValue}/>
            
            <center>
                <button class="btn btn-success" type="submit" onClick={handleClick}>{props.btnName}</button>
            </center>

        </div>
        
    </>
  );
}

export default Signin;
