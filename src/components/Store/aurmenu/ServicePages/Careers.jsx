import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { 
  FaBriefcase, 
  FaMapMarkerAlt, 
  FaClock, 
  FaUser, 
  FaGraduationCap,
  FaHeart,
  FaUsers,
  FaRocket,
  FaLightbulb,
  FaHandshake,
  FaGlobe,
  FaCode,
  FaChartLine,
  FaHeadset
} from "react-icons/fa";

export default function Careers() {
  const openPositions = [
    {
      title: "مطور Frontend",
      department: "التطوير",
      location: "الرياض",
      type: "دوام كامل",
      experience: "2-4 سنوات",
      description: "نبحث عن مطور Frontend متحمس للانضمام إلى فريقنا لبناء واجهات مستخدم متميزة لأورمينيو.",
      requirements: [
        "خبرة في React.js و JavaScript",
        "معرفة بـ HTML5 و CSS3",
        "خبرة في Bootstrap أو مكتبات UI أخرى",
        "فهم مبادئ UX/UI",
        "خبرة في Git"
      ],
      benefits: [
        "راتب تنافسي",
        "تأمين صحي شامل",
        "إجازة سنوية مدفوعة",
        "بيئة عمل مرنة"
      ],
      posted: "منذ 3 أيام",
      applicants: 25
    },
    {
      title: "مطور Backend",
      department: "التطوير",
      location: "الرياض",
      type: "دوام كامل",
      experience: "3-5 سنوات",
      description: "انضم إلى فريق Backend لبناء وتطوير APIs قوية وآمنة لنظام أورمينيو.",
      requirements: [
        "خبرة في Node.js أو Python",
        "معرفة بقواعد البيانات (MySQL, MongoDB)",
        "خبرة في RESTful APIs",
        "فهم مبادئ الأمان",
        "خبرة في Docker"
      ],
      benefits: [
        "راتب تنافسي",
        "تأمين صحي شامل",
        "إجازة سنوية مدفوعة",
        "بيئة عمل مرنة"
      ],
      posted: "منذ 5 أيام",
      applicants: 18
    },
    {
      title: "مصمم UX/UI",
      department: "التصميم",
      location: "جدة",
      type: "دوام كامل",
      experience: "2-3 سنوات",
      description: "نبحث عن مصمم UX/UI مبدع لتصميم تجارب مستخدم متميزة لمنتجاتنا.",
      requirements: [
        "خبرة في Figma أو Adobe XD",
        "معرفة بمبادئ UX/UI",
        "خبرة في البحث والاختبار",
        "معرفة بـ HTML/CSS",
        "محفظة أعمال قوية"
      ],
      benefits: [
        "راتب تنافسي",
        "تأمين صحي شامل",
        "إجازة سنوية مدفوعة",
        "بيئة عمل مرنة"
      ],
      posted: "منذ أسبوع",
      applicants: 32
    },
    {
      title: "مدير مبيعات",
      department: "المبيعات",
      location: "الدمام",
      type: "دوام كامل",
      experience: "4-6 سنوات",
      description: "انضم إلى فريق المبيعات لقيادة نمو أورمينيو في المنطقة الشرقية.",
      requirements: [
        "خبرة في مبيعات B2B",
        "خبرة في قطاع المطاعم",
        "مهارات قيادية",
        "خبرة في CRM",
        "شهادة جامعية"
      ],
      benefits: [
        "راتب تنافسي + عمولات",
        "تأمين صحي شامل",
        "إجازة سنوية مدفوعة",
        "سيارة شركة"
      ],
      posted: "منذ 4 أيام",
      applicants: 15
    },
    {
      title: "مختبر جودة",
      department: "الجودة",
      location: "الرياض",
      type: "دوام كامل",
      experience: "1-3 سنوات",
      description: "نبحث عن مختبر جودة لضمان جودة منتجاتنا وخدماتنا.",
      requirements: [
        "خبرة في اختبار البرمجيات",
        "معرفة بـ Selenium أو أدوات اختبار أخرى",
        "فهم دورة حياة التطوير",
        "مهارات تحليلية",
        "خبرة في Agile"
      ],
      benefits: [
        "راتب تنافسي",
        "تأمين صحي شامل",
        "إجازة سنوية مدفوعة",
        "بيئة عمل مرنة"
      ],
      posted: "منذ أسبوع",
      applicants: 22
    },
    {
      title: "دعم فني",
      department: "الدعم",
      location: "عن بُعد",
      type: "دوام كامل",
      experience: "1-2 سنوات",
      description: "انضم إلى فريق الدعم الفني لمساعدة عملائنا في حل مشاكلهم.",
      requirements: [
        "خبرة في الدعم الفني",
        "معرفة تقنية جيدة",
        "مهارات تواصل ممتازة",
        "خبرة في أنظمة المطاعم",
        "إجادة اللغة الإنجليزية"
      ],
      benefits: [
        "راتب تنافسي",
        "تأمين صحي شامل",
        "إجازة سنوية مدفوعة",
        "عمل عن بُعد"
      ],
      posted: "منذ يومين",
      applicants: 28
    }
  ];

  const companyValues = [
    {
      icon: <FaRocket />,
      title: "الابتكار",
      description: "نؤمن بقوة الابتكار في تطوير حلول تقنية متقدمة"
    },
    {
      icon: <FaUsers />,
      title: "العمل الجماعي",
      description: "نعمل كفريق واحد لتحقيق أهدافنا المشتركة"
    },
    {
      icon: <FaHeart />,
      title: "الشغف",
      description: "نحن متحمسون لما نفعله ونؤمن بتأثيره الإيجابي"
    },
    {
      icon: <FaLightbulb />,
      title: "الإبداع",
      description: "نشجع التفكير الإبداعي والحلول المبتكرة"
    },
    {
      icon: <FaHandshake />,
      title: "النزاهة",
      description: "نلتزم بأعلى معايير النزاهة والشفافية"
    },
    {
      icon: <FaGlobe />,
      title: "التنوع",
      description: "نقدر التنوع ونؤمن بقوة الفرق المتنوعة"
    }
  ];

  const benefits = [
    {
      icon: <FaCode />,
      title: "بيئة تقنية متقدمة",
      description: "أحدث التقنيات والأدوات لمساعدتك في النمو المهني"
    },
    {
      icon: <FaChartLine />,
      title: "فرص النمو",
      description: "برامج تدريبية وفرص ترقية مستمرة"
    },
    {
      icon: <FaHeadset />,
      title: "دعم مستمر",
      description: "فريق دعم متكامل لمساعدتك في رحلتك المهنية"
    },
    {
      icon: <FaGraduationCap />,
      title: "التطوير المهني",
      description: "ميزانية للتعلم والتطوير المهني"
    }
  ];

  return (
    <div className="careers-page py-5">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="text-center mb-5">
              <div className="careers-icon mb-3">
                <FaBriefcase />
              </div>
              <h1 className="page-title">الوظائف المتاحة</h1>
              <p className="page-subtitle">
                انضم إلى فريق أورمينيو وكن جزءاً من ثورة التحول الرقمي في قطاع المطاعم. 
                نحن نبحث عن مواهب مبدعة ومتحمسة لمساعدتنا في بناء المستقبل.
              </p>
            </div>
          </Col>
        </Row>

        {/* Company Values */}
        <Row className="mb-5">
          <Col lg={12}>
            <h2 className="section-title text-center mb-4">قيمنا</h2>
          </Col>
          {companyValues.map((value, index) => (
            <Col lg={4} md={6} sm={12} key={index} className="mb-3">
              <Card className="value-card h-100 text-center">
                <Card.Body>
                  <div className="value-icon mb-3">
                    {value.icon}
                  </div>
                  <Card.Title>{value.title}</Card.Title>
                  <Card.Text>{value.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Benefits */}
        <Row className="mb-5">
          <Col lg={12}>
            <h2 className="section-title text-center mb-4">مميزات العمل معنا</h2>
          </Col>
          {benefits.map((benefit, index) => (
            <Col lg={3} md={6} sm={12} key={index}>
              <Card className="benefit-card h-100 text-center">
                <Card.Body>
                  <div className="benefit-icon mb-3">
                    {benefit.icon}
                  </div>
                  <Card.Title>{benefit.title}</Card.Title>
                  <Card.Text>{benefit.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Open Positions */}
        <Row>
          <Col lg={12}>
            <h2 className="section-title text-center mb-4">الوظائف المتاحة</h2>
          </Col>
          {openPositions.map((position, index) => (
            <Col lg={6} md={12} key={index} className="mb-3">
              <Card className="position-card h-100 pe-3">
                <Card.Body>
                  <div className="position-header mb-3">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <Card.Title className="mb-1">{position.title}</Card.Title>
                        <div className="position-meta">
                          <Badge bg="primary" className="me-2">{position.department}</Badge>
                          <Badge bg="secondary" className="me-2">{position.type}</Badge>
                        </div>
                      </div>
                      <div className="position-stats text-end">
                        <div className="applicants-count">
                          <FaUser className="me-1" />
                          {position.applicants} متقدم
                        </div>
                        <div className="posted-date text-muted small">
                          {position.posted}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Card.Text className="mb-3">{position.description}</Card.Text>

                  <div className="position-details mb-3">
                    <div className="detail-item d-flex align-items-center mb-2">
                      <FaMapMarkerAlt className="me-2 text-muted" />
                      <span>{position.location}</span>
                    </div>
                    <div className="detail-item d-flex align-items-center mb-2">
                      <FaClock className="me-2 text-muted" />
                      <span>{position.experience}</span>
                    </div>
                  </div>

                  <div className="position-requirements mb-3">
                    <h6>المتطلبات الأساسية:</h6>
                    <ul className="requirements-list">
                      {position.requirements.slice(0, 3).map((req, reqIndex) => (
                        <li key={reqIndex} className="small">{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="position-actions">
                    <Button variant="primary" className="me-2">
                      تقدم الآن
                    </Button>
                    <Button variant="outline-primary">
                      عرض التفاصيل
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Call to Action */}
        <Row className="mt-5">
          <Col lg={12}>
            <Card className="cta-card bg-primary text-white text-center">
              <Card.Body>
                <h3>لم تجد الوظيفة المناسبة؟</h3>
                <p className="mb-4">
                  نحن دائماً نبحث عن المواهب المتميزة. أرسل لنا سيرتك الذاتية 
                  وسنقوم بالتواصل معك عند توفر فرصة مناسبة.
                </p>
                <Button variant="light" size="lg">
                  أرسل سيرتك الذاتية
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
