import { Container, Row, Col, Button, Card, Badge, Table } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { 
  FaArrowLeft, 
  FaCheck, 
  FaTimes, 
  FaStar, 
  FaShoppingCart, 
  FaPhone,
  FaEnvelope,
  FaCrown,
  FaRocket,
  FaGem,
  FaAward
} from "react-icons/fa";

export default function PackagePage() {
  const { packageId } = useParams();
  const navigate = useNavigate();

  const packages = {
    "start": {
      title: "أورمينيو ستارت",
      subtitle: "الحل المثالي للبدء",
      price: "33.25",
      currency: "دولار",
      period: "شهرياً",
      badge: "الأكثر شعبية",
      icon: <FaRocket />,
      color: "primary",
      description: "باقة أورمينيو ستارت مثالية للمطاعم الصغيرة والمقاهي التي تريد البدء في رحلة التحول الرقمي. تشمل جميع الميزات الأساسية لإدارة قوائمك بكفاءة.",
      features: [
        "طلبات متعددة الأقسام (Take-away)",
        "طلبات التوصيل",
        "قائمة منتجات مع فئات ومجموعات متعددة",
        "شاشة العملاء",
        "طرق دفع متعددة",
        "تقرير البائع",
        "تقرير القيمة المضافة",
        "إدارة نقاط البيع (POS Management)",
        "إدارة الأقسام",
        "إدارة قوائم المنتجات",
        "إدارة التصنيفات والمجموعات",
        "إدارة شاشة العملاء",
        "إدارة تقارير المبيعات عبر الويب",
        "التقارير الإحصائية",
        "التقارير التحليلية",
        "التقارير الرسومية",
        "نظام تتبع",
        "دعم فني 24/7"
      ],
      limitations: [
        "لا يشمل الطلبات الداخلية",
        "لا يشمل نظام الحجوزات",
        "لا يشمل إدارة العملاء"
      ],
      recommendedFor: "المطاعم الصغيرة والمقاهي"
    },
    "progress": {
      title: "أورمينيو بروجريس",
      subtitle: "للمطاعم المتوسطة",
      price: "50",
      currency: "دولار",
      period: "شهرياً",
      badge: "الأفضل قيمة",
      icon: <FaStar />,
      color: "success",
      description: "باقة أورمينيو بروجريس مصممة للمطاعم المتوسطة التي تحتاج إلى ميزات أكثر تقدماً. تشمل جميع ميزات ستارت بالإضافة إلى الطلبات الداخلية وإدارة الطاولات.",
      features: [
        "جميع ميزات باقة ستارت",
        "طلبات داخلية (Dine-In)",
        "جدولة الطاولات",
        "إدارة طرق الدفع",
        "إدارة تطبيقات التيك أواي",
        "إدارة الطلبات الداخلية والطاولات",
        "إدارة التوصيل",
        "أنظمة العروض",
        "تقارير إحصائية متقدمة",
        "تقارير تحليلية متقدمة",
        "تقارير رسومية متقدمة"
      ],
      limitations: [
        "لا يشمل نظام الحجوزات",
        "لا يشمل إدارة العملاء المتقدمة"
      ],
      recommendedFor: "المطاعم المتوسطة"
    },
    "excellence": {
      title: "أورمينيو إكسيلنس",
      subtitle: "للتميز في الخدمة",
      price: "83.25",
      currency: "دولار",
      period: "شهرياً",
      badge: "متقدم",
      icon: <FaGem />,
      color: "warning",
      description: "باقة أورمينيو إكسيلنس للمطاعم التي تريد التميز في خدمة العملاء. تشمل جميع الميزات السابقة بالإضافة إلى إدارة العملاء ونظام الحجوزات.",
      features: [
        "جميع ميزات باقة بروجريس",
        "إدارة العملاء",
        "نظام الحجوزات",
        "تقارير متقدمة",
        "إدارة المشتريات",
        "إدارة المخزون",
        "إدارة استهلاك المواد الأولية",
        "إدارة التوريدات",
        "دعم مباشر"
      ],
      limitations: [
        "لا يشمل نظام الولاء والنقاط"
      ],
      recommendedFor: "المطاعم الكبيرة والمتخصصة"
    },
    "professional": {
      title: "أورمينيو بروفيشنال",
      subtitle: "الحل الشامل والمتكامل",
      price: "100",
      currency: "دولار",
      period: "شهرياً",
      badge: "الأكثر شمولية",
      icon: <FaCrown />,
      color: "danger",
      description: "باقة أورمينيو بروفيشنال هي الحل الشامل والمتكامل للمطاعم الكبيرة والمؤسسات التي تحتاج إلى نظام إدارة متكامل. تشمل جميع الميزات المتقدمة.",
      features: [
        "جميع ميزات باقة إكسيلنس",
        "نظام الولاء والنقاط",
        "بطاقات الخصم (Debit Cards)",
        "التقارير المتقدمة",
        "إدارة المصروفات",
        "المتابعة المحاسبية",
        "المحاسبة والمخازن",
        "الربط مع نظام ERP Auracc",
        "الإشراف المالي",
        "إدارة المخازن",
        "دعم مباشر مخصص"
      ],
      limitations: [],
      recommendedFor: "المطاعم الكبيرة والسلاسل"
    }
  };

  const packageData = packages[1];

  if (!packageData) {
    return (
      <Container className="py-5 my-5">
        <div className="text-center">
          <h2>الباقة غير موجودة</h2>
          <Button variant="primary" onClick={() => navigate('/aurmenu')}>
            العودة للصفحة الرئيسية
          </Button>
        </div>
      </Container>
    );
  }

  const comparisonData = [
    { feature: "طلبات متعددة الأقسام", start: true, progress: true, excellence: true, professional: true },
    { feature: "طلبات التوصيل", start: true, progress: true, excellence: true, professional: true },
    { feature: "طلبات داخلية", start: false, progress: true, excellence: true, professional: true },
    { feature: "جدولة الطاولات", start: false, progress: true, excellence: true, professional: true },
    { feature: "إدارة العملاء", start: false, progress: false, excellence: true, professional: true },
    { feature: "نظام الحجوزات", start: false, progress: false, excellence: true, professional: true },
    { feature: "نظام الولاء والنقاط", start: false, progress: false, excellence: false, professional: true },
    { feature: "المحاسبة المتقدمة", start: false, progress: false, excellence: false, professional: true },
    { feature: "الربط مع ERP", start: false, progress: false, excellence: false, professional: true }
  ];

  return (
    <div className="package-page py-5">
      <Container>
        <Row>
          <Col lg={12}>
            <Button 
              variant="outline-secondary" 
              onClick={() => navigate('/aurmenu')}
              className="mb-4"
            >
              <FaArrowLeft className="me-2" />
              العودة لأورمينيو
            </Button>
          </Col>
        </Row>

        <Row className="g-4">
          {/* Package Header */}
          <Col lg={12}>
            <Card className={`package-header bg-${packageData.color} text-white`}>
              <Card.Body className="text-center">
                <div className="package-icon mb-3">
                  {packageData.icon}
                </div>
                <h1 className="package-title">{packageData.title}</h1>
                <p className="package-subtitle">{packageData.subtitle}</p>
                {packageData.badge && (
                  <Badge bg="light" text="dark" className="package-badge">
                    {packageData.badge}
                  </Badge>
                )}
                <div className="package-price mt-4">
                  <span className="price-amount">{packageData.price}</span>
                  <span className="price-currency"> {packageData.currency}</span>
                  <span className="price-period"> / {packageData.period}</span>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Package Description */}
          <Col lg={8} md={12}>
            <Card className="mb-4">
              <Card.Header>
                <h3>وصف الباقة</h3>
              </Card.Header>
              <Card.Body>
                <p className="package-description">{packageData.description}</p>
                <div className="recommended-for">
                  <strong>موصى به لـ:</strong> {packageData.recommendedFor}
                </div>
              </Card.Body>
            </Card>

            {/* Features */}
            <Card className="mb-4">
              <Card.Header>
                <h3>المميزات المتضمنة</h3>
              </Card.Header>
              <Card.Body>
                <Row>
                  {packageData.features.map((feature, index) => (
                    <Col md={6} sm={12} key={index}>
                      <div className="feature-item d-flex align-items-center mb-3">
                        <FaCheck className="text-success me-3" />
                        <span>{feature}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>

            {/* Limitations */}
            {packageData.limitations.length > 0 && (
              <Card className="mb-4">
                <Card.Header>
                  <h3>المميزات غير المتضمنة</h3>
                </Card.Header>
                <Card.Body>
                  <Row>
                    {packageData.limitations.map((limitation, index) => (
                      <Col md={6} sm={12} key={index}>
                        <div className="limitation-item d-flex align-items-center mb-3">
                          <FaTimes className="text-danger me-3" />
                          <span>{limitation}</span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            )}

            {/* Comparison Table */}
            <Card>
              <Card.Header>
                <h3>مقارنة الباقات</h3>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>الميزة</th>
                        <th className="text-center">ستارت</th>
                        <th className="text-center">بروجريس</th>
                        <th className="text-center">إكسيلنس</th>
                        <th className="text-center">بروفيشنال</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.feature}</td>
                          <td className="text-center">
                            {row.start ? <FaCheck className="text-success" /> : <FaTimes className="text-danger" />}
                          </td>
                          <td className="text-center">
                            {row.progress ? <FaCheck className="text-success" /> : <FaTimes className="text-danger" />}
                          </td>
                          <td className="text-center">
                            {row.excellence ? <FaCheck className="text-success" /> : <FaTimes className="text-danger" />}
                          </td>
                          <td className="text-center">
                            {row.professional ? <FaCheck className="text-success" /> : <FaTimes className="text-danger" />}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={12}>
            {/* CTA Card */}
            <Card className="cta-card sticky-top">
              <Card.Header>
                <h4>ابدأ الآن</h4>
              </Card.Header>
              <Card.Body>
                <div className="cta-actions">
                  <Button 
                    variant={packageData.color} 
                    size="lg" 
                    className="w-100 mb-3"
                  >
                    <FaShoppingCart className="me-2" />
                    اشترك الآن
                  </Button>
                  
                  <Button variant="outline-primary" size="lg" className="w-100 mb-3">
                    <FaPhone className="me-2" />
                    اتصل بالبيع
                  </Button>
                  
                  <Button variant="outline-secondary" size="lg" className="w-100">
                    طلب عرض توضيحي
                  </Button>
                </div>

                <hr />

                <div className="contact-info">
                  <h6>هل تحتاج مساعدة؟</h6>
                  <div className="contact-method d-flex align-items-center mb-2">
                    <FaPhone className="text-primary me-2" />
                    <span>+966 50 123 4567</span>
                  </div>
                  <div className="contact-method d-flex align-items-center">
                    <FaEnvelope className="text-primary me-2" />
                    <span>sales@aurmenu.com</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

