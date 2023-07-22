import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_whbz8gf",
        "template_cwfwql7",
        formRef.current,
        "ueQ3LS63CXFxqkBy-"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              <a
                href="tel:+919848608931"
                style={{
                  textDecoration: "none",
                  color: !darkMode ? "black" : "white",
                }}
              >
                +91 98486 08931
              </a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              <a
                href="mailto:sainadhkolluri66@gmail.com"
                style={{
                  textDecoration: "none",
                  color: !darkMode ? "black" : "white",
                }}
              >
                sainadhkolluri66@gmail.com
              </a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              <a
                href="https://goo.gl/maps/9QFbx3fv4rCxHj226"
                style={{
                  textDecoration: "none",
                  color: !darkMode ? "black" : "white",
                }}
                target="_blank"
              >
                Gopalapuram, A.P, India.
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for work.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
