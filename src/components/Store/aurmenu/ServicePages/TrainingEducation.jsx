import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { 
  FaGraduationCap, 
  FaVideo, 
  FaBook, 
  FaCertificate, 
  FaUser, 
  FaClock,
  FaPlay,
  FaDownload,
  FaCalendarAlt,
  FaUsers,
  FaLaptop,
} from "react-icons/fa";

export default function TrainingEducation() {
  const courses = [
    {
      title: "دورة أساسيات أورمينيو",
      description: "تعلم أساسيات استخدام نظام أورمينيو من البداية",
      duration: "2 ساعة",
      level: "مبتدئ",
      type: "مجاني",
      students: 1250,
      rating: 4.8,
      icon: <FaBook />,
    },
    {
      title: "إدارة المنتجات والقوائم",
      description: "تعلم كيفية إدارة منتجاتك وقوائمك بكفاءة",
      duration: "3 ساعات",
      level: "متوسط",
      type: "مدفوع",
      students: 890,
      rating: 4.9,
      icon: <FaBook />,
    },
    {
      title: "التقارير والتحليلات",
      description: "استفد من التقارير والتحليلات لتحسين أداء مطعمك",
      duration: "2.5 ساعة",
      level: "متقدم",
      type: "مدفوع",
      students: 650,
      rating: 4.7,
      icon: <FaBook />,
    },
    {
      title: "التكامل مع أنظمة أخرى",
      description: "تعلم كيفية ربط أورمينيو مع أنظمة أخرى",
      duration: "4 ساعات",
      level: "متقدم",
      type: "مدفوع",
      students: 420,
      rating: 4.6,
      icon: <FaBook />,
    }
  ];

  const webinars = [
    {
      title: "أفضل الممارسات لإدارة المطاعم الرقمية",
      date: "2024-01-15",
      time: "7:00 PM",
      speaker: "أحمد محمد",
      attendees: 150,
      status: "مباشر"
    },
    {
      title: "كيفية زيادة المبيعات باستخدام أورمينيو",
      date: "2024-01-22",
      time: "6:00 PM",
      speaker: "فاطمة أحمد",
      attendees: 200,
      status: "قادم"
    },
    {
      title: "حل المشاكل الشائعة في أورمينيو",
      date: "2024-01-29",
      time: "8:00 PM",
      speaker: "محمد علي",
      attendees: 180,
      status: "قادم"
    }
  ];

  const certifications = [
    {
      title: "شهادة أورمينيو الأساسية",
      description: "شهادة تؤكد إتقانك لأساسيات النظام",
      requirements: "إكمال 3 دورات أساسية",
      validity: "سنتان",
      icon: <FaCertificate />,
      color: "primary"
    },
    {
      title: "شهادة أورمينيو المتقدمة",
      description: "شهادة متقدمة للمحترفين",
      requirements: "إكمال 5 دورات متقدمة + امتحان",
      validity: "3 سنوات",
      icon: <FaCertificate />,
      color: "primary"
    },
    {
      title: "شهادة مدرب أورمينيو",
      description: "شهادة تؤهلك لتدريب الآخرين",
      requirements: "شهادة متقدمة + دورة تدريب المدربين",
      validity: "5 سنوات",
      icon: <FaCertificate />,
    }
  ];

  return (
    <div className="training-education-page">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="text-center mb-5">
              <div className="training-icon mb-3">
                <FaGraduationCap className="aurmenu-color"/>
              </div>
              <h1 className="page-title aurmenu-color">التدريب والتعليم</h1>
              <p className="page-subtitle">
                طور مهاراتك في استخدام أورمينيو من خلال دوراتنا التدريبية الشاملة، 
                الندوات الإلكترونية، والشهادات المعتمدة. استثمر في تعليمك واجعل مطعمك أكثر نجاحاً.
              </p>
            </div>
          </Col>
        </Row>

        {/* Courses Section */}
        <Row className="mb-5">
          <Col lg={12}>
            <h2 className="section-title text-center mb-4 aurmenu-color">الدورات التدريبية</h2>
          </Col>
          {courses.map((course, index) => (
            <Col lg={6} md={12} key={index} className="mb-3">
              <Card className="course-card h-100">
                <Card.Body>
                  <div className="d-flex align-items-start">
                    <div className={`course-icon aurmenu-bg-color text-white mx-3`}>
                      {course.icon}
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <Card.Title className="mb-0">{course.title}</Card.Title>
                        <Badge bg={course.type === "مجاني" ? "success" : "primary"}>
                          {course.type}
                        </Badge>
                      </div>
                      <Card.Text className="mb-3">{course.description}</Card.Text>
                      
                      <div className="course-meta mb-3">
                        <div className="meta-item d-flex align-items-center mb-1">
                          <FaClock className="me-2 text-muted" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="meta-item d-flex align-items-center mb-1">
                          <FaUser className="me-2 text-muted" />
                          <span>المستوى: {course.level}</span>
                        </div>
                        <div className="meta-item d-flex align-items-center mb-1">
                          <FaUsers className="me-2 text-muted" />
                          <span>{course.students} طالب</span>
                        </div>
                        <div className="meta-item d-flex align-items-center">
                          {/* <FaStar className="me-2 text-warning" /> */}
                          <span>{course.rating} تقييم</span>
                        </div>
                      </div>

                      <div className="course-actions">
                        <Button variant={course.color} className="me-2 aurmenu-bg-color">
                          <FaPlay className="me-1" />
                          ابدأ الآن
                        </Button>
                        <Button variant="outline-secondary">
                          <FaDownload className="me-1" />
                          تحميل المواد
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Webinars Section */}
        <Row className="mb-5">
          <Col lg={12}>
            <h2 className="section-title text-center mb-4">الندوات الإلكترونية</h2>
          </Col>
          {webinars.map((webinar, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <Card className="webinar-card h-100">
                <Card.Body>
                  <div className="webinar-header mb-3">
                    <Badge bg={webinar.status === "مباشر" ? "success" : "info"}>
                      {webinar.status}
                    </Badge>
                  </div>
                  
                  <Card.Title className="mb-3">{webinar.title}</Card.Title>
                  
                  <div className="webinar-meta mb-3">
                    <div className="meta-item d-flex align-items-center mb-2">
                      <FaCalendarAlt className="me-2 text-muted" />
                      <span>{webinar.date}</span>
                    </div>
                    <div className="meta-item d-flex align-items-center mb-2">
                      <FaClock className="me-2 text-muted" />
                      <span>{webinar.time}</span>
                    </div>
                    <div className="meta-item d-flex align-items-center mb-2">
                      <FaUser className="me-2 text-muted" />
                      <span>المحاضر: {webinar.speaker}</span>
                    </div>
                    <div className="meta-item d-flex align-items-center">
                      <FaUsers className="me-2 text-muted" />
                      <span>{webinar.attendees} مشارك</span>
                    </div>
                  </div>

                  <Button variant="primary" className="w-100 aurmenu-bg-color">
                    {webinar.status === "مباشر" ? "انضم الآن" : "سجل الآن"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Certifications Section */}
        <Row>
          <Col lg={12}>
            <h2 className="section-title text-center mb-4">الشهادات المعتمدة</h2>
          </Col>
          {certifications.map((cert, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <Card className="certification-card h-100 text-center">
                <Card.Body>
                  <div className={`cert-icon aurmenu-bg-color text-white mb-3`}>
                    {cert.icon}
                  </div>
                  <Card.Title>{cert.title}</Card.Title>
                  <Card.Text className="mb-3">{cert.description}</Card.Text>
                  
                  <div className="cert-requirements mb-3">
                    <h6>المتطلبات:</h6>
                    <p className="small">{cert.requirements}</p>
                  </div>
                  
                  <div className="cert-validity mb-3">
                    <h6>صالح لمدة:</h6>
                    <p className="small">{cert.validity}</p>
                  </div>

                  <Button className="aurmenu-bg-color">
                    ابدأ المسار
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Learning Path */}
        <Row className="mt-5">
          <Col lg={12}>
            <Card className="learning-path-card">
              <Card.Header>
                <h3>مسار التعلم المقترح</h3>
              </Card.Header>
              <Card.Body>
                <div className="learning-path">
                  <div className="path-step">
                    <div className="step-number aurmenu-bg-color">1</div>
                    <div className="step-content">
                      <h5>أساسيات أورمينيو</h5>
                      <p>تعلم الأساسيات والمفاهيم الأساسية</p>
                    </div>
                  </div>
                  
                  <div className="path-arrow">→</div>
                  
                  <div className="path-step">
                    <div className="step-number aurmenu-bg-color">2</div>
                    <div className="step-content">
                      <h5>إدارة المنتجات</h5>
                      <p>تعلم كيفية إدارة منتجاتك وقوائمك</p>
                    </div>
                  </div>
                  
                  <div className="path-arrow">→</div>
                  
                  <div className="path-step">
                    <div className="step-number aurmenu-bg-color">3</div>
                    <div className="step-content">
                      <h5>التقارير والتحليلات</h5>
                      <p>استفد من البيانات لتحسين الأداء</p>
                    </div>
                  </div>
                  
                  <div className="path-arrow">→</div>
                  
                  <div className="path-step">
                    <div className="step-number aurmenu-bg-color">4</div>
                    <div className="step-content">
                      <h5>التكامل المتقدم</h5>
                      <p>ربط أورمينيو مع أنظمة أخرى</p>
                    </div>
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

