import React from "react";
import "./Contact.css";
import MapChart from "./MapChart";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contactLeft">
        <form action="" className="contactForm">
          <input type="text" className="name" placeholder="Name" />
          <input type="text" className="name" placeholder="Email" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            className="message"
            placeholder="Message"
          ></textarea>
          <button className="contactUs">Send</button>
        </form>
      </div>
      <div className="contactRight">
        <MapChart />
      </div>
    </div>
  );
};

export default Contact;
