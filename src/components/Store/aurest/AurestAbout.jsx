import { Container, Row, Col } from "react-bootstrap";
import { FaHeadset, FaLightbulb, FaChartBar, FaRocket, FaCogs } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="about py-4 my-5">
  <h2 className="pt-4 text-center">{t("لماذا أورست")}</h2>

  <Container>
    <Row className="g-4">
      <Col lg={4} md={6} sm={12}>
        <div className="aurest-about-card">
          <div className="icon"><FaHeadset className="aurest-color"/></div>
          <h3>{t("دعم وصيانة في الوقت الفعلي")}</h3>
          <p>{t("خدمات فورية تضمن استمرار أعمالك دون انقطاع.")}</p>
        </div>
      </Col>

      <Col lg={4} md={6} sm={12}>
        <div className="aurest-about-card">
          <div className="icon"><FaLightbulb className="aurest-color"/></div>
          <h3>{t("أفكار تطويرية")}</h3>
          <p>{t("أطلقنا ابتكارات تقنية لتستمر وتنمو أعمالك بثبات.")}</p>
        </div>
      </Col>

      <Col lg={4} md={6} sm={12}>
        <div className="aurest-about-card">
          <div className="icon"><FaChartBar className="aurest-color"/></div>
          <h3>{t("تقارير وإحصائيات")}</h3>
          <p>{t("بيانات دقيقة تعزز القرارات وتدعم استراتيجياتك.")}</p>
        </div>
      </Col>

      <Col lg={4} md={6} sm={12}>
        <div className="aurest-about-card">
          <div className="icon"><FaRocket className="aurest-color"/></div>
          <h3>{t("انطلاقة نحو السماء")}</h3>
          <p>{t("حلول مستقرة وفعّالة لا تتعطل عن خدمة عملك.")}</p>
        </div>
      </Col>

      <Col lg={4} md={6} sm={12}>
        <div className="aurest-about-card">
          <div className="icon"><FaCogs className="aurest-color"/></div>
          <h3>{t("إنشاء معنى جديد للتحول الرقمي")}</h3>
          <p>{t("مستقبل أعمالك عبر تقنيات عصرية متقدمة.")}</p>
        </div>
      </Col>
    </Row>
  </Container>
</div>

  );
}
