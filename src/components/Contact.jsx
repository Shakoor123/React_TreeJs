import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import MapChart from "./MapChart";

const Contact = () => {
  const ref = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ecqzksr",
        "template_wmc5g3k",
        ref.current,
        "1L09-AOe966pqeyvm"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setError(true);
        }
      );
    ref.current.reset();
  };
  return (
    <div className="contact">
      <div className="contactLeft">
        <form
          ref={ref}
          action=""
          className="contactForm"
          onSubmit={handleSubmit}
        >
          <input type="text" name="name" className="name" placeholder="Name" />
          <input
            type="text"
            name="email"
            className="name"
            placeholder="Email"
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="3"
            className="message"
            placeholder="Message"
          ></textarea>
          <button type="submit" className="contactUs">
            Send
          </button>
          <p>{success && "Your Message Sent Successfull"}</p>
          <p>{error && "Your Message not Sent"}</p>
        </form>
      </div>
      <div className="contactRight">
        <MapChart />
      </div>
    </div>
  );
};

export default Contact;
