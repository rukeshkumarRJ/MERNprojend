import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import Nav from './Nav';
import Foot from './foot';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_nmu62fr',
        'template_7attp7o',
        formRef.current,
        '97d7htKFfDBfvsRin'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <div className="" id='contact'>
      <Nav />
    <br/> <br/> <br/>
    <center><h2 className="mb-3">CONTACT</h2></center>
      <div className="container contact__container">
        <form ref={formRef} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control"
            placeholder="Your message"
            rows="5"
            name="message"
            required
          ></textarea></div>
          <button type="submit" className=" btn btn-danger w-100">
            Send Message
          </button>
          <br/><br/>
          {message && <span style={{fontSize:25,color:'#1b5e20',fontStyle:'italic'}}>Thank you for your response</span>}
        </form>
      </div>
      <Foot />
    </div>
  );
};

export default Contact;