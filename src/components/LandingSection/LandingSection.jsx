import "./LandingSection.style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import kse from "../../assets/krakatau-engineering.png";
import kti from "../../assets/krakatau-tirta.png";
import kal from "../../assets/krakatau-logistik.png";
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
import fabrication from "../../assets/phabricator-icon.png";
import supply from "../../assets/boxes-icon.png";
import anchor from "../../assets/anchor-icon.png";
import building from "../../assets/building-icon.png";

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
      img: kal,
      alt: "krakatau-logistik",
      link: "https://krakatau-argologistics.com/",
    },
  ];
  return (
    <div className="landing-container">
      <div className="landing-overview-section">
        <div className="landing-overview-section-text">
          <h1>
            Delivering Engineering Integrity, Empowering Industrial Progress.
          </h1>
          <div className="landing-overview-section-text-bridge">
            <h4>
              At HANINDO BAKTI SEJAHTERA, we specialize in plastic engineering
              solutions, construction services, and industrial support. From
              liner installations for hoppers and silos to comprehensive
              building maintenance, we deliver sustainable solutions with a
              commitment to quality, safety, and long-term partnership.
            </h4>
            <a href="/contact">Contact Us</a>
          </div>
        </div>
        <img src={wallpaper} alt="walpaper-img" />
      </div>
      <div className="landing-experience-section">
        <h4>Our Experience</h4>
        <div className="experience-row">
          <div className="experience-column">
            <div className="experience-card">
              <img src={fabrication} alt="fabrication-icon" />
              <h4>Liner Fabrication & Installation</h4>
            </div>
            <div className="experience-card">
              <img src={supply} alt="supply-icon" />
              <h4>Industrial Equipment Supply</h4>
            </div>
          </div>
          <div className="experience-column">
            <div className="experience-card">
              <img src={anchor} alt="anchor-icon" />
              <h4>Jetty Fender Pad Installation</h4>
            </div>
            <div className="experience-card">
              <img src={building} alt="building-icon" />
              <h4>Building & Industrial Facility Maintenance</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-certificate-section">
        <h4>Our Certificate</h4>
        <div className="certificate-card-carousel">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            speed={4000}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {[
              sertif1,
              sertif2,
              sertif3,
              sertif4,
              sertif5,
              sertif6,
              sertif7,
            ].map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="certificate-img-wrapper">
                  <img
                    src={img}
                    alt={`sertif-${idx}`}
                    className="certificate-img"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="landing-client-section">
        <h4>Our Clients</h4>
        <div className="client-card-carousel">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={3000}
            allowTouchMove={false}
            breakpoints={{
              240: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              720: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1080: {
                slidesPerView: 5,
              },
            }}
          >
            {clients.map((client, idx) => (
              <SwiperSlide key={idx}>
                <a href={client.link} target="_blank" rel="noopener noreferrer">
                  <div className="client-img-wrapper">
                    <img
                      src={client.img}
                      alt={client.alt}
                      className="client-img"
                    />
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
