import { useEffect, useState } from "react";
import { adminApi, errorMessage, mediaUrl, versionHeader } from "../lib/api";
import useResource from "../hooks/useResource";
import ContentState from "../components/ContentState";
import Pagination from "../components/Pagination";
import MediaField from "./MediaField";
import Modal from "./Modal";
import { sections } from "./config";
function Editor({ kind, item, onClose, onSaved }) {
  const config = sections[kind];
  const blank = Object.fromEntries(config.fields.map(([name]) => [name, ""]));
  const initial = { ...blank, image: "", order: 0, isPublished: true, ...item };
  const [values, setValues] = useState(initial),
    [busy, setBusy] = useState(false),
    [uploading, setUploading] = useState(false),
    [error, setError] = useState("");
  const dirty = JSON.stringify(values) !== JSON.stringify(initial);
  useEffect(() => {
    const listener = (event) => {
      if (dirty) {
        event.preventDefault();
        event.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", listener);
    return () => window.removeEventListener("beforeunload", listener);
  }, [dirty]);
  const change = (name, value) =>
    setValues((old) => ({ ...old, [name]: value }));
  const close = () => {
    if (
      !busy &&
      !uploading &&
      (!dirty || window.confirm("Buang perubahan yang belum disimpan?"))
    )
      onClose();
  };
  async function save(event) {
    event.preventDefault();
    if (!values.image) {
      setError("Unggah gambar sebelum menyimpan.");
      return;
    }
    const payload = {};
    for (const key of [
      ...config.fields.map((x) => x[0]),
      "image",
      "order",
      "isPublished",
    ])
      payload[key] = values[key];
    // Keep the existing service icon without making it a required upload.
    if (kind === "service" && values.icon) payload.icon = values.icon;
    setBusy(true);
    setError("");
    try {
      if (item?._id)
        await adminApi.put(
          "/admin/content/" + kind + "/" + item._id,
          payload,
          versionHeader(item),
        );
      else await adminApi.post("/admin/content/" + kind, payload);
      onSaved();
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setBusy(false);
    }
  }
  return (
    <Modal
      title={(item ? "Edit " : "Tambah ") + config.singular}
      onClose={close}
    >
      <form onSubmit={save} className="editor-form">
        <fieldset disabled={busy || uploading}>
          {config.fields.map(([key, label, type, max, required]) => (
            <label key={key}>
              {label}
              {required && <span aria-hidden="true"> *</span>}
              {type === "textarea" ? (
                <textarea
                  required={required}
                  maxLength={max}
                  value={values[key]}
                  onChange={(e) => change(key, e.target.value)}
                  rows={5}
                />
              ) : (
                <input
                  type={type}
                  required={required}
                  maxLength={max}
                  value={values[key]}
                  onChange={(e) => change(key, e.target.value)}
                  pattern={key === "year" ? "(19|20|21)[0-9]{2}" : undefined}
                />
              )}
            </label>
          ))}
        </fieldset>
        <MediaField
          disabled={busy}
          value={values.image}
          onChange={(value) => change("image", value)}
          certificate={kind === "certificate"}
          onBusy={setUploading}
        />
        <fieldset disabled={busy || uploading} className="form-row">
          <label>
            Urutan
            <input
              type="number"
              min="0"
              max="99999"
              required
              value={values.order}
              onChange={(e) =>
                change(
                  "order",
                  e.target.value === "" ? "" : Number(e.target.value),
                )
              }
            />
          </label>
          <label>
            Status
            <select
              value={values.isPublished ? "published" : "draft"}
              onChange={(e) =>
                change("isPublished", e.target.value === "published")
              }
            >
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </label>
        </fieldset>
        <small className="muted">
          Urutan terkecil tampil lebih dahulu. Draft hanya terlihat di admin.
        </small>
        {error && (
          <p role="alert" className="notice error">
            {error}
          </p>
        )}
        <footer>
          <button
            type="button"
            className="secondary-button"
            disabled={busy || uploading}
            onClick={close}
          >
            Batal
          </button>
          <button className="primary-button" disabled={busy || uploading}>
            {busy ? "Menyimpan…" : "Simpan"}
          </button>
        </footer>
      </form>
    </Modal>
  );
}
export default function ContentManager({ kind }) {
  const config = sections[kind];
  const [page, setPage] = useState(1),
    [query, setQuery] = useState(""),
    [draftQuery, setDraftQuery] = useState(""),
    [status, setStatus] = useState("all");
  const [editor, setEditor] = useState(null),
    [deleting, setDeleting] = useState(null),
    [busy, setBusy] = useState(false),
    [notice, setNotice] = useState("");
  const resource = useResource(
    "/admin/content/" +
      kind +
      "?page=" +
      page +
      "&q=" +
      encodeURIComponent(query) +
      "&status=" +
      status,
    adminApi,
  );
  useEffect(() => {
    if (resource.meta && page > Math.max(1, resource.meta.pages))
      setPage(Math.max(1, resource.meta.pages));
  }, [resource.meta, page]);
  async function remove() {
    setBusy(true);
    try {
      await adminApi.delete(
        "/admin/content/" + kind + "/" + deleting._id,
        versionHeader(deleting),
      );
      setDeleting(null);
      setNotice("Konten berhasil dihapus.");
      resource.reload();
    } catch (err) {
      setNotice(errorMessage(err));
    } finally {
      setBusy(false);
    }
  }
  return (
    <>
      <div className="section-heading">
        <div>
          <p className="eyebrow">CONTENT MANAGEMENT</p>
          <h1>{config.label}</h1>
          <p className="muted">{config.description}</p>
        </div>
        <button className="primary-button" onClick={() => setEditor({})}>
          + Tambah {config.singular}
        </button>
      </div>
      {notice && (
        <p className="notice" role="status">
          {notice}
        </p>
      )}
      <div className="admin-panel">
        <div className="list-toolbar">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setQuery(draftQuery);
              setPage(1);
            }}
            className="search-form"
          >
            <input
              aria-label="Cari konten"
              placeholder={"Cari " + config.singular + "…"}
              value={draftQuery}
              maxLength={100}
              onChange={(e) => setDraftQuery(e.target.value)}
            />
            <button className="secondary-button">Cari</button>
          </form>
          <select
            aria-label="Filter status"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setPage(1);
            }}
          >
            <option value="all">Semua status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>
        <ContentState
          resource={resource}
          empty={
            "Belum ada " + config.singular + ". Tambahkan konten pertama Anda."
          }
        />
        {resource.data?.length > 0 && (
          <div className="content-list">
            {resource.data.map((item) => (
              <article key={item._id} className="content-row">
                <img src={mediaUrl(item.image)} alt={item.title} />
                <div className="content-row-main">
                  <h2>{item.title}</h2>
                  <p className="muted">
                    {item.description || "Dokumen sertifikat"}
                  </p>
                  <div className="row-meta">
                    <span
                      className={
                        "badge " + (item.isPublished ? "published" : "")
                      }
                    >
                      {item.isPublished ? "Published" : "Draft"}
                    </span>
                    <span>Urutan {item.order}</span>
                  </div>
                </div>
                <div className="row-actions">
                  <button
                    className="secondary-button"
                    onClick={() => setEditor(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="danger-button"
                    onClick={() => {
                      setNotice("");
                      setDeleting(item);
                    }}
                  >
                    Hapus
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
        <Pagination meta={resource.meta} page={page} onChange={setPage} />
      </div>
      {editor && (
        <Editor
          kind={kind}
          item={editor._id ? editor : null}
          onClose={() => setEditor(null)}
          onSaved={() => {
            setEditor(null);
            setNotice("Konten berhasil disimpan.");
            resource.reload();
          }}
        />
      )}
      {deleting && (
        <Modal title="Hapus konten?" onClose={() => !busy && setDeleting(null)}>
          <div className="editor-form">
            <p>
              “{deleting.title}” akan dihapus dari website. Tindakan ini tidak
              dapat dibatalkan.
            </p>
            <footer>
              <button
                className="secondary-button"
                disabled={busy}
                onClick={() => setDeleting(null)}
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
            {notice && <p role="alert">{notice}</p>}
          </div>
        </Modal>
      )}
    </>
  );
}
