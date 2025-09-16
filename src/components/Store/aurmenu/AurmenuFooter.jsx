import { Container, Row, Col } from "react-bootstrap";
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin,
  FaYoutube
} from "react-icons/fa";

export default function AurmenuFooter() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "الصفحة الرئيسية", href: "/" },
    { name: "حول أورمينيو", href: "/aurmenu#about" },
    { name: "المميزات", href: "/aurmenu#features" },
    { name: "الخطط والأسعار", href: "/aurmenu#pricing" },
    { name: "الإضافات", href: "/aurmenu#addons" }
  ];

  const packages = [
    { name: "أورمينيو ستارت", href: "/aurmenu/package/start" },
    { name: "أورمينيو بروجريس", href: "/aurmenu/package/progress" },
    { name: "أورمينيو إكسيلنس", href: "/aurmenu/package/excellence" },
    { name: "أورمينيو بروفيشنال", href: "/aurmenu/package/professional" }
  ];

  const services = [
    { name: "مركز الدعم", href: "/aurmenu/support" },
    { name: "التدريب والتعليم", href: "/aurmenu/training" },
    { name: "الوظائف", href: "/aurmenu/careers" }
  ];

  const contactLinks = [
    { name: "اتصل بنا", href: "/aurmenu/contact/customer" },
    { name: "وكلاء وموزعون", href: "/aurmenu/contact/agents" }
  ];

  return (
    <footer className="aurmenu-footer bg-dark text-light py-5">
      <Container>
        <Row className="g-4">
          {/* Company Info */}
          <Col lg={4} md={6} sm={12}>
            <div className="footer-section">
              <img src="/staging/images/aurmenu-logo.png" width={120} alt="" className="mb-3" />
              <p className="footer-description mb-4">
                نظام إدارة القوائم الذكي الذي يساعد مطعمك على تقديم تجربة مميزة لعملائك 
                وزيادة مبيعاتك من خلال تقنيات متقدمة وواجهة سهلة الاستخدام.
              </p>
              {/* <div className="contact-info">
                <div className="contact-item d-flex align-items-center mb-2">
                  <FaPhone className="me-2" />
                  <span>+966 50 123 4567</span>
                </div>
                <div className="contact-item d-flex align-items-center mb-2">
                  <FaEnvelope className="me-2" />
                  <span>info@aurmenu.com</span>
                </div>
                <div className="contact-item d-flex align-items-center">
                  <FaMapMarkerAlt className="me-2" />
                  <span>الرياض، المملكة العربية السعودية</span>
                </div>
              </div> */}
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6} sm={12}>
            <div className="footer-section">
              <h6 className="footer-subtitle mb-3">روابط سريعة</h6>
              <ul className="aurmenu-footer-links list-unstyled">
                {quickLinks.map((link, index) => (
                  <li key={index} className="mb-2">
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* Packages */}
          <Col lg={2} md={6} sm={12}>
            <div className="footer-section">
              <h6 className="footer-subtitle mb-3">الباقات</h6>
              <ul className=" aurmenu-footer-links list-unstyled">
                {packages.map((pkg, index) => (
                  <li key={index} className="mb-2">
                    <a href={pkg.href} className="footer-link">
                      {pkg.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* Services */}
          <Col lg={2} md={6} sm={12}>
            <div className="footer-section">
              <h6 className="footer-subtitle mb-3">الخدمات</h6>
              <ul className="aurmenu-footer-links list-unstyled">
                {services.map((service, index) => (
                  <li key={index} className="mb-2">
                    <a href={service.href} className="footer-link">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* Contact */}
          <Col lg={2} md={6} sm={12}>
            <div className="footer-section">
              <h6 className="footer-subtitle mb-3">التواصل</h6>
              <ul className="aurmenu-footer-links list-unstyled">
                {contactLinks.map((contact, index) => (
                  <li key={index} className="mb-2">
                    <a href={contact.href} className="footer-link">
                      {contact.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>

        <hr className="my-4" />

        <Row className="align-items-center">
          <Col md={6} sm={12}>
            <div className="footer-bottom licence">
              <p className="mb-0">
                © {currentYear} أورمينيو. جميع الحقوق محفوظة.
              </p>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className="social-links text-md-end">
              <a href="#" className="social-link me-3" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="social-link me-3" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-link me-3" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-link me-3" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
