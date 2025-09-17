import { Container, Row, Col } from "react-bootstrap";
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin,
  FaYoutube
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function AuraccFooter() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const packages = [
    { name: t("المواصفات الفنية"), href: "/aurmenu/package/start" }
  ];

  const services = [
    { name: t("مركز الدعم"), href: "/aurmenu/support" },
    { name: t("التدريب والتعليم"), href: "/aurmenu/training" },
    { name: t("الوظائف"), href: "/aurmenu/careers" }
  ];

  const contactLinks = [
    { name: t("اتصل بنا"), href: "/aurmenu/contact/customer" },
    { name: t("وكلاء وموزعون"), href: "/aurmenu/contact/agents" }
  ];

  return (
    <footer className="aurmenu-footer bg-dark text-light py-5">
      <Container>
        <Row className="g-4">
          <Col lg={4} md={6} sm={12}>
            <div className="footer-section">
              <img src="/staging/images/auracc-logo.png" width={120} alt="" className="mb-3" />
              <p className="footer-description mb-4">
                {t("نصنع تجربة تحول رقمي أكثر استقراراً وتهيئة لمزيد من التطور، ما يجعلنا نضمن رضا عملائنا الدائم.")}
              </p>
            </div>
          </Col>

          {/* Packages */}
          <Col lg={2} md={6} sm={12}>
            <div className="footer-section">
              <h6 className="footer-subtitle mb-3">{t("الباقات")}</h6>
              <ul className="footer-links list-unstyled">
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
              <h6 className="footer-subtitle mb-3">{t("الخدمات")}</h6>
              <ul className="footer-links list-unstyled">
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
              <h6 className="footer-subtitle mb-3">{t("التواصل")}</h6>
              <ul className="footer-links list-unstyled">
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
                © {currentYear} {t("أوراك")}. {t("جميع الحقوق محفوظة")}
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
