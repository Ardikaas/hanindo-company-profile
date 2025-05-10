import "./LandingSection.style.css";
import { useState, useRef, useEffect } from "react";
import kse from "../../assets/krakatau-engineering.png";
import kti from "../../assets/krakatau-tirta.png";
import kal from "../../assets/krakatau-logistik.png";
import sgi from "../../assets/sevengates.png";
import pp from "../../assets/pt-pp.png";
import dindikbud from "../../assets/dindikbud.png";
import sertif1 from "../../assets/sertif1.png";
import sertif2 from "../../assets/sertif2.png";
import sertif3 from "../../assets/sertif3.png";
import sertif4 from "../../assets/sertif4.png";
import sertif5 from "../../assets/sertif5.png";
import sertif6 from "../../assets/sertif6.jpg";
import sertif7 from "../../assets/sertif7.jpg";
import wallpaper from "../../assets/wallpaper.png";
import blueprint from "../../assets/blueprint.png";
import fabrication from "../../assets/phabricator-icon.png";
import supply from "../../assets/boxes-icon.png";
import anchor from "../../assets/anchor-icon.png";
import building from "../../assets/building-icon.png";
import right from "../../assets/right-icon.png";
import left from "../../assets/left-icon.png";

const LandingSection = () => {
  const clients = [
    {
      img: kse,
      alt: "krakatau-engineering",
      link: "https://www.krakataueng.co.id/",
    },
    {
      img: kti,
      alt: "krakatau-tirta",
      link: "https://www.krakatautirta.co.id/",
    },
    {
      img: kal,
      alt: "krakatau-logistik",
      link: "https://krakatau-argologistics.com/",
    },
    { img: pp, alt: "pt-pp", link: "https://www.ptpp.co.id/en" },
    {
      img: dindikbud,
      alt: "dindikbud",
      link: "https://dindikbud.bantenprov.go.id/",
    },
    {
      img: sgi,
      alt: "seven-gates-indonesia",
      link: "https://www.sevengates.co.id/",
    },
  ];
  const clientList = [...clients, ...clients, ...clients];
  const certificateImages = [
    sertif1,
    sertif2,
    sertif3,
    sertif4,
    sertif5,
    sertif6,
    sertif7,
  ];
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(itemsPerPage);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setItemsPerPage(1);
      } else if (window.innerWidth <= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const duplicatedImages = [
    ...certificateImages.slice(-itemsPerPage),
    ...certificateImages,
    ...certificateImages.slice(0, itemsPerPage),
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
    setIsTransitioning(true);
  };

  useEffect(() => {
    const total = certificateImages.length;
    if (currentIndex === duplicatedImages.length - itemsPerPage) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(itemsPerPage);
      }, 500);
    }

    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(total);
      }, 500);
    }
  }, [
    currentIndex,
    certificateImages.length,
    duplicatedImages.length,
    itemsPerPage,
  ]);

  const getTransform = () => {
    const widthPercentage = 100 / itemsPerPage;
    return `translateX(-${currentIndex * widthPercentage}%)`;
  };

  return (
    <div className="landing-container">
      <div className="landing-overview-section">
        <div className="landing-overview-section-text">
          <h1>
            Delivering Engineering Integrity, Empowering Industrial Progress.
          </h1>
          <div className="landing-overview-section-text-bridge">
            <h4>
              We specialize in plastic engineering solutions, construction
              services, and industrial support. From liner installations for
              hoppers and silos to comprehensive building maintenance, we
              deliver sustainable solutions with a commitment to quality,
              safety, and long-term partnership.
            </h4>
            <a href="/contact">Contact Us</a>
          </div>
        </div>
        <img src={wallpaper} alt="walpaper-img" />
      </div>
      <div className="landing-service-section">
        <h4>Services Tailored to You</h4>
        <h6>
          We deliver reliable engineering and supply solutions across various
          industries crafted with precision, built with purpose, and driven by a
          commitment to excellence in every project we handle.
        </h6>
        <div className="landing-service-section-card">
          <div className="landing-service-section-card-item-column">
            <div className="landing-service-section-card-item">
              <img src={fabrication} alt="fabrication-icon" />
              <h4>Liner Fabrication & Installation</h4>
              <h6>
                Fabrication and installation of protective liners on surfaces
                like hoppers, silos, and dump trucks to prevent wear and
                corrosion.
              </h6>
              <a href="/">Learn More</a>
            </div>
            <div className="landing-service-section-card-item">
              <img src={anchor} alt="anchor-icon" />
              <h4>Jetty Fender Pad Installation</h4>
              <h6>
                Installation of fender pads at jetties to absorb ship impact and
                protect harbor structures.
              </h6>
              <a href="/">Learn More</a>
            </div>
          </div>
          <div className="landing-service-section-card-item-column">
            <div className="landing-service-section-card-item">
              <img src={supply} alt="supply-icon" />
              <h4>Industrial Equipment Supply</h4>
              <h6>
                Efficient and precise supply of various industrial tools and
                equipment based on project needs.
              </h6>
              <a href="/">Learn More</a>
            </div>
            <div className="landing-service-section-card-item">
              <img src={building} alt="building-icon" />
              <h4>Building & Industrial Facility Maintenance</h4>
              <h6>
                Routine maintenance and repair services for buildings and
                industrial facilities to ensure operational efficiency.
              </h6>
              <a href="/">Learn More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-about-section">
        <div className="landing-about-section-top">
          <div className="landing-about-section-top-text">
            <h4>About Our Company</h4>
            <h6>
              With years of experience in construction, building maintenance,
              and industrial services, we specialize in providing high-quality,
              innovative, and sustainable solutions designed to meet the
              specific needs of our clients.
            </h6>
          </div>
          <a href="/about">Learn More</a>
        </div>
        <div className="landing-about-section-bottom">
          <img src={blueprint} alt="blueprint" />
          <div className="landing-about-section-bottom-text">
            <div className="landing-about-section-bottom-vision">
              <h1>Our Vission</h1>
              <h6>
                To provide exceptional construction services that exceed client
                expectations through innovation, quality craftsmanship, and a
                commitment to sustainability. We aim to build lasting
                relationships and create spaces that enhance communities.
                <a href="/about">More</a>
              </h6>
            </div>
            <a href="/about">Our Mision</a>
            <a href="/about">Our History</a>
          </div>
        </div>
      </div>
      <div className="landing-client-section">
        <h1>Who We Work With</h1>
        <h6>
          We are proud to serve a wide range of clients across industries,
          providing reliable and effective solutions to support their projects
          and growth.
        </h6>
        <div className="client-marquee">
          <div className="client-track">
            {[...clientList, ...clientList].map((client, idx) => (
              <div className="client-item" key={idx}>
                <a href={client.link} target="_blank" rel="noopener noreferrer">
                  <div className="client-img-wrapper">
                    <img
                      src={client.img}
                      alt={client.alt}
                      className="client-img"
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="landing-certificate-section">
        <div className="landing-certificate-section-top">
          <div className="landing-certificate-section-text">
            <h1>Our Certificate</h1>
            <h6>
              As a legally established company, we hold official certifications
              that demonstrate our commitment to compliance, credibility, and
              professional standards in every aspect of our operations.
            </h6>
          </div>
          <div className="landing-certificate-section-button">
            <button onClick={handlePrev}>
              <img src={left} alt="prev" />
            </button>
            <button onClick={handleNext}>
              <img src={right} alt="next" />
            </button>
          </div>
        </div>
        <div className="certificate-card-carousel">
          <div
            className="certificate-carousel-track"
            ref={trackRef}
            style={{
              transform: getTransform(),
              transition: isTransitioning
                ? "transform 0.5s ease-in-out"
                : "none",
              width: `${(duplicatedImages.length * 100) / itemsPerPage}%`,
            }}
          >
            {duplicatedImages.map((img, idx) => (
              <div className="certificate-img-wrapper" key={idx}>
                <img
                  src={img}
                  alt={`sertif-${idx}`}
                  className="certificate-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
