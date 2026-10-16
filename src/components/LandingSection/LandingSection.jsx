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

const defaultHome = {
  title: "Delivering Engineering Integrity, Empowering Industrial Progress.",
  description:
    "We specialize in plastic engineering solutions, construction services, and industrial support. From liner installations for hoppers and silos to comprehensive building maintenance, we deliver sustainable solutions with a commitment to quality, safety, and long-term partnership.",
  image: "asset:wallpaper.png",
};

const defaultServices = [
  {
    _id: "liner-fabrication-and-installation",
    title: "Liner Fabrication & Installation",
    description:
      "Fabrication and installation of protective liners on surfaces like hoppers, silos, and dump trucks to prevent wear and corrosion.",
    icon: "asset:phabricator-icon.png",
  },
  {
    _id: "industrial-equipment-supply",
    title: "Industrial Equipment Supply",
    description:
      "Efficient and precise supply of various industrial tools and equipment based on project needs.",
    icon: "asset:boxes-icon.png",
  },
  {
    _id: "steel-fabrication-and-installation",
    title: "Steel Fabrication & Installation",
    description:
      "Durable steel structures engineered with precision, perfect for industrial and infrastructure needs.",
    icon: "asset:steel-icon.png",
  },
];

const defaultClients = [
  {
    _id: "1",
    title: "PT Krakatau Engineering",
    image: "asset:krakatau-engineering.png",
    link: "https://www.krakataueng.co.id/",
  },
  {
    _id: "2",
    title: "PT Krakatau Tirta Industri",
    image: "asset:krakatau-tirta.png",
    link: "https://www.krakatautirta.co.id/",
  },
  {
    _id: "3",
    title: "PT Krakatau Argo Logistics",
    image: "asset:krakatau-logistik.png",
    link: "https://krakatau-argologistics.com/",
  },
  {
    _id: "4",
    title: "PT PP",
    image: "asset:pt-pp.png",
    link: "https://www.ptpp.co.id/en",
  },
  {
    _id: "5",
    title: "DINDIKBUD Provinsi Banten",
    image: "asset:dindikbud.png",
    link: "https://dindikbud.bantenprov.go.id/",
  },
  {
    _id: "6",
    title: "PT Seven Gates Indonesia",
    image: "asset:sevengates.png",
    link: "https://www.sevengates.co.id/",
  },
  {
    _id: "7",
    title: "PT Jurong Engineering Lestari",
    image: "asset:jurong-lestari.png",
    link: "https://jel.com.sg/",
  },
  {
    _id: "8",
    title: "PT Kokoh Semesta",
    image: "asset:kokoh-semesta.png",
    link: "https://www.kokohsemesta.com/",
  },
];

const defaultCertificates = [
  { _id: "s1", title: "Certificate 1", image: "asset:sertif1.png" },
  { _id: "s2", title: "Certificate 2", image: "asset:sertif2.png" },
  { _id: "s3", title: "Certificate 3", image: "asset:sertif3.png" },
  { _id: "s4", title: "Certificate 4", image: "asset:sertif4.png" },
  { _id: "s5", title: "Certificate 5", image: "asset:sertif5.png" },
  { _id: "s6", title: "Certificate 6", image: "asset:sertif6.jpg" },
  { _id: "s7", title: "Certificate 7", image: "asset:sertif7.jpg" },
];

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

  const homeData = home.data || defaultHome;
  const serviceList = services.data?.length ? services.data : defaultServices;
  const partners = clients.data?.length ? clients.data : defaultClients;
  const certificateList = certificates.data?.length
    ? certificates.data
    : defaultCertificates;

  return (
    <div className="landing-container">
      {home.loading && <ContentState resource={home} />}
      <div className="landing-overview-section">
        <div className="landing-overview-section-text">
          <h1>{homeData.title}</h1>
          <div className="landing-overview-section-text-bridge">
            <h4>{homeData.description}</h4>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        <img src={mediaUrl(homeData.image)} alt={homeData.title} />
      </div>

      <div className="landing-service-section">
        <h4>Services Tailored to You</h4>
        <h6>
          Reliable engineering and supply solutions, crafted with precision and
          built with purpose.
        </h6>
        {services.loading && <ContentState resource={services} />}
        <div className="landing-service-section-card">
          {serviceList.map((item) => (
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
        {clients.loading && <ContentState resource={clients} />}
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
              disabled={!certificateList.length}
              onClick={() => scrollCertificates(-1)}
              aria-label="Previous certificate"
              aria-controls="certificate-track"
            >
              <img src={left} alt="" />
            </button>
            <button
              disabled={!certificateList.length}
              onClick={() => scrollCertificates(1)}
              aria-label="Next certificate"
              aria-controls="certificate-track"
            >
              <img src={right} alt="" />
            </button>
          </div>
        </div>
        {certificates.loading && <ContentState resource={certificates} />}
        <div className="certificate-card-carousel">
          <div
            className="certificate-carousel-track"
            id="certificate-track"
            role="region"
            aria-label="Company certificates"
            tabIndex={0}
            ref={trackRef}
          >
            {certificateList.map((item) => (
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
        {certificates.meta && (
          <Pagination
            meta={certificates.meta}
            page={certificatePage}
            onChange={setCertificatePage}
          />
        )}
      </div>
    </div>
  );
}
