import "../style/About.style.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ceo from "../assets/ceo-img.png";
import visimage from "../assets/vision-img.png";
import misimage from "../assets/mission-img.png";
import structureBig from "../assets/struktur-big.png";
import structureSmall from "../assets/struktur-small.png";
import aboutBgBig from "../assets/about-bg-big.png";
import aboutBgSmall from "../assets/about-bg-small.png";
import wallpaper from "../assets/wallpaper.png";
import wireLogo from "../assets/wire-logo-hanindo.png";
import logoColor from "../assets/logo-color.png";
import companyColor from "../assets/company-color.png";

const About = () => {
  return (
    <div>
      <Header />
      <div className="about-container">
        <img className="about-bg-big" src={aboutBgBig} alt="about-bg-big" />
        <img
          className="about-bg-small"
          src={aboutBgSmall}
          alt="about-bg-small"
        />
        <div className="about-overview-section">
          <h1>The Foundation of Our Company</h1>
          <div className="about-overview-text">
            <img src={wallpaper} alt="hanindo" />
            <h6>
              Established on June 14, 2023, PT Hanindo Bakti Sejahtera was born
              from a vision to become a trusted and sustainable provider of
              goods and services across multiple industries, with a primary
              focus on the construction, industrial maintenance, and engineering
              sectors. From day one, our company has embraced the mission of
              contributing meaningfully to national development through projects
              that prioritize professionalism, safety, and uncompromising
              quality. More than just a service provider, we position ourselves
              as a collaborative partner, building long term relationships
              founded on integrity and a shared commitment to progress.
              <br />
              <br />
              At the heart of our operations is a deep expertise in plastic
              engineering. We specialize in the fabrication and installation of
              industrial liners, tailored for critical components such as
              hoppers, chutes, dump trucks, and silos. These custom engineered
              liners are designed to enhance equipment performance, reduce
              operational wear, and minimize downtime. Delivering measurable
              value to our clients in heavy industry, mining, and logistics. By
              leveraging high grade materials and precision fabrication, we
              ensure that our solutions meet both functional and safety
              standards, even under the most demanding conditions.
              <br />
              <br />
              Complementing our plastic engineering services is our excellence
              in steel structure works. From building heavy duty steel
              frameworks and industrial warehouses to complex supporting
              structures, our team consistently delivers with structural
              accuracy and reliability. Each project is supported by a thorough
              understanding of engineering principles, project management, and
              regulatory compliance. Our in house capabilities and skilled
              workforce allow us to meet strict deadlines while maintaining the
              flexibility to adapt designs based on client needs and field
              conditions.
              <br />
              <br />
              We take pride in our ability to blend technical proficiency with
              operational efficiency, ensuring that every solution is not only
              robust but also optimized for real world usage. Whether we are
              managing a multi ton steel erection or a delicate liner retrofit
              inside a confined industrial facility, we bring the same level of
              precision, accountability, and innovation. Our approach is deeply
              rooted in problem solving responding to each challenge with
              agility, teamwork, and a drive to exceed expectations.
              <br />
              <br />
              As we grow, PT Hanindo Bakti Sejahtera remains committed to
              becoming a pillar of industrial advancement in Indonesia. Through
              sustainable engineering, ethical business practices, and a
              continuous focus on human capital development, we aim to create
              value not just for our clients but also for the communities and
              environments in which we operate. Our journey is just beginning,
              but our foundation is strong: built on trust, powered by
              expertise, and driven by a passion to shape a better future for
              Indonesian industry.
            </h6>
            <a
              href="https://drive.google.com/file/d/1KzIEwMleM5g78aAjTiUFauCUvGXUAh1n/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Download Company Profile</h4>
            </a>
          </div>
        </div>
        <div className="about-vimision-section">
          <div className="about-vision">
            <img src={visimage} alt="vision-img" />
            <div className="about-vision-right">
              <h1>Our Vision</h1>
              <h6>
                To become a trusted and sustainable provider of goods and
                services across all areas of our business operations, by
                upholding the highest standards of integrity, innovation, and
                excellence. We are committed to continuously improving our
                products and services to meet the evolving needs of our
                customers, building long-term partnerships, and delivering value
                that supports economic growth, social development, and
                environmental sustainability. Through this vision, we aim to be
                a driving force in shaping a better future for the communities
                we serve and the industries we operate in.
              </h6>
            </div>
          </div>
          <div className="about-mission">
            <div className="about-mission-left">
              <h1>Our Mission</h1>
              <h6>
                In alignment with our vision to become a trusted and sustainable
                provider of goods and services, our mission is to continuously
                enhance the long-term value of the company through responsible,
                strategic, and people centered initiatives. We are dedicated to
                fostering sustainable growth, building strong partnerships, and
                empowering human capital, while prioritizing the well-being of
                both our workforce and the environment. This mission is carried
                out through the following key commitments:
                <br />
                <ul>
                  <li>
                    Actively participating in the advancement of regional and
                    national economic development through both small and large
                    scale projects
                  </li>
                  <li>
                    Developing a workforce that is highly competent and deeply
                    committed to its responsibilities
                  </li>
                  <li>
                    Collaborating with business partners to identify and
                    implement effective solutions,
                  </li>
                  <li>
                    Prioritizing the safety and health of workers and the
                    environment without compromising the quality of our work.
                  </li>
                </ul>
              </h6>
            </div>
            <img src={misimage} alt="mission-img" />
          </div>
        </div>
        <div className="about-ceo-section">
          <div className="about-ceo-section-text">
            <div className="about-ceo-section-text-top">
              <h1>Message from Our Director</h1>
              <h6>
                In every project we take on, our goal is simple: to provide real
                value through reliable service, innovation, and a commitment to
                quality. We believe that consistency, integrity, and
                collaboration are the keys to long-term success in any industry.
                Each step we take is grounded in a strong sense of
                responsibility not only to our clients, but also to the
                communities and environment around us.
                <br />
                <br />
                No challenge is too great when faced with the right mindset and
                a strong team. As long as we stay focused, keep learning, and
                move with purpose, we will continue to grow together, stronger,
                and with lasting impact. Because in the end, it's not just about
                achieving results, but how we achieve them that defines who we
                are.
              </h6>
            </div>
            <div className="about-ceo-section-text-bottom">
              <h4>Febry Kurniawan</h4>
              <h6>Direktur Utama PT Hanindo Bakti Sejahtera</h6>
            </div>
          </div>
          <img src={ceo} alt="ceo-img" />
        </div>
        <div className="about-logo-section">
          <h1>The Meaning Behind Our Logo</h1>
          <h6>
            Our logo is more than just a visual identity, it represents the very
            foundation of PT Hanindo Bakti Sejahtera values and purpose.
          </h6>
          <div className="about-logo-top">
            <h6>
              The hexagon, with its six equal sides and angles, is more than
              just a geometric figure it is a symbol of purpose and precision.
              In the context of design philosophy, the hexagon reflects
              perfection, symmetry, and balance. These qualities are not only
              mathematically significant but also deeply meaningful in
              expressing the harmony and beauty that come from structure and
              order. For Hanindo Bakti Sejahtera, the hexagon embodies our
              commitment to deliver dependable solutions through well grounded
              principles and meticulous execution. Just as every side of the
              hexagon is interconnected, our services are designed to support
              one another in forming a unified system built on trust,
              professionalism, and consistency.
              <br />
              <br />
              Beyond its balance, the hexagon is also widely recognized as a
              symbol of strength and durability. In nature, it appears in
              structures like honeycombs, chosen not only for their efficiency
              but for their remarkable strength-to-weight ratio. This natural
              form inspires resilience, reflecting our company's determination
              to remain firm and unwavering in the face of challenges. It serves
              as a visual representation of our enduring mission: to build
              stable, reliable partnerships and deliver long-term value through
              adaptable and sustainable practices. The hexagon, in essence, is
              more than a design choice. it is a statement of who we are and
              what we stand for.
            </h6>
            <img src={wireLogo} alt="wire-logo-hanindo" />
          </div>
          <div className="about-logo-bottom">
            <img src={logoColor} alt="logo-color" className="logo-color" />
            <h6>
              Blue is a color often used in logos to symbolize trust, security,
              and professionalism. It is commonly associated with reliability
              and loyalty, making it a powerful choice for conveying a sense of
              dependability. Blue can evoke a calm, confident presence that
              reinforces the credibility and integrity of a brand.
              <br />
              <br />
              Black, on the other hand, is frequently linked to elegance,
              luxury, and authority. It can also be used to achieve a sense of
              simplicity and clarity. Logos that incorporate black tend to
              emphasize form and contour, resulting in a clean and minimalist
              appearance. This combination of strength and refinement makes
              black a timeless and impactful color choice in branding.
            </h6>
          </div>
          <div className="about-company-bottom">
            <h6>
              Gold represents luxury, wealth, and abundance. A logo featuring
              gold accents can convey a sense of professionalism, reliability,
              and credibility. It reflects a company's commitment to quality,
              expertise, and excellence in service, projecting an image of
              prestige and high standards.
              <br />
              <br />
              Silver symbolizes purity, elegance, and simplicity. Incorporating
              silver into a logo offers a sense of sophistication, calmness, and
              understated refinement. In some cultures, silver is also
              associated with good fortune and prosperity. Using silver in
              branding can reflect the aspiration for success, abundance, and a
              strong, reputable image.
            </h6>
            <img
              src={companyColor}
              alt="company-color"
              className="company-color"
            />
          </div>
          <a
            href="https://drive.google.com/drive/folders/1QNSeQzd1K4obzehIwQ45OmwINRn_rmpY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>Get the Brand Logo</h4>
          </a>
        </div>
        <div className="about-team-section">
          <div className="about-team-section-top">
            <h1>The People Behind Our Success</h1>
            <h6>
              Led by a structured and committed team, our organization moves
              forward with clear roles, strong collaboration, and a shared
              dedication to growth and excellence.
            </h6>
          </div>
          <img
            className="structure-big"
            src={structureBig}
            alt="organization-structure"
          />
          <img
            className="structure-small"
            src={structureSmall}
            alt="organization-structure"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
