import React from "react";
import { Link } from "react-router-dom";
import Nav from './Nav';
import Foot from './foot';
import './Home.css';

function Home() {
  return (
    <div>
      <Nav />
      
      <div className="container">
        <img
          src="/asests/img.png"
          alt="Admin Page Banner"
          className="imageProp"
        />
        <hr />
        <Link to="/create-event" className="btn btn-primary mx-2">
          Create Event
        </Link>
        
        <Link to="/event-list" className="btn btn-success mx-2">
          EventLists
        </Link>
        
      </div>
      <Foot />
    </div>
  );
}
export default Home;
