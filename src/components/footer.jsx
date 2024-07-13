import React from "react";
import worldMap from "../assets/images/worldMap.png";


const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="footer-box-container">
          <div className="footer-box">
            <h3>our locations</h3>
            <a href="#">
              <i className="fas fa-map-marker-alt"></i> <span className="footer-box-text">Turkiye</span>
            </a>
            <a href="#">
              <i className="fas fa-map-marker-alt"></i> <span className="footer-box-text">UK</span>
            </a>
            <a href="#">
              <i className="fas fa-map-marker-alt"></i> <span className="footer-box-text">Russia</span>
            </a>
            <a href="#">
              <i className="fas fa-map-marker-alt"></i> <span className="footer-box-text">Usa</span>
            </a>
            <a href="#">
              <i className="fas fa-map-marker-alt"></i> <span className="footer-box-text">Japan</span>
            </a>
            <a href="#">
              <i className="fas fa-map-marker-alt"></i> <span className="footer-box-text">Africa</span>
            </a>
          </div>

          <div className="footer-box">
            <h3>quick links</h3>
            <a href="#">
              <i className="fas fa-arrow-right"></i> <span className="footer-box-text">home</span>
            </a>
            <a href="#">
              <i className="fas fa-arrow-right"></i> <span className="footer-box-text">featured</span>
            </a>
            <a href="#">
              <i className="fas fa-arrow-right"></i> <span className="footer-box-text">arrivals</span>
            </a>
            <a href="#">
              <i className="fas fa-arrow-right"></i> <span className="footer-box-text">reviews</span>
            </a>
            <a href="#">
              <i className="fas fa-arrow-right"></i> <span className="footer-box-text">blogs</span>
            </a>
          </div>

          <div className="footer-box">
            <h3>extra links</h3>
            <a href="#">
              <i className="fas fa-arrow-right"></i> <span className="footer-box-text">account info</span>
            </a>
            <a href="#">
              <i className="fas fa-arrow-right"></i> <span className="footer-box-text">ordered items</span>
            </a>
            <a href="#">
              <i className="fas fa-arrow-right"></i> <span className="footer-box-text">privacy policy</span>
            </a>
            <a href="#">
              <i className="fas fa-arrow-right"></i> <span className="footer-box-text">payment method</span>
            </a>
            <a href="#">
              <i className="fas fa-arrow-right"></i> <span className="footer-box-text">our services</span>
            </a>
          </div>

          <div className="footer-box">
            <h3>contact info</h3>
            <a href="#">
              <i className="fas fa-phone"></i> <span className="footer-box-text">+905-456-7890</span>
            </a>
            <a href="#">
              <i className="fas fa-phone"></i> <span className="footer-box-text">+901-456-7890</span>
            </a>
            <a href="#">
              <i className="fas fa-envelope"></i> <span className="footer-box-text">developer.sakir@gmail.com</span>
            </a>
            <img src={worldMap} className="footer-map" alt="world map" />
          </div>
        </div>

        <div className="footer-share">
          <a href="#" className="fab fa-facebook-f"></a>
          <a href="#" className="fab fa-twitter"></a>
          <a href="#" className="fab fa-instagram"></a>
          <a href="#" className="fab fa-linkedin"></a>
          <a href="#" className="fab fa-pinterest"></a>
        </div>

        <div className="footer-credit">
           <span>MyBooks Store</span> | all right reserved!
        </div>
      </section>
    </div>
  );
};

export default Footer;
