import { Container, Row, Col } from "react-bootstrap";
import { FaMobileAlt, FaSyncAlt, FaPalette, FaGlobe, FaCashRegister, FaChartBar } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function AurmenuAbout() {
  const { t } = useTranslation();
  return (
    <div className="about py-4 my-5">
      <h2 className="pt-4 text-center">{t("ما هو أورمينيو")}</h2>
      <p className="text-center mb-4">
        {t("أورمينيو هو منيو رقمي ذكي يساعد مطعمك  على تقديم تجربة مميزة لعملائك وزيادة مبيعاتك.")}
      </p>

      <Container>
        <Row className="g-4">
          <Col lg={4} md={6} sm={12}>
            <div className="about-card">
              <div className="icon"><FaMobileAlt className="aurmenu-color"/></div>
              <h3>{t("تجربة عميل سلسة")}</h3>
              <p>{t("واجهة سهلة وبسيطة تتيح للعميل تصفح الأصناف بسرعة.")}</p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="about-card">
              <div className="icon"><FaSyncAlt className="aurmenu-color"/></div>
              <h3>{t("تحديث لحظي")}</h3>
              <p>{t("أضف أو عدّل الأطباق والأسعار في أي وقت بسهولة.")}</p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="about-card">
              <div className="icon"><FaPalette className="aurmenu-color"/></div>
              <h3>{t("تصميم عصري")}</h3>
              <p>{t("منيو جذاب متوافق مع هوية مطعمك أو كافيهك.")}</p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="about-card">
              <div className="icon"><FaGlobe className="aurmenu-color"/></div>
              <h3>{t("دعم لغات متعددة")}</h3>
              <p>{t("قدّم منيو بلغات مختلفة لتناسب جميع عملائك.")}</p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="about-card">
              <div className="icon"><FaCashRegister className="aurmenu-color"/></div>
              <h3>{t("تكامل مع نقاط البيع")}</h3>
              <p>{t("ارتباط مباشر مع نظام أورست لإدارة الطلبات والفواتير.")}</p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="about-card">
              <div className="icon"><FaChartBar className="aurmenu-color"/></div>
              <h3>{t("إحصائيات وتقارير")}</h3>
              <p>{t("تعرف على أكثر الأطباق مبيعاً لتحسين قراراتك.")}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
