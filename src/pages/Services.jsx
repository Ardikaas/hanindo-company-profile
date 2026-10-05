import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContentState from "../components/ContentState";
import Pagination from "../components/Pagination";
import useResource from "../hooks/useResource";
import { mediaUrl } from "../lib/api";
import big from "../assets/services-bg-big.png";
import small from "../assets/services-bg-small.png";
import "../style/Services.style.css";
export default function Services() {
  const [page, setPage] = useState(1);
  const resource = useResource("/content/service?page=" + page);
  return (
    <div>
      <Header />
      <main className="services-container">
        <img src={big} alt="Our services" className="services-bg-big" />
        <img src={small} alt="Our services" className="services-bg-small" />
        <div className="services-card-section">
          <ContentState resource={resource} />
          <div className="public-content-grid">
            {resource.data?.map((item) => (
              <article className="service-card" key={item._id}>
                <div className="service-card-top">
                  {item.icon && <img src={mediaUrl(item.icon)} alt="" />}
                  <h1>{item.title}</h1>
                </div>
                <div className="service-card-bottom">
                  <img
                    src={mediaUrl(item.image)}
                    alt={item.title}
                    loading="lazy"
                  />
                  <div className="service-card-bottom-text">
                    <h6>{item.description}</h6>
                    <Link to={"/services/" + item._id}>Learn more</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <Pagination meta={resource.meta} page={page} onChange={setPage} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
