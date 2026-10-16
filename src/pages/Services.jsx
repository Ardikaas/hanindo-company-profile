import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContentState from "../components/ContentState";
import Pagination from "../components/Pagination";
import useResource from "../hooks/useResource";
import { mediaUrl } from "../lib/api";
import { Helmet } from "react-helmet-async";
import big from "../assets/services-bg-big.png";
import small from "../assets/services-bg-small.png";
import "../style/Services.style.css";

const defaultServices = [
  {
    _id: "liner-fabrication-and-installation",
    title: "Liner Fabrication & Installation",
    description:
      "We specialize in the fabrication and installation of high quality protective liners on surfaces such as hoppers, chutes, silos, and dump trucks. These liners help minimize wear, reduce maintenance costs, and extend the lifespan of industrial equipment.",
    icon: "asset:phabricator-icon.png",
    image: "asset:fabrication-work.png",
  },
  {
    _id: "jetty-fender-pad-installation",
    title: "Jetty Fender Pad Installation",
    description:
      "We offer expert installation of fender pads at jetties and marine structures. These pads serve to absorb collision impacts from vessels, helping to protect both port infrastructure and ship hulls from damage.",
    icon: "asset:anchor-icon.png",
    image: "asset:jetty-pad.png",
  },
  {
    _id: "industrial-equipment-supply",
    title: "Industrial Equipment Supply",
    description:
      "Our company provides comprehensive supply solutions for various industrial tools, machinery, and components. We ensure timely delivery and high quality standards to support the smooth operation of industrial projects.",
    icon: "asset:boxes-icon.png",
    image: "asset:industrial-equipment.png",
  },
  {
    _id: "building-and-facility-services",
    title: "Building & Facility Services",
    description:
      "Our team delivers reliable maintenance services for buildings and industrial facilities, covering both structural and mechanical aspects. We focus on optimizing performance, safety, and long-term operational efficiency.",
    icon: "asset:building-icon.png",
    image: "asset:facility-maintenance.png",
  },
  {
    _id: "mining-support-services",
    title: "Mining Support Services",
    description:
      "We support mining activities by providing the necessary equipment, materials, and manpower. Our services are tailored to enhance productivity and ensure compliance with safety and environmental standards in mining operations.",
    icon: "asset:pickaxe-icon.png",
    image: "asset:mining-service.png",
  },
  {
    _id: "steel-fabrication-and-installation",
    title: "Steel Fabrication & Installation",
    description:
      "We design, fabricate, and install durable steel structures tailored for industrial and infrastructure needs. Our solutions are engineered for strength, precision, and adaptability across various project scales.",
    icon: "asset:steel-icon.png",
    image: "asset:steel-work.png",
  },
];

export default function Services() {
  const [page, setPage] = useState(1);
  const resource = useResource("/content/service?page=" + page);
  const serviceList = resource.data?.length ? resource.data : defaultServices;

  return (
    <div>
      <Helmet>
        <title>Our Services | PT Hanindo Bakti Sejahtera</title>
        <meta
          name="description"
          content="Explore the full range of engineering, construction, fabrication, and industrial support services provided by PT Hanindo Bakti Sejahtera."
        />
      </Helmet>
      <Header />
      <main className="services-container">
        <img src={big} alt="Our services" className="services-bg-big" />
        <img src={small} alt="Our services" className="services-bg-small" />
        <div className="services-card-section">
          {resource.loading && <ContentState resource={resource} />}
          <div className="public-content-grid">
            {serviceList.map((item) => (
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
          {resource.meta && (
            <Pagination meta={resource.meta} page={page} onChange={setPage} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
