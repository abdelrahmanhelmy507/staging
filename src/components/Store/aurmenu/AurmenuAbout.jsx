import { Container, Row, Col } from "react-bootstrap";
import { FaMobileAlt, FaSyncAlt, FaPalette, FaGlobe, FaCashRegister, FaChartBar } from "react-icons/fa";

export default function AurmenuAbout() {
  return (
    <div className="about py-4 my-5">
      <h2 className="pt-4 text-center">ما هو أورمينيو</h2>
      <p className="text-center mb-4">
        أورمينيو هو منيو رقمي ذكي يساعد مطعمك  على تقديم تجربة مميزة لعملائك وزيادة مبيعاتك.
      </p>

      <Container>
        <Row className="g-4">
          <Col lg={4} md={6} sm={12}>
            <div className="about-card">
              <div className="icon"><FaMobileAlt /></div>
              <h3>تجربة عميل سلسة</h3>
              <p>واجهة سهلة وبسيطة تتيح للعميل تصفح الأصناف بسرعة.</p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="about-card">
              <div className="icon"><FaSyncAlt /></div>
              <h3>تحديث لحظي</h3>
              <p>أضف أو عدّل الأطباق والأسعار في أي وقت بسهولة.</p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="about-card">
              <div className="icon"><FaPalette /></div>
              <h3>تصميم عصري</h3>
              <p>منيو جذاب متوافق مع هوية مطعمك أو كافيهك.</p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="about-card">
              <div className="icon"><FaGlobe /></div>
              <h3>دعم لغات متعددة</h3>
              <p>قدّم منيو بلغات مختلفة لتناسب جميع عملائك.</p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="about-card">
              <div className="icon"><FaCashRegister /></div>
              <h3>تكامل مع نقاط البيع</h3>
              <p>ارتباط مباشر مع نظام أورست لإدارة الطلبات والفواتير.</p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="about-card">
              <div className="icon"><FaChartBar /></div>
              <h3>إحصائيات وتقارير</h3>
              <p>تعرف على أكثر الأطباق مبيعاً لتحسين قراراتك.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
