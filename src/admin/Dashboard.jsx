import { Link } from "react-router-dom";
import { adminApi } from "../lib/api";
import useResource from "../hooks/useResource";
import ContentState from "../components/ContentState";
import { sections } from "./config";
export default function Dashboard() {
  const resource = useResource("/admin/dashboard", adminApi);
  const data = resource.data;
  return (
    <>
      <div className="section-heading">
        <div>
          <p className="eyebrow">HANINDO WORKSPACE</p>
          <h1>Ringkasan</h1>
          <p className="muted">Website yang terawat dimulai dari sini.</p>
        </div>
        <a
          className="secondary-button"
          href="/"
          target="_blank"
          rel="noreferrer"
        >
          Lihat website ↗
        </a>
      </div>
      <ContentState resource={resource} />
      {data && (
        <>
          <div className="dashboard-welcome">
            <div>
              <span className="eyebrow">CONTENT & COMMUNICATION</span>
              <h2>
                Kelola cerita.
                <br />
                Bangun kepercayaan.
              </h2>
              <p>
                Perbarui informasi perusahaan dan tanggapi peluang kerja sama
                dalam satu tempat.
              </p>
              <Link className="primary-button" to="/admin/home">
                Edit halaman Home
              </Link>
            </div>
            <div className="welcome-mail">
              <span>PERLU PERHATIAN</span>
              <strong>{data.unread}</strong>
              <p>pesan belum dibaca</p>
              <Link to="/admin/mail">Buka inbox →</Link>
            </div>
          </div>
          <div className="stats-grid">
            {Object.entries(sections).map(([kind, config]) => {
              const count = data.content.find((x) => x._id === kind);
              return (
                <Link className="stat-card" to={"/admin/" + kind} key={kind}>
                  <span>{config.label}</span>
                  <strong>{count?.total || 0}</strong>
                  <small>
                    {count?.published || 0} published ·{" "}
                    {(count?.total || 0) - (count?.published || 0)} draft
                  </small>
                </Link>
              );
            })}
          </div>
          <section className="admin-panel">
            <div className="panel-heading">
              <h2>Pesan terbaru</h2>
              <Link to="/admin/mail">Lihat semua ({data.mail}) →</Link>
            </div>
            {!data.recent.length ? (
              <p className="content-state">Belum ada pesan masuk.</p>
            ) : (
              data.recent.map((item) => (
                <Link
                  className="recent-mail"
                  to={"/admin/mail?message=" + item._id}
                  key={item._id}
                >
                  <span className={"mail-dot " + (item.isRead ? "read" : "")} />
                  <div>
                    <strong>{item.subject}</strong>
                    <p>
                      {item.first_name} {item.last_name}
                    </p>
                  </div>
                  <time>
                    {new Date(item.createdAt).toLocaleDateString("id-ID")}
                  </time>
                </Link>
              ))
            )}
          </section>
        </>
      )}
    </>
  );
}
