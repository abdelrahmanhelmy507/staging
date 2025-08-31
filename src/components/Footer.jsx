import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn,
  FaShoppingCart,
  FaChevronUp
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        {/* Newsletter Subscription Section */}
        <div className="newsletter-section text-center py-5">
          <h3 className="newsletter-title mb-2">اشترك في نشرتنا البريدية الان</h3>
          <p className="newsletter-desc mb-4">سوف نرسل لك بريدا واحد في الاسبوع لن نقوم بازعاجك</p>
          <div className="newsletter-form d-flex justify-content-center gap-3">
            <Form.Control 
              type="email" 
              placeholder="ادخل بريدك الالكتروني للاشتراك" 
              className="newsletter-input"
            />
            <Button className="newsletter-btn">اشترك</Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <Row className="footer-content py-5">
          {/* Brand Column */}
          <Col lg={3} md={6} className="mb-4">
            <div className="brand-section">
              <h4 className="brand-logo mb-3">aurages</h4>
              <p className="brand-tagline">تخطى الحدود واعبر افاق التطور</p>
            </div>
          </Col>

          {/* Store Column */}
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-column">
              <h5 className="footer-column-title">المتجر</h5>
              <ul className="footer-links">
                <li><a href="#">متجر الاجهزة والمعدات</a></li>
                <li><a href="#">أوربوس</a></li>
                <li><a href="#">أورست</a></li>
                <li><a href="#">أورمنيو</a></li>
              </ul>
            </div>
          </Col>

          {/* Cyber Security Column */}
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-column">
              <h5 className="footer-column-title">الأمن السيبراني</h5>
              <ul className="footer-links">
                <li><a href="#">شهادات SSL</a></li>
                <li><a href="#">أمن موقعك الالكتروني</a></li>
                <li><a href="#">النسخ الاحتياطي للمواقع الالكتروني</a></li>
                <li><a href="#">النسخ الاحتياطي (acronis)</a></li>
              </ul>
            </div>
          </Col>

          {/* Solutions Column */}
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-column">
              <h5 className="footer-column-title">الحلول</h5>
              <ul className="footer-links">
                <li><a href="#">باقات الدعم الفني المتقدم</a></li>
                <li><a href="#">تصميم وتطوير المواقع</a></li>
                <li><a href="#">التصميم الغرافيكي</a></li>
                <li><a href="#">البرمجة المخصصة</a></li>
              </ul>
            </div>
          </Col>

          {/* Knowledge Base Column */}
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-column">
              <h5 className="footer-column-title">قاعدة المعرفة</h5>
              <ul className="footer-links">
                <li><a href="#">أوريجس</a></li>
                <li><a href="#">أوربوس</a></li>
                <li><a href="#">أورست</a></li>
                <li><a href="#">أورمنيو</a></li>
              </ul>
            </div>
          </Col>

          {/* Help Column */}
          <Col lg={1} md={6} className="mb-4">
            <div className="footer-column">
              <h5 className="footer-column-title">المساعدة</h5>
              <ul className="footer-links">
                <li><a href="#">حجز موعد تواصل</a></li>
                <li><a href="#">المدونة</a></li>
                <li><a href="#">مركز الدعم</a></li>
              </ul>
            </div>
          </Col>
        </Row>

        {/* Bottom Footer Bar */}
        <div className="footer-bottom">
          <div className="footer-separator mb-4"></div>
          <Row className="align-items-center">
            <Col md={6} className="text-md-start text-center mb-3 mb-md-0">
              <div className="social-icons">
                <a href="#" className="social-icon"><FaFacebookF /></a>
                <a href="#" className="social-icon"><FaInstagram /></a>
                <a href="#" className="social-icon"><FaTwitter /></a>
                <a href="#" className="social-icon"><FaLinkedinIn /></a>
              </div>
            </Col>
            <Col md={6} className="text-md-end text-center">
              <div className="legal-links">
                <a href="#" className="legal-link">سياسة الخصوصية</a>
                <span className="mx-3">|</span>
                <a href="#" className="legal-link">اتفاق قانوني</a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Floating Elements */}
      <div className="floating-elements">
        {/* Scroll to Top Button */}
        <button className="scroll-top-btn">
          <FaChevronUp />
        </button>
        
        {/* Shopping Cart */}
        <div className="shopping-cart">
          <FaShoppingCart />
          <span className="cart-badge">0</span>
        </div>
      </div>
    </footer>
  );
}




