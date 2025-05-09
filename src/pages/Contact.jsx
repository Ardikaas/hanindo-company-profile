import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import maps from "../assets/maps.png";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../style/Contact.style.css";

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");
    emailjs
      .send(
        "service_hh2vrgh",
        "template_f65gykp",
        {
          name: userName,
          email: userEmail,
          title: subject,
          message: message,
        },
        "auUdoSqsR0VfrFDyo"
      )
      .then(
        () => {
          setIsSending(false);
          setStatusMessage("Message sent successfully!");
          setUserName("");
          setUserEmail("");
          setMessage("");
          setSubject("");
        },
        (error) => {
          setIsSending(false);
          setStatusMessage("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div>
      <Header />
      <div className="contact-container">
        <div className="contact-form">
          <div className="contact-form-left">
            <input
              type="text"
              placeholder="Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <button onClick={sendEmail} disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>
            {statusMessage && <p>{statusMessage}</p>}
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="address">
          <div className="address-text">
            <h3>Head Office</h3>
            <h4>
              Jl. Kantor Kecamatan Gerogol No. 208 Rawaarum, Gerogol, Cilegon,
              Banten, 42436
            </h4>
            <h4>Phone: 082118401473</h4>
          </div>
          <a
            href="https://maps.app.goo.gl/eqTcLCNUkmBzwbnT8"
            target="_blank"
            rel="noreferrer"
          >
            <img src={maps} alt="maps" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
