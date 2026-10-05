export default function Pagination({ meta, page, onChange }) {
  if (!meta || meta.pages <= 1) return null;
  return (
    <nav className="pagination" aria-label="Pagination">
      <button disabled={page <= 1} onClick={() => onChange(page - 1)}>
        Sebelumnya
      </button>
      <span>
        {page} / {meta.pages} · {meta.total} data
      </span>
      <button disabled={page >= meta.pages} onClick={() => onChange(page + 1)}>
        Berikutnya
      </button>
    </nav>
  );
}
