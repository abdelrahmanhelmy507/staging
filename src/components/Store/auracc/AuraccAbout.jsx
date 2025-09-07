import { Container, Row, Col } from "react-bootstrap";
import {
  FaFileInvoiceDollar,
  FaRegSmileBeam,
  FaShieldAlt,
  FaChartLine,
  FaConnectdevelop,
} from "react-icons/fa";

export default function AuraccAbout() {
  return (
    <div className="about py-4 my-5">
      <h2 className="pt-4 text-center">لماذا أوراك</h2>

      <Container>
        <Row className="g-4">
          <Col lg={4} md={6} sm={12}>
            <div className="about-card">
              <div className="icon">
                <FaFileInvoiceDollar />
              </div>
              <h3> إدارة مالية شاملة </h3>
              <p>
                كل أدوات المحاسبة اللي تحتاجها في مكان واحد: فواتير، مصروفات،
                تقارير، وميزانيات.
              </p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="about-card">
              <div className="icon">
                <FaRegSmileBeam  />
              </div>
              <h3> سهولة الاستخدام</h3>
              <p>
                {" "}
                واجهة بسيطة وعصرية تخلي إدارتك للمحاسبة أسهل حتى لو ما عندك خبرة
                محاسبية كبيرة.{" "}
              </p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="about-card">
              <div className="icon">
                <FaShieldAlt />
              </div>
              <h3> دقة وأمان</h3>
              <p>بياناتك محفوظة بشكل آمن مع نسخ احتياطي تلقائي وضمان أعلى معايير الحماية.</p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="about-card">
              <div className="icon">
                <FaChartLine />
              </div>
              <h3> تحليلات وتقارير متقدمة </h3>
              <p>احصل على رؤية واضحة لأرباحك وتدفقاتك المالية لمساعدتك في اتخاذ قرارات أفضل.</p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="about-card">
              <div className="icon">
                <FaConnectdevelop />
              </div>
              <h3> تكامل سلس   </h3>
              <p>متوافق مع أنظمة البيع وإدارة الموارد الأخرى لتشغيل متكامل لشركتك.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
