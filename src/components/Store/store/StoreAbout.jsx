import { Container, Row, Col } from "react-bootstrap";
import { FaUserTie, FaPuzzlePiece, FaCheckCircle, FaHeadset, FaLightbulb, FaCogs } from "react-icons/fa";


export default function About() {
  return (
    <div className="about py-4 my-5">
      <h2 className="pt-4 text-center">لماذا تختارنا كشريكك التقني</h2>
      <p className="text-center mb-4">
        لأننا نؤمن أن نجاحك هو نجاحنا، نضع خبراتنا وتقنياتنا لخدمة أهدافك
      </p>

      <Container>
        <Row className="g-4">
          <Col lg={4} md={6} sm={12}>
            <div className="about-card">
              <div className="icon"><FaUserTie /></div>
              <h3>الخبرة والكفاءة</h3>
              <p>فريق متخصص بخبرة واسعة في تطوير البرمجيات والحلول التقنية.</p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="about-card">
              <div className="icon"><FaPuzzlePiece /></div>
              <h3>حلول متكاملة</h3>
              <p>نوفر جميع الخدمات التقنية من مكان واحد.</p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="about-card">
              <div className="icon"><FaCheckCircle /></div>
              <h3>جودة واحترافية</h3>
              <p>نلتزم بأعلى معايير الجودة في كل مشروع.</p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="about-card">
              <div className="icon"><FaHeadset /></div>
              <h3>دعم مستمر</h3>
              <p>خدمات دعم فني واستشارات على مدار الساعة.</p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="about-card">
              <div className="icon"><FaLightbulb /></div>
              <h3>ابتكار وتطور</h3>
              <p>نستخدم أحدث التقنيات لمواكبة متطلبات السوق.</p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="about-card">
              <div className="icon"><FaCogs /></div>
              <h3>تخصيص الحلول</h3>
              <p>حلول مرنة مصممة لتناسب طبيعة عملك.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
