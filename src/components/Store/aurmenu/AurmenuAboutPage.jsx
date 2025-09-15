
import { Container, Row, Col, Card } from "react-bootstrap";
import { 
  FaHeadset, 
  FaCrown, 
  FaCheckCircle, 
  FaThumbsUp,
  FaCoins,
  FaSmile,
  FaClock,
  FaLanguage,
  FaUsers,
  FaChartLine,
  FaLaptop,
  FaMobileAlt
} from "react-icons/fa";
import "./aurmenu.css";

export default function AurmenuAboutPage() {
  return (
    <div className="aurmenu-about-page">
      {/* Hero About Section */}
      <section className="about-hero-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} className="mb-4 mb-lg-0">
              <div className="about-content">
                <h2 className="about-title">من نحن</h2>
                <div className="about-text">
                  <p className="about-paragraph">
                    أورمينيو تقدم جيل جديد من القوائم التفاعلية والكتالوجات الرقمية لتسهيل وتسريع عرض المنتجات والخدمات لمختلف الأعمال مثل المطاعم والمقاهي والفنادق أو المتاجر. نؤمن بتوفير منصة متكاملة تعكس الهوية التجارية وتعزز التواصل الذكي والفعال مع العملاء.
                  </p>
                  <p className="about-paragraph">
                    أورمينيو، المطورة من قبل <span className="highlight">أوريجس</span>، الشركة الرائدة في حلول التحول الرقمي، تجمع بين سهولة الاستخدام والتقنيات المتقدمة. تشمل هذه التقنيات الدفع الإلكتروني الآمن، والتوصيل السريع، والذكاء الاصطناعي الذي يوفر توصيات ذكية لزيادة المبيعات وتحسين تجربة العملاء.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="about-visual">
                <div className="device-showcase">
                  <div className="desktop-mockup">
                    <div className="screen">
                      <div className="screen-header">
                        <div className="nav-tabs">
                          <span className="tab active">DASHBOARD</span>
                          <span className="tab">MENU CONTROL</span>
                          <span className="tab">CUSTOMERS</span>
                        </div>
                        <div className="search-bar">
                          <input type="text" placeholder="Search items..." />
                          <button className="add-btn">Add Item</button>
                        </div>
                      </div>
                      <div className="menu-grid">
                        <div className="menu-item">
                          <div className="item-image"></div>
                          <div className="item-info">
                            <h6>Fettuccine Alfredo</h6>
                            <p>Classic Italian pasta</p>
                            <span className="status active">Active</span>
                          </div>
                        </div>
                        <div className="menu-item">
                          <div className="item-image"></div>
                          <div className="item-info">
                            <h6>Pasta Pesto</h6>
                            <p>Fresh basil pasta</p>
                            <span className="status active">Active</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="qr-code">
                    <div className="qr-placeholder"></div>
                  </div>
                  <div className="mobile-mockup">
                    <div className="mobile-screen">
                      <div className="mobile-header">
                        <h6>AUREST LOUNGE</h6>
                      </div>
                      <div className="mobile-nav">
                        <span className="mobile-tab active">الأطباق الرئيسية</span>
                        <span className="mobile-tab">المقبلات</span>
                        <span className="mobile-tab">الحلويات</span>
                      </div>
                      <div className="mobile-content">
                        <div className="mobile-search"></div>
                        <div className="mobile-items">
                          <div className="mobile-item"></div>
                          <div className="mobile-item"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} className="mb-4 mb-lg-0">
              <div className="vision-mission-content">
                <div className="vision-block mb-4">
                  <h3 className="section-title">رؤيتنا</h3>
                  <p className="section-text">
                    أن نكون الخيار الأول عالمياً لإنشاء وإدارة الكتالوجات الرقمية، مما يمكن الشركات من تعزيز هوياتها والوصول إلى عملائها بطريقة مبتكرة.
                  </p>
                </div>
                <div className="mission-block">
                  <h3 className="section-title">مهمتنا</h3>
                  <p className="section-text">
                    تمكين أصحاب الأعمال من إنشاء كتالوجات رقمية متطورة تعرض منتجاتهم وخدماتهم بأفضل صورة، مع توفير أدوات مبتكرة لتحسين تجربة العملاء وزيادة المبيعات.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="business-meeting-visual">
                <div className="meeting-room">
                  <div className="room-window"></div>
                  <div className="conference-table">
                    <div className="presenter"></div>
                    <div className="attendees">
                      <div className="attendee"></div>
                      <div className="attendee"></div>
                      <div className="attendee"></div>
                    </div>
                    <div className="laptop-screen"></div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Promises Section */}
      <section className="promises-section py-5">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="promises-title">وعد أورمينيو</h2>
            <p className="promises-subtitle">نجاحك هو نجاحنا لذلك نعدك</p>
          </div>
          <Row className="g-4">
            <Col lg={3} md={6} sm={12}>
              <Card className="promise-card h-100">
                <Card.Body className="text-center">
                  <div className="promise-icon">
                    <FaHeadset />
                    <span className="icon-text">24/7</span>
                  </div>
                  <h5 className="promise-title">دعم فني قوي</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <Card className="promise-card h-100">
                <Card.Body className="text-center">
                  <div className="promise-icon">
                    <FaCrown />
                  </div>
                  <h5 className="promise-title">تجربة متميزة</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <Card className="promise-card h-100">
                <Card.Body className="text-center">
                  <div className="promise-icon">
                    <FaCheckCircle />
                  </div>
                  <h5 className="promise-title">أفضل أداء</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <Card className="promise-card h-100">
                <Card.Body className="text-center">
                  <div className="promise-icon">
                    <FaThumbsUp />
                  </div>
                  <h5 className="promise-title">سهولة الاستخدام</h5>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Results Section */}
      <section className="results-section py-5">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="results-title">لوحة النتائج</h2>
            <p className="results-subtitle">مؤشرات نجاحنا</p>
          </div>
          <Row className="g-4">
            <Col lg={3} md={6} sm={12}>
              <Card className="result-card h-100">
                <Card.Body className="text-center">
                  <div className="result-icon">
                    <FaCoins />
                  </div>
                  <div className="result-number">25%</div>
                  <h5 className="result-title">تكاليف تشغيل أقل</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <Card className="result-card h-100">
                <Card.Body className="text-center">
                  <div className="result-icon">
                    <FaSmile />
                  </div>
                  <div className="result-number">40%</div>
                  <h5 className="result-title">زيادة في رضا العملاء</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <Card className="result-card h-100">
                <Card.Body className="text-center">
                  <div className="result-icon">
                    <FaClock />
                  </div>
                  <div className="result-number">+50%</div>
                  <h5 className="result-title">توفير وقت الإدارة</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <Card className="result-card h-100">
                <Card.Body className="text-center">
                  <div className="result-icon">
                    <FaLanguage />
                  </div>
                  <div className="result-number">+25</div>
                  <h5 className="result-title">اللغات المدعومة</h5>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}