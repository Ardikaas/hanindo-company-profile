import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import phone from "../assets/phone-icon.png";
import mail from "../assets/mail-icon.png";
import pin from "../assets/pin-icon.png";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../style/Contact.style.css";

const Contact = () => {
  const [userFirstName, setFirstName] = useState("");
  const [userLastName, setLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusMessage("");

    // Validasi wajib isi
    if (
      !userFirstName.trim() ||
      !userLastName.trim() ||
      !userEmail.trim() ||
      !userPhone.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      setStatusMessage("Please fill in all required fields.");
      setTimeout(() => setStatusMessage(""), 5000);
      return;
    }

    setIsSending(true);

    emailjs
      .send(
        "service_hh2vrgh",
        "template_f65gykp",
        {
          name: `${userFirstName} ${userLastName}`,
          email: userEmail,
          phone: userPhone,
          title: subject,
          message: message,
        },
        "auUdoSqsR0VfrFDyo"
      )
      .then(() => {
        setIsSending(false);
        setStatusMessage("Message sent successfully!");
        setFirstName("");
        setLastName("");
        setUserEmail("");
        setUserPhone("");
        setMessage("");
        setSubject("");
        setTimeout(() => setStatusMessage(""), 5000);
      })
      .catch((error) => {
        setIsSending(false);
        setStatusMessage("Failed to send message. Please try again.");
        console.error(error);
        setTimeout(() => setStatusMessage(""), 5000);
      });
  };

  // Style tombol berdasarkan status
  const getButtonClass = () => {
    if (isSending) return "sending";
    if (statusMessage.includes("success")) return "success";
    if (
      statusMessage.includes("Please fill") ||
      statusMessage.includes("Failed")
    )
      return "error";
    return "";
  };

  return (
    <div>
      <Header />
      <div className="contact-container">
        <div className="contact-text">
          <h1>Contact Us</h1>
          <h4>
            We are open to all forms of collaboration, as long as they are
            clear, transparent, and built on mutual understanding. Don't
            hesitate to reach out and explore how we can work together.
          </h4>
          <div className="contact-item">
            <img src={phone} alt="phone-icon" />
            <h4>0813-1996-7235</h4>
          </div>
          <div className="contact-item">
            <img src={mail} alt="mail-icon" />
            <h4>cs@hanindobakti.com</h4>
          </div>
          <div className="contact-item">
            <img src={pin} alt="place-icon" />
            <h4>
              Jl. Kantor Kecamatan Gerogol No. 208 Rawaarum, Gerogol, Cilegon,
              Banten, 42436
            </h4>
          </div>
        </div>
        <div className="contact-form">
          <h4>Name</h4>
          <div className="contact-form-name">
            <input
              type="text"
              placeholder="First"
              value={userFirstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last"
              value={userLastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <h4>Email</h4>
          <input
            type="email"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <h4>Phone</h4>
          <input
            type="text"
            placeholder="XXX-XXX-XXXX"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
            required
          />
          <h4>Subject</h4>
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <h4>Message</h4>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            onClick={sendEmail}
            disabled={isSending}
            className={getButtonClass()}
          >
            {isSending
              ? "Sending..."
              : statusMessage
              ? statusMessage
              : "Send Message"}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
