export default function ContentState({
  resource,
  empty = "Konten belum tersedia.",
}) {
  if (resource.loading)
    return (
      <p className="content-state" role="status">
        Memuat konten…
      </p>
    );
  if (resource.error)
    return (
      <div className="content-state" role="alert">
        <p>{resource.error}</p>
        <button onClick={resource.reload}>Coba lagi</button>
      </div>
    );
  if (!resource.data || (Array.isArray(resource.data) && !resource.data.length))
    return <p className="content-state">{empty}</p>;
  return null;
}
