import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContentState from "../components/ContentState";
import Pagination from "../components/Pagination";
import useResource from "../hooks/useResource";
import { mediaUrl } from "../lib/api";
export default function Portfolio() {
  const [page, setPage] = useState(1);
  const resource = useResource("/content/portfolio?page=" + page);
  return (
    <div>
      <Header />
      <main className="portfolio-container">
        <p className="public-eyebrow">OUR EXPERIENCE</p>
        <h1>Projects & Portfolio</h1>
        <p>Engineering solutions, delivered with care and precision.</p>
        <ContentState resource={resource} />
        <div className="public-content-grid">
          {resource.data?.map((item) => (
            <article className="portfolio-card" key={item._id}>
              <img src={mediaUrl(item.image)} alt={item.title} loading="lazy" />
              <div>
                <p className="public-eyebrow">
                  {[item.category, item.location, item.year]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        <Pagination meta={resource.meta} page={page} onChange={setPage} />
      </main>
      <Footer />
    </div>
  );
}
