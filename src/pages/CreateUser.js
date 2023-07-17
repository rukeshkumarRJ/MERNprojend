import React,{ useState } from "react";
import Signup from "./Signup";
import Axios from "axios";
import Login from './Login';
import {useNavigate ,useLocation } from "react-router-dom";

function CreateUser() {
    const navigate = useNavigate(); 
    const [data, setData] = useState([]); //data=input field data

    const getState = (childData) => {
        setData(childData);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const url = "http://localhost:4500/user/create-user"
        const obj = { uname: data[0], pwd: data[1],name: data[2], email: data[3], design: data[4],background: data[5] }
    
        Axios.post(url, obj)
            .then((res) => {
                if (res.status === 200) {
                    alert("Registration successful!");
                    navigate('/login')
                        // Redirect to the home page after successful login
                  } else {
                    alert("Registration failed.");
                  }
            })
            .catch((err) => alert(err));
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <Signup getState={getState} btnName="Register" />
            </form>
        </div>
    )
}

export default CreateUser;