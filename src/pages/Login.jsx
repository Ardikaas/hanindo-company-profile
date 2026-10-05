import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import logo from "../assets/FA_HBS_Logo.png";
import { api, session, errorMessage } from "../lib/api";
import "../style/Login.style.css";
export default function Login() {
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  async function submit(event) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const form = new FormData(event.currentTarget);
    try {
      const { data } = await api.post("/login", {
        user: form.get("user"),
        pass: form.get("pass"),
      });
      session.set(data.data.token);
      const target = location.state?.from;
      navigate(target?.startsWith("/admin") ? target : "/admin", {
        replace: true,
      });
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setBusy(false);
    }
  }
  return (
    <div>
      <Header />
      <main className="login-container">
        <form className="login-card" onSubmit={submit}>
          <img src={logo} alt="Hanindo Bakti Sejahtera" />
          <h1 style={{ fontSize: "1.4rem" }}>Admin workspace</h1>
          <p>Masuk untuk mengelola website Hanindo.</p>
          {error && <p role="alert">{error}</p>}
          <label className="login-card-user">
            Username
            <input
              name="user"
              autoComplete="username"
              required
              maxLength={80}
            />
          </label>
          <label className="login-card-pass">
            Password
            <div className="login-card-pass-trick">
              <input
                name="pass"
                type={visible ? "text" : "password"}
                autoComplete="current-password"
                required
                maxLength={256}
              />
              <button
                type="button"
                onClick={() => setVisible(!visible)}
                aria-label={
                  visible ? "Sembunyikan password" : "Tampilkan password"
                }
              >
                {visible ? "Hide" : "Show"}
              </button>
            </div>
          </label>
          <button disabled={busy}>{busy ? "Memproses…" : "Masuk"}</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
