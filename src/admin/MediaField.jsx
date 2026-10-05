import { useRef, useState } from "react";
import { adminApi, mediaUrl, errorMessage } from "../lib/api";
export default function MediaField({
  value,
  onChange,
  certificate = false,
  label = "Gambar",
  onBusy,
  disabled = false,
}) {
  const [busy, setBusy] = useState(false),
    [error, setError] = useState(""),
    [page, setPage] = useState(1);
  const input = useRef(null);
  async function upload(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      setError("File maksimal 10 MB.");
      event.target.value = "";
      return;
    }
    const form = new FormData();
    form.append("purpose", certificate ? "certificate" : "image");
    form.append("page", String(page));
    form.append("file", file);
    setBusy(true);
    onBusy?.(true);
    setError("");
    try {
      const res = await adminApi.post("/admin/media", form);
      onChange(res.data.data.path);
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setBusy(false);
      onBusy?.(false);
      if (input.current) input.current.value = "";
    }
  }
  return (
    <div className="media-field">
      <span className="field-label">{label}</span>
      <div className="media-upload">
        {value ? (
          <img src={mediaUrl(value)} alt="Pratinjau upload" />
        ) : (
          <div className="media-placeholder">Belum ada gambar</div>
        )}
        <div>
          <label className="upload-button">
            {busy ? "Memproses file…" : value ? "Ganti gambar" : "Pilih file"}
            <input
              ref={input}
              type="file"
              aria-label={label}
              accept={
                certificate
                  ? "image/jpeg,image/png,image/webp,application/pdf"
                  : "image/jpeg,image/png,image/webp"
              }
              disabled={busy || disabled}
              onChange={upload}
            />
          </label>
          <p className="muted">
            JPG, PNG, WebP{certificate ? ", atau PDF" : ""}. Maks. 10 MB.
          </p>
          {certificate && (
            <label>
              Halaman PDF
              <input
                aria-label="Halaman PDF"
                type="number"
                min="1"
                max="100"
                value={page}
                onChange={(e) => setPage(e.target.value)}
                disabled={busy || disabled}
              />
              <small>
                Satu halaman menjadi satu gambar. Pilih halaman sebelum
                mengunggah PDF.
              </small>
            </label>
          )}
        </div>
      </div>
      {error && (
        <p className="notice error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
