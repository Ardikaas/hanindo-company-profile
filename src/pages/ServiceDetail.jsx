import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContentState from "../components/ContentState";
import useResource from "../hooks/useResource";
import { mediaUrl } from "../lib/api";
export default function ServiceDetail() {
  const { id } = useParams();
  const resource = useResource("/content/service/" + encodeURIComponent(id));
  return (
    <div>
      <Header />
      <main className="public-detail">
        <a href="/services">← All services</a>
        <ContentState resource={resource} />
        {resource.data && (
          <>
            <h1>{resource.data.title}</h1>
            <img
              src={mediaUrl(resource.data.image)}
              alt={resource.data.title}
            />
            <p>{resource.data.description}</p>
            <a className="public-cta" href="/contact">
              Discuss your project
            </a>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
