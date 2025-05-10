import download from "../../assets/download-icon.png";
import arrow from "../../assets/arrow-right-icon.png";
import phone from "../../assets/phone-icon.png";
import mail from "../../assets/mail-icon.png";
import "./Footer.style.css";

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
          barang. Spesialisasi kami adalah plastik engineering, termasuk
          fabrikasi dan pemasangan liner untuk Hopper, Chutu, Dump Truck, dan
          Silo. Kami berkomitmen menjadi penyedia jasa terpercaya untuk
          mendukung kemajuan ekonomi daerah dan nasional.
        </h4>
        <div className="footer-center-center">
          <div className="footer-cc-li">
            <a href="/overview">
              <img src={arrow} alt="" />
              <h4>About</h4>
            </a>
            <a href="/overview">
              <img src={arrow} alt="" />
              <h4>Service</h4>
            </a>
          </div>
          <div className="footer-cc-li">
            <a href="/client">
              <img src={arrow} alt="" />
              <h4>Client</h4>
            </a>
            <a href="/contact">
              <img src={arrow} alt="" />
              <h4>Contact</h4>
            </a>
          </div>
        </div>
        <div className="footer-center-right">
          <h3>Head Office</h3>
          <h4>
            Jl. Kantor Kecamatan Gerogol No. 208 Rawaarum, Gerogol, Cilegon,
            Banten, 42436
          </h4>
          <h4>Phone: 0813-1996-7235</h4>
          <a
            href="https://drive.google.com/file/d/1KzIEwMleM5g78aAjTiUFauCUvGXUAh1n/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={download} alt="download-icon" />
            <h4>Download Company Profile</h4>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <h4>
          Copyright © 2025 PT Hanindo Bakti Sejahtera. All Right Reserved.
        </h4>
      </div>
    </div>
  );
};

export default Footer;
