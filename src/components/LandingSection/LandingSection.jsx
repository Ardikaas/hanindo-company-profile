import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useResource from "../../hooks/useResource";
import { mediaUrl } from "../../lib/api";
import ContentState from "../ContentState";
import Pagination from "../Pagination";
import blueprint from "../../assets/blueprint.png";
import next from "../../assets/next-icon.png";
import right from "../../assets/right-icon.png";
import left from "../../assets/left-icon.png";
import "./LandingSection.style.css";
export default function LandingSection() {
  const home = useResource("/home");
  const services = useResource("/content/service?limit=3");
  const clients = useResource("/content/client?limit=100");
  const [certificatePage, setCertificatePage] = useState(1);
  const certificates = useResource(
    "/content/certificate?limit=12&page=" + certificatePage,
  );
  const trackRef = useRef(null);
  useEffect(() => {
    trackRef.current?.scrollTo(0, 0);
  }, [certificatePage]);
  const scrollCertificates = (direction) => {
    const track = trackRef.current;
    if (!track?.firstElementChild) return;
    const step =
      track.firstElementChild.getBoundingClientRect().width +
      parseFloat(getComputedStyle(track).columnGap);
    const end = track.scrollWidth - track.clientWidth;
    track.scrollTo({
      left:
        direction > 0 && track.scrollLeft >= end - 2
          ? 0
          : direction < 0 && track.scrollLeft <= 2
            ? end
            : track.scrollLeft + direction * step,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };
  const partners = clients.data || [];
  return (
    <div className="landing-container">
      <ContentState resource={home} />
      {home.data && (
        <div className="landing-overview-section">
          <div className="landing-overview-section-text">
            <h1>{home.data.title}</h1>
            <div className="landing-overview-section-text-bridge">
              <h4>{home.data.description}</h4>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
          <img src={mediaUrl(home.data.image)} alt={home.data.title} />
        </div>
      )}
      <div className="landing-service-section">
        <h4>Services Tailored to You</h4>
        <h6>
          Reliable engineering and supply solutions, crafted with precision and
          built with purpose.
        </h6>
        <ContentState resource={services} />
        <div className="landing-service-section-card">
          {services.data?.map((item) => (
            <article
              className="landing-service-section-card-item"
              key={item._id}
            >
              <img src={mediaUrl(item.icon || item.image)} alt="" />
              <h4>{item.title}</h4>
              <h6 className="summary-text">{item.description}</h6>
              <Link to={"/services/" + item._id}>Learn More</Link>
            </article>
          ))}
          <Link
            className="landing-service-section-card-item-link"
            to="/services"
          >
            <img src={next} alt="" />
            <h4>Discover Full Service Capabilities →</h4>
            <h6>Explore how our services can support your next project.</h6>
          </Link>
        </div>
      </div>
      <div className="landing-about-section">
        <div className="landing-about-section-top">
          <div className="landing-about-section-top-text">
            <h4>About Our Company</h4>
            <h6>
              With experience in construction, building maintenance, and
              industrial services, we deliver solutions designed around our
              clients.
            </h6>
          </div>
          <Link to="/about">Learn More</Link>
        </div>
        <div className="landing-about-section-bottom">
          <img src={blueprint} alt="Engineering planning" />
          <div className="landing-about-section-bottom-text">
            <div className="landing-about-section-bottom-vision">
              <h1>Our Vision</h1>
              <h6>
                To provide exceptional construction services through innovation,
                quality craftsmanship, and a commitment to sustainability.{" "}
                <Link to="/about">More</Link>
              </h6>
            </div>
            <Link to="/about">Our Mission</Link>
            <Link to="/portfolio">Our Portfolio</Link>
          </div>
        </div>
      </div>
      <div className="landing-client-section">
        <h1>Who We Work With</h1>
        <h6>Trusted partnerships across industries.</h6>
        <ContentState resource={clients} />
        {partners.length > 0 && (
          <div className="client-marquee">
            <div className="client-track">
              {[...partners, ...partners].map((item, index) => (
                <div className="client-item" key={item._id + "-" + index}>
                  <a
                    href={item.link || "/client"}
                    target={item.link ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    <div className="client-img-wrapper">
                      <img
                        src={mediaUrl(item.image)}
                        alt={item.title}
                        className="client-img"
                        loading="lazy"
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
        <Link to="/client">View all clients →</Link>
      </div>
      <div className="landing-certificate-section">
        <div className="landing-certificate-section-top">
          <div className="landing-certificate-section-text">
            <h1>Our Certificate</h1>
            <h6>Our commitment to credibility and professional standards.</h6>
          </div>
          <div className="landing-certificate-section-button">
            <button
              disabled={!certificates.data?.length}
              onClick={() => scrollCertificates(-1)}
              aria-label="Previous certificate"
              aria-controls="certificate-track"
            >
              <img src={left} alt="" />
            </button>
            <button
              disabled={!certificates.data?.length}
              onClick={() => scrollCertificates(1)}
              aria-label="Next certificate"
              aria-controls="certificate-track"
            >
              <img src={right} alt="" />
            </button>
          </div>
        </div>
        <ContentState resource={certificates} />
        <div className="certificate-card-carousel">
          <div
            className="certificate-carousel-track"
            id="certificate-track"
            role="region"
            aria-label="Company certificates"
            tabIndex={0}
            ref={trackRef}
          >
            {certificates.data?.map((item) => (
              <a
                className="certificate-img-wrapper"
                key={item._id}
                href={mediaUrl(item.image)}
                target="_blank"
                rel="noreferrer"
                title={item.title}
              >
                <img
                  src={mediaUrl(item.image)}
                  alt={item.title}
                  className="certificate-img"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
        <Pagination
          meta={certificates.meta}
          page={certificatePage}
          onChange={setCertificatePage}
        />
      </div>
    </div>
  );
}
