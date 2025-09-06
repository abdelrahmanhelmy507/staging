import { Container, Row, Col } from "react-bootstrap";
import { FaHeadset, FaLightbulb, FaChartBar, FaRocket, FaCogs } from "react-icons/fa";



export default function About() {
  return (
    <div className="about py-4 my-5">
  <h2 className="pt-4 text-center">لماذا أورست</h2>

  <Container>
    <Row className="g-4">
      <Col lg={4} md={6} sm={12}>
        <div className="about-card">
          <div className="icon"><FaHeadset /></div>
          <h3>دعم وصيانة في الوقت الفعلي</h3>
          <p>خدمات فورية تضمن استمرار أعمالك دون انقطاع.</p>
        </div>
      </Col>

      <Col lg={4} md={6} sm={12}>
        <div className="about-card">
          <div className="icon"><FaLightbulb /></div>
          <h3>أفكار تطويرية</h3>
          <p>أطلقنا ابتكارات تقنية لتستمر وتنمو أعمالك بثبات.</p>
        </div>
      </Col>

      <Col lg={4} md={6} sm={12}>
        <div className="about-card">
          <div className="icon"><FaChartBar /></div>
          <h3>تقارير وإحصائيات</h3>
          <p>بيانات دقيقة تعزز القرارات وتدعم استراتيجياتك.</p>
        </div>
      </Col>

      <Col lg={4} md={6} sm={12}>
        <div className="about-card">
          <div className="icon"><FaRocket /></div>
          <h3>انطلاقة نحو السماء</h3>
          <p>حلول مستقرة وفعّالة لا تتعطل عن خدمة عملك.</p>
        </div>
      </Col>

      <Col lg={4} md={6} sm={12}>
        <div className="about-card">
          <div className="icon"><FaCogs /></div>
          <h3>إنشاء معنى جديد للتحول الرقمي</h3>
          <p>ن redefining مستقبل أعمالك عبر تقنيات عصرية متقدمة.</p>
        </div>
      </Col>
    </Row>
  </Container>
</div>

  );
}
