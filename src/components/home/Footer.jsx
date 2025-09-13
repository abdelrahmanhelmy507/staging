import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn,
  FaShoppingCart ,
  FaChevronUp
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setShow(true);   
      } else {
        setShow(false);  
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = () => {
    window.scrollTo(0 , 0);
  };

  return (
    <footer className="footer py-5">
      <Container>
        {/* Newsletter Subscription Section */}
        <Row>
          <Col lg={6} md={12} sm={12} >
            <div className="newsletter-section d-flex">
              <div>
                <h3 className="newsletter-title mb-2">{t("اشترك في نشرتنا البريدية الان")}</h3>
                <p className="newsletter-desc mb-4">{t("سوف نرسل لك بريدا واحد في الاسبوع لن نقوم بازعاجك")}</p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} >
            <div className="newsletter-form d-flex gap-3">
              <Form.Control 
                type="email" 
                placeholder={t("ادخل بريدك الالكتروني للاشتراك")} 
                className="newsletter-input"
              />
              <Button className="newsletter-btn">{t("اشترك")}</Button>
            </div>
          </Col>
        </Row>

        {/* Main Footer Content */}
        <Row className="footer-content py-5">
          {/* Brand Column */}
          <Col lg={3} md={6} className="mb-4">
            <div className="brand-section">
              <img src="/staging/images/AuragesLogo.png" alt="" width={100}/>
              <p className="brand-tagline mt-2">{t("تخطى الحدود واعبر افاق التطور")}</p>
            </div>
          </Col>

          {/* Store Column */}
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-column">
              <h5 className="footer-column-title">{t("المتجر")}</h5>
              <ul className="footer-links">
                <li><a href="#">{t("متجر الاجهزة والمعدات")}</a></li>
                <li><a href="#">{t("أوربوس")}</a></li>
                <li><a href="#">{t("أورست")}</a></li>
                <li><a href="#">{t("أورمنيو")}</a></li>
              </ul>
            </div>
          </Col>

          {/* Cyber Security Column */}
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-column">
              <h5 className="footer-column-title">{t("الأمن السيبراني")}</h5>
              <ul className="footer-links">
                <li><a href="#">{t("شهادات SSL")}</a></li>
                <li><a href="#">{t("أمن موقعك الالكتروني")}</a></li>
                <li><a href="#">{t("النسخ الاحتياطي للمواقع الالكتروني")}</a></li>
                <li><a href="#">{t("النسخ الاحتياطي (acronis)")}</a></li>
              </ul>
            </div>
          </Col>

          {/* Solutions Column */}
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-column">
              <h5 className="footer-column-title">{t("الحلول")}</h5>
              <ul className="footer-links">
                <li><a href="#">{t("باقات الدعم الفني المتقدم")}</a></li>
                <li><a href="#">{t("تصميم وتطوير المواقع")}</a></li>
                <li><a href="#">{t("التصميم الغرافيكي")}</a></li>
                <li><a href="#">{t("البرمجة المخصصة")}</a></li>
              </ul>
            </div>
          </Col>

          {/* Knowledge Base Column */}
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-column">
              <h5 className="footer-column-title">{t("قاعدة المعرفة")}</h5>
              <ul className="footer-links">
                <li><a href="#">{t("أوريجس")}</a></li>
                <li><a href="#">{t("أوربوس")}</a></li>
                <li><a href="#">{t("أورست")}</a></li>
                <li><a href="#">{t("أورمنيو")}</a></li>
              </ul>
            </div>
          </Col>

          {/* Help Column */}
          <Col lg={1} md={6} className="mb-4">
            <div className="footer-column">
              <h5 className="footer-column-title">{t("المساعدة")}</h5>
              <ul className="footer-links">
                <li><a href="#">{t("حجز موعد تواصل")}</a></li>
                <li><a href="#">{t("المدونة")}</a></li>
                <li><a href="#">{t("مركز الدعم")}</a></li>
              </ul>
            </div>
          </Col>
        </Row>

        {/* Bottom Footer Bar */}
        <div className="footer-bottom">
          <div className="footer-separator mb-4"></div>
          <Row className="bottom">
            <Col md={6} className="text-md-start mb-3 mb-md-0">
              <div className="social-icons">
                <a href="#" className="social-icon"><FaFacebookF /></a>
                <a href="#" className="social-icon"><FaInstagram /></a>
                <a href="#" className="social-icon"><FaTwitter /></a>
                <a href="#" className="social-icon"><FaLinkedinIn /></a>
              </div>
            </Col>
            <Col md={6} className="text-md-end" dir="ltr">
              <div className="legal-links">
                <Link to="/privacypolicy" className="legal-link">{t("سياسة الخصوصية")}</Link>
                <span className="mx-3">|</span>
                <Link to="/LegalAgreement" className="legal-link">{t("اتفاق قانوني")}</Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Floating Elements */}
      {show && (
        <div className="floating-elements">
          {/* Scroll to Top Button */}
          <button className="scroll-top-btn" onClick={() => scroll()}>
            <FaChevronUp />
          </button>
          
          {/* Shopping Cart */}
          <div className="shopping-cart">
            <div className="cart-badge">
              <span>0</span> <FaShoppingCart /> 
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
