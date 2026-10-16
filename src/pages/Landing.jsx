import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LandingSection from "../components/LandingSection/LandingSection";
import { Helmet } from "react-helmet-async";

const Landing = () => {
  return (
    <div>
      <Helmet>
        <title>PT Hanindo Bakti Sejahtera | Official Website</title>
        <meta
          name="description"
          content="PT Hanindo Bakti Sejahtera adalah perusahaan engineering dan jasa industri profesional di bidang konstruksi, perawatan fasilitas, dan fabrikasi."
        />
      </Helmet>
      <Header />
      <LandingSection />
      <Footer />
    </div>
  );
};

export default Landing;
