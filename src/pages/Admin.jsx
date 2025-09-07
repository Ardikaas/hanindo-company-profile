import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../style/Admin.style.css";
import axios from "axios";

const Admin = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    axios
      .get("https://devlabfortirta.cloud/hanindo-api/mail")
      .then((res) => {
        if (res.data.status.code === 200) {
          setMessages(res.data.data);
          setSelectedMessage(res.data.data[0]);
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      time: date.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  };

  return (
    <div>
      <Header />
      <div className="message-container">
        <h1>Message from Client</h1>
        <div className="message-section">
          <div className="message-section-left">
            <div className="message-card-column">
              {messages.map((msg) => {
                const { date, time } = formatDate(msg.createdAt);
                const isActive = selectedMessage?._id === msg._id;

                return (
                  <button
                    key={msg._id}
                    className={isActive ? "message-card-ac" : "message-card"}
                    onClick={() => setSelectedMessage(msg)}
                  >
                    <div className="message-card-left">
                      <div
                        className={
                          isActive
                            ? "message-card-text-ac"
                            : "message-card-text"
                        }
                      >
                        <h4>Name : </h4>
                        <h3>{msg.first_name + " " + msg.last_name}</h3>
                      </div>
                      <div
                        className={
                          isActive
                            ? "message-card-text-ac"
                            : "message-card-text"
                        }
                      >
                        <h4>Subject : </h4>
                        <h3>{msg.subject}</h3>
                      </div>
                      <div
                        className={
                          isActive
                            ? "message-card-text-msg-ac"
                            : "message-card-text-msg"
                        }
                      >
                        <h4>Message : </h4>
                        <h3>{msg.message}</h3>
                      </div>
                    </div>
                    <div
                      className={
                        isActive
                          ? "message-card-right-ac"
                          : "message-card-right"
                      }
                    >
                      <h4>{date}</h4>
                      <h4>{time}</h4>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="message-section-right">
            {selectedMessage ? (
              <>
                <div className="message-section-right-top">
                  <div className="message-section-right-tl">
                    <div className="message-card-text">
                      <h4>Name : </h4>
                      <h3>
                        {selectedMessage.first_name +
                          " " +
                          selectedMessage.last_name}
                      </h3>
                    </div>
                    <div className="message-card-text">
                      <h4>Email : </h4>
                      <h3>{selectedMessage.email}</h3>
                    </div>
                    <div className="message-card-text">
                      <h4>Phone : </h4>
                      <h3>{selectedMessage.phone}</h3>
                    </div>
                    <div className="message-card-text">
                      <h4>Subject : </h4>
                      <h3>{selectedMessage.subject}</h3>
                    </div>
                  </div>
                  <div className="message-section-right-tr">
                    <h4>{formatDate(selectedMessage.createdAt).date}</h4>
                    <h4>{formatDate(selectedMessage.createdAt).time}</h4>
                  </div>
                </div>
                <div className="message-section-right-bot">
                  <h4>{selectedMessage.message}</h4>
                </div>
              </>
            ) : (
              <h3 style={{ padding: "20px" }}>
                Pilih pesan untuk melihat detail
              </h3>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
