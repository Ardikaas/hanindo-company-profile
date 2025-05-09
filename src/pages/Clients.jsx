import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import kse from "../assets/krakatau-engineering.png";
import kti from "../assets/krakatau-tirta.png";
import kal from "../assets/krakatau-logistik.png";
import pp from "../assets/pt-pp.png";
import dindikbud from "../assets/dindikbud.png";
import "../style/Client.style.css";

const Clients = () => {
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
  ];
  return (
    <div>
      <Header />
      <div className="clients-container">
        {clients.map((client) => (
          <a href={client.link} target="_blank" rel="noopener noreferrer">
            <div className="client-img-wrapper">
              <img src={client.img} alt={client.alt} className="client-img" />
            </div>
          </a>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Clients;
