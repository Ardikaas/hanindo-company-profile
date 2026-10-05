import {
  NavLink,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/FA_HBS_Logo.png";
import { session } from "../lib/api";
import Dashboard from "../admin/Dashboard";
import HomeEditor from "../admin/HomeEditor";
import ContentManager from "../admin/ContentManager";
import MailManager from "../admin/MailManager";
import { sections } from "../admin/config";
import "../style/Admin.style.css";
const links = [
  ["", "Ringkasan", "M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z"],
  ["home", "Home", "M3 10l9-7 9 7v11H3z M9 21v-8h6v8"],
  [
    "certificate",
    "Sertifikat",
    "M6 3h12v13H6z M9 16v6l3-2 3 2v-6 M9 7h6 M9 11h6",
  ],
  ["service", "Services", "M8 3h8v4H8z M3 7h18v14H3z M3 12h18 M10 11v3h4v-3"],
  [
    "client",
    "Client",
    "M16 21v-3a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v3 M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8 M17 4a4 4 0 0 1 0 7 M22 21v-3a4 4 0 0 0-3-4",
  ],
  ["portfolio", "Portofolio", "M3 5h7l2 3h9v13H3z M7 13h10 M7 17h6"],
  ["mail", "Mail", "M3 5h18v14H3z M3 5l9 8 9-8"],
];
export default function Admin() {
  const [open, setOpen] = useState(false);
  const sidebar = useRef(null);
  const navigate = useNavigate();
  const mayLeave = () =>
    !document.querySelector('[data-dirty="true"]') ||
    window.confirm("Buang perubahan yang belum disimpan?");
  const logout = () => {
    if (mayLeave()) {
      session.clear();
      navigate("/login", { replace: true });
    }
  };
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement;
    const desktop = window.matchMedia("(min-width: 961px)");
    const resize = () => {
      if (desktop.matches) setOpen(false);
    };
    const keys = (event) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab") {
        const targets = [
          ...sidebar.current.querySelectorAll("a, button"),
        ].filter((el) => el.getClientRects().length);
        const first = targets[0],
          last = targets[targets.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    sidebar.current.querySelector("button, a")?.focus();
    desktop.addEventListener("change", resize);
    document.addEventListener("keydown", keys);
    return () => {
      desktop.removeEventListener("change", resize);
      document.removeEventListener("keydown", keys);
      previous?.focus();
    };
  }, [open]);
  return (
    <div
      className="admin-shell"
      onClickCapture={(event) => {
        const link = event.target.closest("a");
        if (link && link.target !== "_blank" && !mayLeave()) {
          event.preventDefault();
          event.stopPropagation();
        }
      }}
    >
      <aside
        ref={sidebar}
        role={open ? "dialog" : undefined}
        aria-modal={open || undefined}
        aria-label="Navigasi admin"
        className={"admin-sidebar " + (open ? "is-open" : "")}
      >
        <button
          className="sidebar-close secondary-button"
          onClick={() => setOpen(false)}
        >
          Tutup menu ✕
        </button>
        <a className="admin-brand" href="/">
          <img src={logo} alt="Hanindo Bakti Sejahtera" />
        </a>
        <p className="sidebar-label">WORKSPACE</p>
        <nav aria-label="Menu admin">
          {links.map(([path, label, icon]) => (
            <NavLink
              key={path}
              to={"/admin" + (path ? "/" + path : "")}
              end={!path}
              onClick={() => setOpen(false)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d={icon} />
              </svg>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <a href="/" target="_blank" rel="noreferrer">
            Lihat website ↗
          </a>
          <button onClick={logout}>Keluar dari akun</button>
          <small>PT Hanindo Bakti Sejahtera</small>
        </div>
      </aside>
      {open && (
        <button
          className="sidebar-backdrop"
          aria-label="Tutup menu admin"
          onClick={() => setOpen(false)}
        />
      )}
      <div className="admin-main" inert={open}>
        <header className="admin-topbar">
          <button
            className="admin-menu-toggle"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
          <span>
            Company workspace <span className="topbar-divider">/</span>{" "}
            <strong>Content & communication</strong>
          </span>
          <span className="admin-avatar" aria-label="Admin">
            AD
          </span>
        </header>
        <main className="admin-content">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="home" element={<HomeEditor />} />
            {Object.keys(sections).map((kind) => (
              <Route
                key={kind}
                path={kind}
                element={<ContentManager key={kind} kind={kind} />}
              />
            ))}
            <Route path="mail" element={<MailManager />} />
            <Route path="*" element={<Navigate to="/admin" replace />} />
          </Routes>
        </main>
        <footer className="admin-footer">
          Hanindo Bakti Sejahtera <span>Administration workspace</span>
        </footer>
      </div>
    </div>
  );
}
