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

export default function AurestFooter() {
  const currentYear = new Date().getFullYear();

  
const quickLinks = [
  { name: "شاشة المدير", href: "/aurest#manager-screen" },
  { name: "نظام التوصيل", href: "/aurest#delivery-system" },
  { name: "شاشة المطبخ", href: "/aurest#kitchen-screen" },
  { name: "هايبر أورست", href: "/aurest#hyper-aurest" },
  { name: "نظام المناداة والانتظار", href: "/aurest#queue-system" },
  { name: "شاشة الجرد", href: "/aurest#inventory-screen" },
  { name: "كابتن الصالة", href: "/aurest#captain-app" },
  { name: "الخدمة الذاتية", href: "/aurest#self-service" },
  { name: "الطلبات أونلاين", href: "/aurest#online-orders" }
];
  const packages = [
    { name: " هايبر اوريست لايت", href: "/aurmenu/package/start" },
    { name: " هايبر اوريست بيسك", href: "/aurmenu/package/progress" },
    { name: " هابر اوريست برو", href: "/aurmenu/package/excellence" },
    { name: " هايبر اوريست التيمت", href: "/aurmenu/package/professional" }
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
              <img src="/staging/images/aurest-logo.png" width={120} alt="" className="mb-3" />
              <p className="footer-description mb-4">
                نصنع تجربة تحول رقمي أكثر استقراراً وتهيئة لمزيد من التطور، ما يجعلنا نضمن رضا عملائنا الدائم.
              </p>
              
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6} sm={12}>
            <div className="footer-section">
              <h6 className="footer-subtitle mb-3"> الإضافات</h6>
              <ul className="footer-links list-unstyled">
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
              <h6 className="footer-subtitle mb-3">الخدمات</h6>
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
              <h6 className="footer-subtitle mb-3">التواصل</h6>
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
