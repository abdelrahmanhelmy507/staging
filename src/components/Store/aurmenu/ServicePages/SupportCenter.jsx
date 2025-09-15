import { Container, Row, Col, Card, Button, Accordion , Badge} from "react-bootstrap";
import { 
  FaHeadset, 
  FaQuestionCircle, 
  FaBook, 
  FaVideo, 
  FaPhone, 
  FaEnvelope,
  FaSearch,
  FaClock,
  FaUser,
  FaTicketAlt
} from "react-icons/fa";

export default function SupportCenter() {
  const faqData = [
    {
      question: "كيف يمكنني إعداد أورمينيو في مطعمي؟",
      answer: "يمكنك إعداد أورمينيو بسهولة من خلال اتباع الخطوات التالية: 1) تسجيل الدخول إلى لوحة التحكم 2) إضافة منتجاتك وقوائمك 3) تخصيص التصميم 4) ربط أجهزتك. فريق الدعم متاح لمساعدتك في كل خطوة."
    },
    {
      question: "هل يمكنني استخدام أورمينيو على أجهزة متعددة؟",
      answer: "نعم، يمكنك استخدام أورمينيو على أجهزة متعددة في نفس الوقت. النظام يدعم العمل على أجهزة مختلفة مع مزامنة البيانات في الوقت الفعلي."
    },
    {
      question: "ما هي طرق الدفع المتاحة؟",
      answer: "نحن نقبل جميع طرق الدفع الرئيسية بما في ذلك البطاقات الائتمانية، التحويل البنكي، والدفع الإلكتروني. يمكنك اختيار الطريقة المناسبة لك."
    },
    {
      question: "كيف يمكنني تحديث قوائمي؟",
      answer: "يمكنك تحديث قوائمك في أي وقت من خلال لوحة التحكم. التحديثات تظهر فوراً على جميع الأجهزة المتصلة بالنظام."
    },
    {
      question: "هل يوجد دعم فني متاح؟",
      answer: "نعم، نحن نقدم دعم فني على مدار الساعة طوال أيام الأسبوع. يمكنك التواصل معنا عبر الهاتف، البريد الإلكتروني، أو نظام التذاكر."
    }
  ];

  const supportOptions = [
    {
      icon: <FaPhone />,
      title: "الدعم الهاتفي",
      description: "تواصل معنا مباشرة عبر الهاتف",
      contact: "+966 50 123 4567",
      hours: "24/7",
      color: "primary"
    },
    {
      icon: <FaEnvelope />,
      title: "البريد الإلكتروني",
      description: "أرسل لنا استفسارك وسنرد عليك",
      contact: "support@aurmenu.com",
      hours: "خلال 2-4 ساعات",
      color: "primary"
    },
    {
      icon: <FaVideo />,
      title: "الدعم المرئي",
      description: "حجز جلسة دعم مرئي مع خبير",
      contact: "حجز مسبق",
      hours: "خلال 24 ساعة",
      color: "primary"
    }
  ];

  const resources = [
    {
      icon: <FaBook />,
      title: "دليل المستخدم",
      description: "دليل شامل لاستخدام جميع ميزات أورمينيو",
      link: "#"
    },
    {
      icon: <FaVideo />,
      title: "فيديوهات تعليمية",
      description: "مجموعة من الفيديوهات التعليمية خطوة بخطوة",
      link: "#"
    },
    {
      icon: <FaQuestionCircle />,
      title: "الأسئلة الشائعة",
      description: "إجابات على أكثر الأسئلة شيوعاً",
      link: "#"
    }
  ];

  return (
    <div className="support-center-page ">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="text-center mb-5">
              <div className="support-icon mb-3">
                <FaHeadset />
              </div>
              <h1 className="page-title">مركز الدعم</h1>
              <p className="page-subtitle">
                نحن هنا لمساعدتك! مركز الدعم الشامل لأورمينيو يوفر لك جميع الأدوات والموارد 
                التي تحتاجها للحصول على أفضل تجربة مع نظامنا.
              </p>
            </div>
          </Col>
        </Row>

        {/* Support Options */}
        <Row className="g-4 mb-5">
          <Col sm={12}>
            <h2 className="section-title text-center mb-4">طرق التواصل معنا</h2>
          </Col>
          {supportOptions.map((option, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <Card className={`support-option-card h-100 border-${option.color}`}>
                <Card.Body className="text-center">
                  <div className={`support-option-icon bg-${option.color} text-white mb-3`}>
                    {option.icon}
                  </div>
                  <Card.Title>{option.title}</Card.Title>
                  <Card.Text>{option.description}</Card.Text>
                  <div className="contact-info">
                    <strong>{option.contact}</strong>
                    <div className="hours">
                      <FaClock className="me-1" />
                      {option.hours}
                    </div>
                  </div>
                  <Button variant={option.color} className="mt-3">
                    تواصل الآن
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Quick Help */}
        <Row className="mb-5">
          <Col lg={8} md={12}>
            <Card>
              <Card.Header>
                <h3>المساعدة السريعة</h3>
              </Card.Header>
              <Card.Body>
                <div className="search-box mb-4">
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaSearch />
                    </span>
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="ابحث عن حل لمشكلتك..."
                    />
                    <Button variant="primary">بحث</Button>
                  </div>
                </div>

                <div className="quick-links">
                  <h5>الروابط السريعة:</h5>
                  <div className="d-flex flex-wrap gap-2">
                    <Button variant="outline-primary" size="sm">إعداد النظام</Button>
                    <Button variant="outline-primary" size="sm">إدارة المنتجات</Button>
                    <Button variant="outline-primary" size="sm">مشاكل الدفع</Button>
                    <Button variant="outline-primary" size="sm">التكامل مع POS</Button>
                    <Button variant="outline-primary" size="sm">النسخ الاحتياطي</Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={12}>
            <Card>
              <Card.Header>
                <h4>حالة النظام</h4>
              </Card.Header>
              <Card.Body>
                <div className="status-item d-flex justify-content-between align-items-center mb-3">
                  <span>الخوادم</span>
                  <Badge bg="success">مستقر</Badge>
                </div>
                <div className="status-item d-flex justify-content-between align-items-center mb-3">
                  <span>قاعدة البيانات</span>
                  <Badge bg="success">مستقر</Badge>
                </div>
                <div className="status-item d-flex justify-content-between align-items-center mb-3">
                  <span>API</span>
                  <Badge bg="success">مستقر</Badge>
                </div>
                <div className="status-item d-flex justify-content-between align-items-center">
                  <span>التحديثات</span>
                  <Badge bg="info">آخر تحديث: اليوم</Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* FAQ Section */}
        <Row className="mb-5">
          <Col lg={12}>
            <h2 className="section-title text-center mb-4">الأسئلة الشائعة</h2>
            <Accordion>
              {faqData.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>

        {/* Resources */}
        <Row>
          <Col lg={12}>
            <h2 className="section-title text-center mb-4">الموارد التعليمية</h2>
          </Col>
          {resources.map((resource, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <Card className="resource-card h-100">
                <Card.Body className="text-center">
                  <div className="resource-icon mb-3">
                    {resource.icon}
                  </div>
                  <Card.Title>{resource.title}</Card.Title>
                  <Card.Text>{resource.description}</Card.Text>
                  <Button variant="outline-primary">
                    عرض المورد
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

