import React, { useState } from "react";
import Axios from "axios";
import Signin from "./Signin";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:4500/user/login"; // Replace with your login API endpoint

    // Call the API to perform login with the provided username and password
    Axios.post(url, { uname: username, pwd: password })
      .then((res) => {
        if (res.status === 200) {
          alert("Login successful!");
          navigate('/home'); // Redirect to the home page after successful login
        } else {
          alert("Login failed. Please check your credentials.");
        }
      })
      .catch((err) => {
        alert("An error occurred while logging in.");
        const errorMessage =
        err.response && err.response.data.message
          ? err.response.data.message
          : "An error occurred while logging in.";
      alert(errorMessage);
      console.error(err);
      });
  };

  const getState = (childData) => {
    const [uname, pwd] = childData;
    setUsername(uname);
    setPassword(pwd);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Signin
          getState={getState}
          btnName="Login"
        />
      </form>
    </div>
  );
}

export default Login;
