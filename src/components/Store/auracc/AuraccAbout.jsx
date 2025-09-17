import { Container, Row, Col } from "react-bootstrap";
import {
  FaFileInvoiceDollar,
  FaRegSmileBeam,
  FaShieldAlt,
  FaChartLine,
  FaConnectdevelop,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function AuraccAbout() {
  const { t } = useTranslation();
  return (
    <div className="about py-4 my-5">
      <h2 className="pt-4 text-center">{t("لماذا أوراك")}</h2>

      <Container>
        <Row className="g-4">
          <Col lg={4} md={6} sm={12}>
            <div className="auracc-about-card">
              <div className="icon">
                <FaFileInvoiceDollar className="auracc-color"/>
              </div>
              <h3>{t("إدارة مالية شاملة")}</h3>
              <p>
                {t("كل أدوات المحاسبة اللي تحتاجها في مكان واحد: فواتير، مصروفات، تقارير، وميزانيات.")}
              </p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="auracc-about-card">
              <div className="icon">
                <FaRegSmileBeam  className="auracc-color"/>
              </div>
              <h3>{t("سهولة الاستخدام")}</h3>
              <p>
                {t("واجهة بسيطة وعصرية تخلي إدارتك للمحاسبة أسهل حتى لو ما عندك خبرة محاسبية كبيرة.")}
              </p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="auracc-about-card">
              <div className="icon">
                <FaShieldAlt className="auracc-color"/>
              </div>
              <h3>{t("دقة وأمان")}</h3>
              <p>{t("بياناتك محفوظة بشكل آمن مع نسخ احتياطي تلقائي وضمان أعلى معايير الحماية.")}</p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="auracc-about-card">
              <div className="icon">
                <FaChartLine className="auracc-color"/>
              </div>
              <h3>{t("تحليلات وتقارير متقدمة")}</h3>
              <p>{t("احصل على رؤية واضحة لأرباحك وتدفقاتك المالية لمساعدتك في اتخاذ قرارات أفضل.")}</p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="auracc-about-card">
              <div className="icon">
                <FaConnectdevelop className="auracc-color"/>
              </div>
              <h3>{t("تكامل سلس")}</h3>
              <p>{t("متوافق مع أنظمة البيع وإدارة الموارد الأخرى لتشغيل متكامل لشركتك.")}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
