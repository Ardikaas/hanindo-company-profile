import { useEffect, useState } from "react";
import useResource from "../hooks/useResource";
import { adminApi, errorMessage, mediaUrl, versionHeader } from "../lib/api";
import ContentState from "../components/ContentState";
import MediaField from "./MediaField";
function Form({ item, reload, onSaved }) {
  const [values, setValues] = useState({
    title: item.title,
    description: item.description,
    image: item.image,
  });
  const [busy, setBusy] = useState(false),
    [uploading, setUploading] = useState(false),
    [notice, setNotice] = useState("");
  const dirty = Object.keys(values).some((key) => values[key] !== item[key]);
  useEffect(() => {
    const leave = (e) => {
      if (dirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", leave);
    return () => window.removeEventListener("beforeunload", leave);
  }, [dirty]);
  async function save(e) {
    e.preventDefault();
    setBusy(true);
    setNotice("");
    try {
      await adminApi.put("/admin/home", values, versionHeader(item));
      onSaved();
    } catch (err) {
      setNotice(errorMessage(err));
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className="home-editor-grid">
      <form
        onSubmit={save}
        className="admin-panel editor-form"
        data-dirty={dirty || uploading || busy}
      >
        <h2>Konten utama</h2>
        <p className="muted">
          Perubahan tampil di bagian pembuka halaman Home setelah disimpan.
        </p>
        <fieldset disabled={busy || uploading}>
          <label>
            Judul
            <input
              required
              maxLength={180}
              value={values.title}
              onChange={(e) => setValues({ ...values, title: e.target.value })}
            />
          </label>
          <label>
            Deskripsi
            <textarea
              rows={6}
              required
              maxLength={1200}
              value={values.description}
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </label>
        </fieldset>
        <MediaField
          disabled={busy}
          value={values.image}
          onChange={(image) => setValues((old) => ({ ...old, image }))}
          onBusy={setUploading}
        />
        {notice && (
          <p className="notice error" role="alert">
            {notice}
          </p>
        )}
        <footer>
          <button
            type="button"
            className="secondary-button"
            disabled={!dirty || busy || uploading}
            onClick={() => window.confirm("Buang perubahan?") && reload()}
          >
            Batalkan perubahan
          </button>
          <button
            className="primary-button"
            disabled={!dirty || busy || uploading}
          >
            {busy ? "Menyimpan…" : "Simpan perubahan"}
          </button>
        </footer>
      </form>
      <aside className="admin-panel home-preview">
        <p className="eyebrow">PRATINJAU HOME</p>
        <img src={mediaUrl(values.image)} alt="Pratinjau Home" />
        <h2>{values.title}</h2>
        <p>{values.description}</p>
      </aside>
    </div>
  );
}
export default function HomeEditor() {
  const resource = useResource("/admin/home", adminApi);
  const [saved, setSaved] = useState(false);
  return (
    <>
      <div className="section-heading">
        <div>
          <p className="eyebrow">WEBSITE CONTENT</p>
          <h1>Home</h1>
          <p className="muted">
            Kesan pertama yang tepat untuk perusahaan Anda.
          </p>
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
      {saved && (
        <p className="notice" role="status">
          Home berhasil disimpan.
        </p>
      )}
      <ContentState resource={resource} />
      {resource.data && (
        <Form
          key={resource.data.__v}
          item={resource.data}
          reload={() => {
            setSaved(false);
            resource.reload();
          }}
          onSaved={() => {
            setSaved(true);
            resource.reload();
          }}
        />
      )}
    </>
  );
}
