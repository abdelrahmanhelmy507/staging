import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./aurpos.css";

export default function AurposAbout() {
  const { t } = useTranslation();
  
  const features = [
    {
      title: t("المحاسبة المتقدمة"),
      desc: t("استمتع بمحاسبة دقيقة وذكية توفر لك أتمتة متقدمة للتقارير المالية"),
      img: "../images/easy.jpg"
    },
    {
      title: t("مساعد ذكي بالذكاء الاصطناعي"),
      desc: t("أداة قوية مدعمة بالذكاء الاصطناعي توفر رؤى دقيقة واستباقية"),
      img: "../images/flex.jpg"
    },
    {
      title: t("إدارة الأصول"),
      desc: t("تضمن لك إدارة الأصول الثابتة الدقة الكاملة في حساب قيمة الأصول وتقييم الاستثمارات."),
      img: "../images/modern.jpg"
    },
    {
      title: t("دعم متكامل"),
      desc: t("فريق دعم متاح دائمًا لمساعدتك وتلبية استفساراتك."),
      img: "../images/support.jpg"
    }
  ];
  return (
    <section className="features-section pt-5">
      <Container>
        <h2 className="text-center mb-2 fw-bold">{t("لماذا أوربوس")}</h2>
        <p className="text-center mb-4">{t("الحل المثالي لمتابعة المخازن والحسابات")}</p>
        <Row>
          {features.map((feature, index) => (
            <Col key={index} md={6} lg={3} className="mb-4">
              <div className="feature-card2">
                <img src={feature.img} alt={feature.title} />
                <div className="overlay3">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
