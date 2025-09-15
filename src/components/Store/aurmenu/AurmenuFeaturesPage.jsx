import { Container, Row, Col, Card } from "react-bootstrap";
import { 
  FaBullhorn, 
  FaChartLine, 
  FaUsers, 
  FaQrcode, 
  FaShareAlt, 
  FaGift,
  FaCog, 
  FaClipboardList, 
  FaChartBar, 
  FaBell, 
  FaDatabase, 
  FaShieldAlt,
  FaPalette, 
  FaMobileAlt, 
  FaEye, 
  FaLanguage, 
  FaAdjust,
  FaMagic,
  FaRocket
} from "react-icons/fa";
import "./aurmenu.css";

export default function AurmenuFeaturesPage() {
  return (
    <div className="aurmenu-features-page">
      {/* Hero Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-4 fw-bold text-primary mb-4">
                مميزات أورمينيو المتقدمة
              </h1>
              <p className="lead text-muted mb-0">
                اكتشف مجموعة شاملة من الأدوات والمميزات المصممة لتحسين تجربة عملائك وزيادة مبيعاتك
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Marketing Features Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <FaBullhorn className="text-primary me-3" size={40} />
                <h2 className="h1 fw-bold text-primary mb-0">مميزات التسويق</h2>
              </div>
              <p className="lead text-muted">
                أدوات تسويقية متطورة لزيادة الوصول للعملاء وتحسين المبيعات
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <FaQrcode className="text-primary" size={30} />
                  </div>
                  <h5 className="fw-bold mb-3">مولد رمز الاستجابة السريعة</h5>
                  <p className="text-muted">
                    إنشاء أكواد QR فريدة لكل طاولة لسهولة الوصول للقائمة الرقمية
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <FaShareAlt className="text-primary" size={30} />
                  </div>
                  <h5 className="fw-bold mb-3">تكامل وسائل التواصل الاجتماعي</h5>
                  <p className="text-muted">
                    مشاركة القوائم على منصات التواصل الاجتماعي لزيادة الوصول
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <FaGift className="text-primary" size={30} />
                  </div>
                  <h5 className="fw-bold mb-3">الحملات الترويجية</h5>
                  <p className="text-muted">
                    إدارة الحملات الترويجية والعروض الخاصة لجذب العملاء
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <FaUsers className="text-primary" size={30} />
                  </div>
                  <h5 className="fw-bold mb-3">تحليلات العملاء</h5>
                  <p className="text-muted">
                    تحليل سلوك العملاء وتفضيلاتهم لتحسين الاستراتيجيات التسويقية
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <FaChartLine className="text-primary" size={30} />
                  </div>
                  <h5 className="fw-bold mb-3">تتبع المبيعات</h5>
                  <p className="text-muted">
                    تتبع المبيعات والأداء في الوقت الفعلي لاتخاذ قرارات مدروسة
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <FaRocket className="text-primary" size={30} />
                  </div>
                  <h5 className="fw-bold mb-3">أدوات النمو</h5>
                  <p className="text-muted">
                    أدوات متقدمة لتنمية الأعمال وزيادة الحصة السوقية
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Management & Performance Features Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <FaCog className="text-primary me-3" size={40} />
                <h2 className="h1 fw-bold text-primary mb-0">الإدارة والأداء</h2>
              </div>
              <p className="lead text-muted">
                أدوات إدارة متطورة لتتبع الأداء وتحسين العمليات
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <FaClipboardList className="text-primary" size={30} />
                  </div>
                  <h5 className="fw-bold mb-3">إدارة الطلبات</h5>
                  <p className="text-muted">
                    إدارة الطلبات بشكل فعال مع تتبع الحالة في الوقت الفعلي
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <FaChartBar className="text-primary" size={30} />
                  </div>
                  <h5 className="fw-bold mb-3">تقارير الأداء</h5>
                  <p className="text-muted">
                    تقارير مفصلة عن الأداء والمبيعات لاتخاذ قرارات مدروسة
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <FaBell className="text-primary" size={30} />
                  </div>
                  <h5 className="fw-bold mb-3">الإشعارات في الوقت الفعلي</h5>
                  <p className="text-muted">
                    إشعارات فورية للطلبات الجديدة والتحديثات المهمة
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <FaDatabase className="text-primary" size={30} />
                  </div>
                  <h5 className="fw-bold mb-3">إدارة البيانات</h5>
                  <p className="text-muted">
                    إدارة البيانات والمعلومات بطريقة آمنة ومنظمة
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <FaShieldAlt className="text-primary" size={30} />
                  </div>
                  <h5 className="fw-bold mb-3">الأمان والنسخ الاحتياطي</h5>
                  <p className="text-muted">
                    حماية البيانات مع نظام نسخ احتياطي متقدم
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <FaCog className="text-primary" size={30} />
                  </div>
                  <h5 className="fw-bold mb-3">Sتكامل النظام</h5>
                  <p className="text-muted">
                    تكامل مع أنظمة أخرى لتحسين سير العمل
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Design & UI/UX Features Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <FaPalette className="text-primary me-3" size={40} />
                <h2 className="h1 fw-bold text-primary mb-0">التصميم وواجهة المستخدم</h2>
              </div>
              <p className="lead text-muted">
                تصميم جذاب وسهل الاستخدام مع خيارات تخصيص متقدمة
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <FaMobileAlt className="text-primary" size={30} />
                  </div>
                  <h5 className="fw-bold mb-3">تصميم متجاوب</h5>
                  <p className="text-muted">
                    تصميم متجاوب يعمل بشكل مثالي على جميع الأجهزة
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <FaPalette className="text-primary" size={30} />
                  </div>
                  <h5 className="fw-bold mb-3">السمات المخصصة</h5>
                  <p className="text-muted">
                    قوالب تصميم متنوعة قابلة للتخصيص حسب هوية العلامة التجارية
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <FaEye className="text-primary" size={30} />
                  </div>
                  <h5 className="fw-bold mb-3">جاذبية بصرية</h5>
                  <p className="text-muted">
                    واجهة بصرية جذابة مع صور عالية الجودة وتأثيرات بصرية
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <FaLanguage className="text-primary" size={30} />
                  </div>
                  <h5 className="fw-bold mb-3">دعم متعدد اللغات</h5>
                  <p className="text-muted">
                    دعم متعدد اللغات لخدمة عملاء من خلفيات مختلفة
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <FaAdjust className="text-primary" size={30} />
                  </div>
                  <h5 className="fw-bold mb-3">إمكانية الوصول</h5>
                  <p className="text-muted">
                    تصميم متاح للجميع مع دعم تقنيات المساعدة
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <FaMagic className="text-primary" size={30} />
                  </div>
                  <h5 className="fw-bold mb-3">واجهة ذكية</h5>
                  <p className="text-muted">
                    واجهة ذكية تتكيف مع تفضيلات المستخدمين
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 Action text-white">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="h1 fw-bold mb-4">ابدأ رحلتك مع أورمينيو اليوم</h2>
              <p className="lead mb-4">
                انضم إلى آلاف المطاعم والمقاهي التي تثق في أورمينيو لتحسين تجربة عملائها
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <button className="btn btn-light btn-lg px-4">
                  ابدأ التجربة المجانية
                </button>
                <button className="btn btn-outline-light btn-lg px-4">
                  شاهد العرض التوضيحي
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
