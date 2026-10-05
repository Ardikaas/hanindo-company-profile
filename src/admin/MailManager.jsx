import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { adminApi, errorMessage } from "../lib/api";
import useResource from "../hooks/useResource";
import ContentState from "../components/ContentState";
import Pagination from "../components/Pagination";
import Modal from "./Modal";
function Detail({ id, onUpdated, onDeleted }) {
  const [data, setData] = useState(null),
    [error, setError] = useState(""),
    [revision, setRevision] = useState(0),
    [busy, setBusy] = useState(false),
    [confirm, setConfirm] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setData(null);
    setError("");
    (async () => {
      try {
        const res = await adminApi.get("/mail/" + id, {
          signal: controller.signal,
        });
        let item = res.data.data;
        if (!item.isRead) {
          await adminApi.patch(
            "/mail/" + id,
            { isRead: true },
            { signal: controller.signal },
          );
          item = { ...item, isRead: true };
          onUpdated();
        }
        if (!controller.signal.aborted) setData(item);
      } catch (err) {
        if (!controller.signal.aborted) setError(errorMessage(err));
      }
    })();
    return () => controller.abort();
  }, [id, revision, onUpdated]);
  async function mark() {
    setBusy(true);
    setError("");
    try {
      await adminApi.patch("/mail/" + id, { isRead: !data.isRead });
      setData({ ...data, isRead: !data.isRead });
      onUpdated();
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setBusy(false);
    }
  }
  async function remove() {
    setBusy(true);
    setError("");
    try {
      await adminApi.delete("/mail/" + id);
      onDeleted();
    } catch (err) {
      setError(errorMessage(err));
      setConfirm(false);
    } finally {
      setBusy(false);
    }
  }
  return (
    <section className="admin-panel mail-detail" aria-label="Detail pesan">
      {error && (
        <p className="notice error" role="alert">
          {error}{" "}
          <button onClick={() => setRevision((n) => n + 1)}>Coba lagi</button>
        </p>
      )}
      {!data && !error && <p role="status">Memuat pesan…</p>}
      {data && (
        <>
          <span className="eyebrow">INCOMING MESSAGE</span>
          <h2>{data.subject}</h2>
          <p className="muted">
            {new Date(data.createdAt).toLocaleString("id-ID")}
          </p>
          <dl>
            <div>
              <dt>Nama</dt>
              <dd>
                {data.first_name} {data.last_name}
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={"mailto:" + data.email}>{data.email}</a>
              </dd>
            </div>
            <div>
              <dt>Telepon</dt>
              <dd>{data.phone}</dd>
            </div>
          </dl>
          <div className="mail-body">{data.message}</div>
          <div className="row-actions">
            <a
              className="primary-button"
              href={
                "mailto:" +
                data.email +
                "?subject=" +
                encodeURIComponent("Re: " + data.subject)
              }
            >
              Balas via email ↗
            </a>
            <button className="secondary-button" disabled={busy} onClick={mark}>
              {data.isRead ? "Tandai belum dibaca" : "Tandai dibaca"}
            </button>
            <button
              className="danger-button"
              disabled={busy}
              onClick={() => setConfirm(true)}
            >
              Hapus
            </button>
          </div>
          {confirm && (
            <Modal
              title="Hapus pesan?"
              onClose={() => !busy && setConfirm(false)}
            >
              <div className="editor-form">
                <p>Pesan “{data.subject}” akan dihapus permanen.</p>
                <footer>
                  <button
                    className="secondary-button"
                    disabled={busy}
                    onClick={() => setConfirm(false)}
                  >
                    Batal
                  </button>
                  <button
                    className="danger-button"
                    disabled={busy}
                    onClick={remove}
                  >
                    {busy ? "Menghapus…" : "Ya, hapus"}
                  </button>
                </footer>
              </div>
            </Modal>
          )}
        </>
      )}
    </section>
  );
}
export default function MailManager() {
  const [params, setParams] = useSearchParams();
  const selected = params.get("message");
  const [page, setPage] = useState(1),
    [status, setStatus] = useState("all"),
    [query, setQuery] = useState(""),
    [search, setSearch] = useState("");
  const resource = useResource(
    "/mail?page=" +
      page +
      "&status=" +
      status +
      "&q=" +
      encodeURIComponent(query),
    adminApi,
  );
  useEffect(() => {
    if (resource.meta && page > Math.max(1, resource.meta.pages))
      setPage(Math.max(1, resource.meta.pages));
  }, [resource.meta, page]);
  return (
    <>
      <div className="section-heading">
        <div>
          <p className="eyebrow">COMMUNICATION</p>
          <h1>
            Mail{" "}
            <span className="heading-count">
              {resource.meta?.unread || 0} belum dibaca
            </span>
          </h1>
          <p className="muted">
            Pertanyaan, kebutuhan, dan peluang kerja sama.
          </p>
        </div>
        <button className="secondary-button" onClick={resource.reload}>
          Refresh
        </button>
      </div>
      <div className="list-toolbar">
        <form
          className="search-form"
          onSubmit={(e) => {
            e.preventDefault();
            setQuery(search);
            setPage(1);
          }}
        >
          <input
            aria-label="Cari pesan"
            placeholder="Cari nama, email, atau subjek…"
            value={search}
            maxLength={100}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="secondary-button">Cari</button>
        </form>
        <select
          aria-label="Status pesan"
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setPage(1);
          }}
        >
          <option value="all">Semua pesan</option>
          <option value="unread">Belum dibaca</option>
          <option value="read">Sudah dibaca</option>
        </select>
      </div>
      <div className="inbox-grid">
        <section className="admin-panel inbox-list">
          <ContentState
            resource={resource}
            empty="Tidak ada pesan yang sesuai."
          />
          {resource.data?.map((item) => (
            <button
              key={item._id}
              className={
                "inbox-item " + (selected === item._id ? "selected" : "")
              }
              onClick={() => setParams({ message: item._id })}
            >
              <div className="inbox-item-top">
                <strong>
                  {item.first_name} {item.last_name}
                </strong>
                <span
                  className={"mail-dot " + (item.isRead ? "read" : "")}
                  aria-label={item.isRead ? "Dibaca" : "Belum dibaca"}
                />
              </div>
              <p>{item.subject}</p>
              <time>
                {new Date(item.createdAt).toLocaleDateString("id-ID")}
              </time>
            </button>
          ))}
          <Pagination meta={resource.meta} page={page} onChange={setPage} />
        </section>
        {selected ? (
          <Detail
            key={selected}
            id={selected}
            onUpdated={resource.reload}
            onDeleted={() => {
              setParams({});
              resource.reload();
            }}
          />
        ) : (
          <div className="admin-panel empty-detail">
            <h2>Pilih percakapan</h2>
            <p className="muted">Detail pesan akan tampil di sini.</p>
          </div>
        )}
      </div>
    </>
  );
}
