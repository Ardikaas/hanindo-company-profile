import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import kse from "../assets/krakatau-engineering.png";
import kti from "../assets/krakatau-tirta.png";
import kal from "../assets/krakatau-logistik.png";
import sgi from "../assets/sevengates.png";
import pp from "../assets/pt-pp.png";
import ks from "../assets/kokoh-semesta.png";
import jel from "../assets/jurong-lestari.png";
import dindikbud from "../assets/dindikbud.png";
import "../style/Client.style.css";

const Clients = () => {
  return (
    <div>
      <Header />
      <div className="clients-container">
        <div className="clients-card-row">
          <div className="client-card">
            <img src={kse} alt="krakatau-engineering" />
            <div className="client-card-right">
              <h1>PT Krakatau Engineering</h1>
              <h6>
                PT Krakatau Engineering was establish October 12, 1988, the
                scope of services as engineering and design company serving
                projects in PT Krakatau Steel & Group, particularly the
                expansion of plant facilities and infrastructures of PT Krakatau
                Steel, along with increased competence and experience, PT
                Krakatau Engineering grow as a reliable ...
              </h6>
              <a
                href="https://www.krakataueng.co.id/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more.
              </a>
            </div>
          </div>
          <div className="client-card">
            <img src={kti} alt="krakatau-tirta" />
            <div className="client-card-right">
              <h1>PT Krakatau Tirta Industri</h1>
              <h6>
                In 1978, PT Krakatau Steel (Persero) Tbk operated a Water
                Purification Unit, a supporting unit for operational activities
                to provide clean water which was the forerunner of PT Krakatau
                Tirta Industri. On February 28, 1996, the supporting unit was
                autonomous and established as a limited liability company named
                PT Krakatau Tirta Industri with PT Krakatau Steel (Persero) ...
              </h6>
              <a
                href="https://www.krakatautirta.co.id/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more.
              </a>
            </div>
          </div>
        </div>
        <div className="clients-card-row">
          <div className="client-card">
            <img src={kal} alt="krakatau-logistik" />
            <div className="client-card-right">
              <h1>PT Krakatau Argo Logistics</h1>
              <h6>
                PT. Krakatau Argo Logistics established in 2013, working in the
                field of the first Multimoda transportation business service in
                Indonesia that serves the transportation of land, sea, and air
                with the permission of Ministry of Transportation No. KM 86 2019
                and No. KM 168 2019 for Multimoda ASEAN. At first, PT. Krakatau
                Argo Logistics focused on serving ...
              </h6>
              <a
                href="https://krakatau-argologistics.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more.
              </a>
            </div>
          </div>
          <div className="client-card">
            <img src={pp} alt="pt-pp" />
            <div className="client-card-right">
              <h1>PT PP</h1>
              <h6>
                PT PP (Persero) Tbk is a State-Owned Enterprise (SOE)
                established on August 26, 1953, operating in the fields of
                Construction (buildings, civil/infrastructure, EPC, specialty
                projects, plants, and equipment) and Investment (infrastructure,
                property, and energy). The majority shareholder of PT PP is the
                Government of the Republic of Indonesia ...
              </h6>
              <a
                href="https://www.ptpp.co.id/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more.
              </a>
            </div>
          </div>
        </div>
        <div className="clients-card-row">
          <div className="client-card">
            <img src={dindikbud} alt="dindikbud" />
            <div className="client-card-right">
              <h1>DINDIKBUD Provinsi Banten</h1>
              <h6>
                The development process in Banten Province is carried out across
                all sectors, one of which is the education sector. This is
                coordinated through the Banten Provincial Education Office,
                which is led by a Head of Department who operates under and is
                accountable to ...
              </h6>
              <a
                href="https://dindikbud.bantenprov.go.id/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more.
              </a>
            </div>
          </div>
          <div className="client-card">
            <img src={sgi} alt="seven-gates-indonesia" />
            <div className="client-card-right">
              <h1>PT Seven Gates Indonesia</h1>
              <h6>
                PT Seven Gates Indonesia (SGI) has been established for more
                than 15 years. Administering reclamation projects and sea sand
                supplies for many reclamation projects in Indonesia, SGI has
                become one of the leading reclamation companies in Indonesia.
                Our journey has been a success story that reflects a strong ...
              </h6>
              <a
                href="https://www.sevengates.co.id/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more.
              </a>
            </div>
          </div>
        </div>
        <div className="clients-card-row">
          <div className="client-card">
            <img src={jel} alt="jurong-engineering-lestari" />
            <div className="client-card-right">
              <h1>PT Jurong Engineering Lestari</h1>
              <h6>
                JEL is a leading engineering and construction company based in
                Singapore. Since inception in 1971, JEL has reliably delivered
                successful projects in power & industrial plants in more than 30
                countries. Today, JEL has an international network of ...
              </h6>
              <a
                href="https://jel.com.sg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more.
              </a>
            </div>
          </div>
          <div className="client-card">
            <img src={ks} alt="kokoh-semesta" />
            <div className="client-card-right">
              <h1>PT Kokoh Semesta</h1>
              <h6>
                Started as a construction company for field fabrication &
                erection of storage tanks, building structures & related civil
                work, we have looked forward for the necessity for our own
                workshop wherein we can control quality & time schedule better.
                In the span of twenty years from 1989 to 2010 we have
                transformed ourselves into a distinguished ...
              </h6>
              <a
                href="https://www.kokohsemesta.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more.
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Clients;
