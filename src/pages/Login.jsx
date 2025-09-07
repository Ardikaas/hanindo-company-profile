import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../style/Login.style.css";
import vison from "../assets/vison-icon.png";
import visoff from "../assets/visoff-icon.png";
import logo from "../assets/FA_HBS_Logo.png";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [forgotText, setForgotText] = useState("Forgot Password?");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const navigate = useNavigate();

  const handleForgotClick = () => {
    setForgotText("Forgot Password? (chat dika aja a feb)");
  };

  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      setStatusMessage("Username dan Password wajib diisi!");
      return;
    }

    try {
      const response = await axios.post(
        "https://devlabfortirta.cloud/hanindo-api/login",
        {
          user: username,
          pass: password,
        }
      );

      if (response.data.status?.code === 200) {
        setStatusMessage("Login berhasil!");
        Cookies.set("admin", "true", { expires: 25 / (24 * 60) });
        navigate("/admin");
      } else {
        setStatusMessage("Login gagal: " + response.data.status?.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      setStatusMessage("Username atau Password salah!");
    }
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="login-card">
          <img src={logo} alt="logo-hanindo" />
          {statusMessage && <h4>{statusMessage}</h4>}
          <div className="login-card-user">
            <h4>Username</h4>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="login-card-pass">
            <h4>Password</h4>
            <div className="login-card-pass-trick">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={() => setShowPassword((prev) => !prev)}>
                <img src={showPassword ? vison : visoff} alt="hint" />
              </button>
            </div>
            <button type="button" onClick={handleForgotClick}>
              {forgotText}
            </button>
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
