import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContentState from "../components/ContentState";
import Pagination from "../components/Pagination";
import useResource from "../hooks/useResource";
import { mediaUrl } from "../lib/api";
import { Helmet } from "react-helmet-async";
import "../style/Client.style.css";

const defaultClients = [
  {
    _id: "1",
    title: "PT Krakatau Engineering",
    description:
      "PT Krakatau Engineering was establish October 12, 1988, the scope of services as engineering and design company serving projects in PT Krakatau Steel & Group, particularly the expansion of plant facilities and infrastructures of PT Krakatau Steel, along with increased competence and experience, PT Krakatau Engineering grow as a reliable ...",
    image: "asset:krakatau-engineering.png",
    link: "https://www.krakataueng.co.id/",
  },
  {
    _id: "2",
    title: "PT Krakatau Tirta Industri",
    description:
      "In 1978, PT Krakatau Steel (Persero) Tbk operated a Water Purification Unit, a supporting unit for operational activities to provide clean water which was the forerunner of PT Krakatau Tirta Industri. On February 28, 1996, the supporting unit was autonomous and established as a limited liability company named PT Krakatau Tirta Industri with PT Krakatau Steel (Persero) ...",
    image: "asset:krakatau-tirta.png",
    link: "https://www.krakatautirta.co.id/",
  },
  {
    _id: "3",
    title: "PT Krakatau Argo Logistics",
    description:
      "PT. Krakatau Argo Logistics established in 2013, working in the field of the first Multimoda transportation business service in Indonesia that serves the transportation of land, sea, and air with the permission of Ministry of Transportation No. KM 86 2019 and No. KM 168 2019 for Multimoda ASEAN. At first, PT. Krakatau Argo Logistics focused on serving ...",
    image: "asset:krakatau-logistik.png",
    link: "https://krakatau-argologistics.com/",
  },
  {
    _id: "4",
    title: "PT PP",
    description:
      "PT PP (Persero) Tbk is a State-Owned Enterprise (SOE) established on August 26, 1953, operating in the fields of Construction (buildings, civil/infrastructure, EPC, specialty projects, plants, and equipment) and Investment (infrastructure, property, and energy). The majority shareholder of PT PP is the Government of the Republic of Indonesia ...",
    image: "asset:pt-pp.png",
    link: "https://www.ptpp.co.id/",
  },
  {
    _id: "5",
    title: "DINDIKBUD Provinsi Banten",
    description:
      "The development process in Banten Province is carried out across all sectors, one of which is the education sector. This is coordinated through the Banten Provincial Education Office, which is led by a Head of Department who operates under and is accountable to ...",
    image: "asset:dindikbud.png",
    link: "https://dindikbud.bantenprov.go.id/",
  },
  {
    _id: "6",
    title: "PT Seven Gates Indonesia",
    description:
      "PT Seven Gates Indonesia (SGI) has been established for more than 15 years. Administering reclamation projects and sea sand supplies for many reclamation projects in Indonesia, SGI has become one of the leading reclamation companies in Indonesia. Our journey has been a success story that reflects a strong ...",
    image: "asset:sevengates.png",
    link: "https://www.sevengates.co.id/",
  },
  {
    _id: "7",
    title: "PT Jurong Engineering Lestari",
    description:
      "JEL is a leading engineering and construction company based in Singapore. Since inception in 1971, JEL has reliably delivered successful projects in power & industrial plants in more than 30 countries. Today, JEL has an international network of ...",
    image: "asset:jurong-lestari.png",
    link: "https://jel.com.sg/",
  },
  {
    _id: "8",
    title: "PT Kokoh Semesta",
    description:
      "Started as a construction company for field fabrication & erection of storage tanks, building structures & related civil work, we have looked forward for the necessity for our own workshop wherein we can control quality & time schedule better. In the span of twenty years from 1989 to 2010 we have transformed ourselves into a distinguished ...",
    image: "asset:kokoh-semesta.png",
    link: "https://www.kokohsemesta.com/",
  },
];

export default function Clients() {
  const [page, setPage] = useState(1);
  const resource = useResource("/content/client?page=" + page);
  const clientList = resource.data?.length ? resource.data : defaultClients;

  return (
    <div>
      <Helmet>
        <title>Our Clients | PT Hanindo Bakti Sejahtera</title>
        <meta
          name="description"
          content="Discover our trusted partners and clients across various industries that PT Hanindo Bakti Sejahtera has worked with."
        />
      </Helmet>
      <Header />
      <main className="clients-container">
        <h1>Who We Work With</h1>
        {resource.loading && <ContentState resource={resource} />}
        <div className="public-content-grid">
          {clientList.map((item) => (
            <article className="client-card" key={item._id}>
              <img src={mediaUrl(item.image)} alt={item.title} loading="lazy" />
              <div className="client-card-right">
                <h1>{item.title}</h1>
                <h6>{item.description}</h6>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    Visit website ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        {resource.meta && (
          <Pagination meta={resource.meta} page={page} onChange={setPage} />
        )}
      </main>
      <Footer />
    </div>
  );
}
