import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { 
  FaRocket, 
  FaStar, 
  FaGem, 
  FaCrown 
} from "react-icons/fa";

export default function AurmenuPackagesHeader() {
  const navigate = useNavigate();

  const packages = [
    {
      id: "start",
      title: "أورمينيو ستارت",
      subtitle: "الحل المثالي للبدء",
      price: "33.25",
      currency: "دولار",
      icon: <FaRocket />,
      color: "primary",
      description: "مثالي للمطاعم الصغيرة والمقاهي"
    },
    {
      id: "progress",
      title: "أورمينيو بروجريس",
      subtitle: "للمطاعم المتوسطة",
      price: "50",
      currency: "دولار",
      icon: <FaStar />,
      color: "success",
      description: "ميزات متقدمة للمطاعم المتوسطة"
    },
    {
      id: "excellence",
      title: "أورمينيو إكسيلنس",
      subtitle: "للتميز في الخدمة",
      price: "83.25",
      currency: "دولار",
      icon: <FaGem />,
      color: "warning",
      description: "حل شامل للمطاعم الكبيرة"
    },
    {
      id: "professional",
      title: "أورمينيو بروفيشنال",
      subtitle: "الحل الشامل والمتكامل",
      price: "100",
      currency: "دولار",
      icon: <FaCrown />,
      color: "danger",
      description: "النظام الأكثر شمولية"
    }
  ];

  const handlePackageClick = (packageId) => {
    navigate(`/aurmenu/package/${packageId}`);
  };

  return (
    <section className="aurmenu-packages-header py-4">
      <Container>
        <div className="text-center mb-4">
          <h2 className="packages-title">خطط أورمينيو</h2>
          <p className="packages-subtitle">اختر الخطة المناسبة لمطعمك</p>
        </div>
        
        <Row className="g-3">
          {packages.map((pkg) => (
            <Col lg={3} md={6} sm={12} key={pkg.id}>
              <div 
                className={`package-card package-${pkg.color}`}
                onClick={() => handlePackageClick(pkg.id)}
              >
                <div className="package-icon">
                  {pkg.icon}
                </div>
                <div className="package-info">
                  <h5 className="package-name">{pkg.title}</h5>
                  <p className="package-subtitle">{pkg.subtitle}</p>
                  <div className="package-price">
                    <span className="price">{pkg.price}</span>
                    <span className="currency"> {pkg.currency}</span>
                  </div>
                  <p className="package-description">{pkg.description}</p>
                </div>
                <Button 
                  variant={pkg.color} 
                  size="sm" 
                  className="package-btn"
                >
                  عرض التفاصيل
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

