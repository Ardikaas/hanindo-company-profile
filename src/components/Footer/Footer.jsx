import download from "../../assets/download-icon.png";
import arrow from "../../assets/arrow-right-icon.png";
import phone from "../../assets/phone-icon.png";
import mail from "../../assets/mail-icon.png";
import "./Footer.style.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-top-item">
          <img src={mail} alt="mail-icon" />
          <h4>cs@hanindobakti.com</h4>
        </div>
        <div className="footer-top-item">
          <img src={phone} alt="phone-icon" />
          <h4>0813-1996-7235</h4>
        </div>
      </div>
      <div className="footer-center">
        <h4>
          PT. Hanindo Bakti Sejahtera adalah perusahaan yang bergerak di bidang
          konstruksi, perawatan gedung, pengolahan industri, dan pengadaan
          barang. Kami memiliki spesialisasi dalam plastic engineering, termasuk
          fabrikasi dan pemasangan liner untuk Hopper, Chute, Dump Truck, dan
          Silo. Selain itu, kami juga unggul dalam pengerjaan steel structure
          untuk berbagai kebutuhan industri, mulai dari pembangunan rangka baja,
          warehouse, hingga struktur penunjang lainnya. Dengan pengalaman dan
          keahlian teknis yang mumpuni, kami berkomitmen menjadi mitra
          terpercaya dalam mendukung kemajuan ekonomi di tingkat daerah maupun
          nasional.
        </h4>
        <div className="footer-center-center">
          <div className="footer-cc-li">
            <Link to="/about">
              <img src={arrow} alt="" />
              <h4>About</h4>
            </Link>
            <Link to="/services">
              <img src={arrow} alt="" />
              <h4>Services</h4>
            </Link>
          </div>
          <div className="footer-cc-li">
            <Link to="/client">
              <img src={arrow} alt="" />
              <h4>Client</h4>
            </Link>
            <Link to="/portfolio">
              <img src={arrow} alt="" />
              <h4>Portfolio</h4>
            </Link>
            <Link to="/contact">
              <img src={arrow} alt="" />
              <h4>Contact</h4>
            </Link>
          </div>
        </div>
        <div className="footer-center-right">
          <h3>Head Office</h3>
          <h4>
            Jl. Kantor Kecamatan Gerogol No. 208 Rawaarum, Gerogol, Cilegon,
            Banten, 42436
          </h4>
          <h4>Phone: 0813-1996-7235</h4>
          <Link
            to="https://drive.google.com/file/d/1ngO9jx8NL9hWyiek0fVNH8aP6KJfIPIM/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={download} alt="download-icon" />
            <h4>Download Company Profile</h4>
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <h4>
          Copyright © 2025 PT Hanindo Bakti Sejahtera. All Right Reserved.
        </h4>
        <Link to="/admin">admin</Link>
      </div>
    </div>
  );
};

export default Footer;
