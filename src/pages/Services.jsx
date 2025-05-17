import "../style/Services.style.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import servicesBgBig from "../assets/services-bg-big.png";
import servicesBgSmall from "../assets/services-bg-small.png";
import fabrication from "../assets/phabricator-icon.png";
import supply from "../assets/boxes-icon.png";
import anchor from "../assets/anchor-icon.png";
import building from "../assets/building-icon.png";
import pickaxe from "../assets/pickaxe-icon.png";
import steel from "../assets/steel-icon.png";
import fabricationImage from "../assets/liner-fabrication.png";
import jettyImage from "../assets/jetty-fender.png";
import equipmentImage from "../assets/industrial-equipment.png";
import maintenanceImage from "../assets/facility-maintenance.png";
import miningImage from "../assets/mining-service.png";
import steelImage from "../assets/steel-work.png";

const Services = () => {
  return (
    <div>
      <Header />
      <div className="services-container">
        <img
          src={servicesBgBig}
          alt="services-bg-big"
          className="services-bg-big"
        />
        <img
          src={servicesBgSmall}
          alt="service-bg-small"
          className="services-bg-small"
        />
        <div className="services-card-section">
          <div className="services-card-row">
            <div className="service-card">
              <div className="service-card-top">
                <img src={fabrication} alt="fabrication-icon" />
                <h1>Liner Fabrication & Installation</h1>
              </div>
              <div className="service-card-bottom">
                <img src={fabricationImage} alt="fabrication-img" />
                <div className="service-card-bottom-text">
                  <h6>
                    We specialize in the fabrication and installation of high
                    quality protective liners on surfaces such as hoppers,
                    chutes, silos, and dump trucks. These liners help minimize
                    wear, reduce maintenance costs, and extend the lifespan of
                    industrial equipment.
                  </h6>
                  <a href="/services/liner-fabrication-and-installation">
                    Learn more.
                  </a>
                </div>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-top">
                <img src={anchor} alt="anchor-icon" />
                <h1>Jetty Fender Pad Installation</h1>
              </div>
              <div className="service-card-bottom">
                <img src={jettyImage} alt="jetty-pad-img" />
                <div className="service-card-bottom-text">
                  <h6>
                    We offer expert installation of fender pads at jetties and
                    marine structures. These pads serve to absorb collision
                    impacts from vessels, helping to protect both port
                    infrastructure and ship hulls from damage.
                  </h6>
                  <a href="/services/jetty-fender-pad-installation">
                    Learn more.
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="services-card-row">
            <div className="service-card">
              <div className="service-card-top">
                <img src={supply} alt="fabrication-icon" />
                <h1>Industrial Equipment Supply</h1>
              </div>
              <div className="service-card-bottom">
                <img src={equipmentImage} alt="equipment-img" />
                <div className="service-card-bottom-text">
                  <h6>
                    Our company provides comprehensive supply solutions for
                    various industrial tools, machinery, and components. We
                    ensure timely delivery and high quality standards to support
                    the smooth operation of industrial projects.
                  </h6>
                  <a href="/services/industrial-equipment-supply">
                    Learn more.
                  </a>
                </div>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-top">
                <img src={building} alt="building-icon" />
                <h1>Building & Facility Services</h1>
              </div>
              <div className="service-card-bottom">
                <img src={maintenanceImage} alt="maintenance-img" />
                <div className="service-card-bottom-text">
                  <h6>
                    Our team delivers reliable maintenance services for
                    buildings and industrial facilities, covering both
                    structural and mechanical aspects. We focus on optimizing
                    performance, safety, and long-term operational efficiency.
                  </h6>
                  <a href="/services/building-and-facility-services">
                    Learn more.
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="services-card-row">
            <div className="service-card">
              <div className="service-card-top">
                <img src={pickaxe} alt="pickaxe-icon" />
                <h1>Mining Support Services</h1>
              </div>
              <div className="service-card-bottom">
                <img src={miningImage} alt="mining-img" />
                <div className="service-card-bottom-text">
                  <h6>
                    We support mining activities by providing the necessary
                    equipment, materials, and manpower. Our services are
                    tailored to enhance productivity and ensure compliance with
                    safety and environmental standards in mining operations.
                  </h6>
                  <a href="/services/mining-support-services">Learn more.</a>
                </div>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-top">
                <img src={steel} alt="steel-icon" />
                <h1>Steel Structure Works</h1>
              </div>
              <div className="service-card-bottom">
                <img src={steelImage} alt="steel-work-img" />
                <div className="service-card-bottom-text">
                  <h6>
                    We design, fabricate, and install durable steel structures
                    tailored for industrial and infrastructure needs. Our
                    solutions are engineered for strength, precision, and
                    adaptability across various project scales.
                  </h6>
                  <a href="/services/steel-structure-works">Learn more.</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
