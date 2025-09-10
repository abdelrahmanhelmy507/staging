import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./aurpos.css";

const features = [
  {
    title: "المحاسبة المتقدمة" ,
    desc: "استمتع بمحاسبة دقيقة وذكية توفر لك أتمتة متقدمة للتقارير المالية",
    img: "../images/easy.jpg"
  },
  {
    title: " مساعد ذكي بالذكاء الاصطناعي",
    desc: "أداة قوية مدعمة بالذكاء الاصطناعي توفر رؤى دقيقة واستباقية",
    img: "../images/flex.jpg"
  },
  {
    title: " إدارة الأصول ",
    desc: "تضمن لك إدارة الأصول الثابتة الدقة الكاملة في حساب قيمة الأصول وتقييم الاستثمارات.",
    img: "../images/modern.jpg"
  },
  {
    title: "دعم متكامل",
    desc: "فريق دعم متاح دائمًا لمساعدتك وتلبية استفساراتك.",
    img: "../images/support.jpg"
  }
];

export default function AurposAbout() {
  return (
    <section className="features-section pt-5">
      <Container>
        <h2 className="text-center mb-2 fw-bold">لماذا أوربوس</h2>
        <p className="text-center mb-4">الحل المثالي لمتابعة المخازن والحسابات</p>
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
