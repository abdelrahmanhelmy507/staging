import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section py-5">
      <Container>
        <h2 className="text-center fw-bold  mb-4">حزم جاهزة للعمل</h2>
        <Row className="g-4">
          <Col lg={6}>
            <Card className="pricing-content h-100">
              <Card.Body>
                <h3 className="fw-bold mb-2">حزمة نقاط بيع التشغيل</h3>
                <p className=" mb-4">حزمة مثالية للمطاعم والمقاهي الجديدة.</p>
                <div className="d-flex align-items-baseline justify-content gap-3 mb-3">
                  <span>وفر 800ريال</span>
                  <div className="price">
                    <span className="display-6 ">1295 ﷼</span>
                  <del className="text-muted">2092 ﷼</del>
                  </div>
                </div>
                <ul className="list-unstyled small mb-4">
                  <li>Go 5 Lite جهاز</li>
                  <li>اشتراك أوروبس لمدة 3 أشهر</li>
                  <li>إعداد وتدريب</li>
                </ul>
                <Button className="btn-primary-glow custom-button">أضف إلى العربة</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="pricing-content h-100">
              <Card.Body>
                <h3 className="fw-bold mb-2">حزمة نقاط بيع التشغيل</h3>
                <p className=" mb-4">حزمة مثالية للمطاعم والمقاهي الجديدة.</p>
                <div className="d-flex align-items-baseline gap-3 mb-3">
                  <span className="display-6 ">1295 ﷼</span>
                  <del className="text-muted">2092 ﷼</del>
                  <span>وفر 800ريال</span>
                </div>
                <ul className="list-unstyled small mb-4">
                  <li>Go 5 Lite جهاز</li>
                  <li>اشتراك أوروبس لمدة 3 أشهر</li>
                  <li>إعداد وتدريب</li>
                </ul>
                <Button className="btn-primary-glow custom-button">أضف إلى العربة</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="pricing-content h-100">
              <Card.Body>
                <h3 className="fw-bold mb-2">حزمة نقاط بيع التشغيل</h3>
                <p className=" mb-4">حزمة مثالية للمطاعم والمقاهي الجديدة.</p>
                <div className="d-flex align-items-baseline gap-3 mb-3">
                  <span className="display-6 ">1295 ﷼</span>
                  <del className="text-muted">2092 ﷼</del>
                </div>
                <ul className="list-unstyled small mb-4">
                  <li>Go 5 Lite جهاز</li>
                  <li>اشتراك أوروبس لمدة 3 أشهر</li>
                  <li>إعداد وتدريب</li>
                </ul>
                <Button className="btn-primary-glow custom-button">أضف إلى العربة</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="pricing-content h-100">
              <Card.Body>
                <h3 className="fw-bold mb-2">حزمة المقهى المتنقل</h3>
                <p className=" mb-4">حل متنقل للشاحنات الغذائية والشركات الناقلة.</p>
                <div className="d-flex align-items-baseline gap-3 mb-3">
                  <span className="display-6 ">1808 ﷼</span>
                  <del className="text-muted">2213 ﷼</del>
                </div>
                <ul className="list-unstyled small mb-4">
                  <li>Go 5 NFC جهاز</li>
                  <li>بنك الطاقة الاحترافي</li>
                  <li>اشتراك أورمينو 6 أشهر</li>
                </ul>
                <Button className="btn-primary-glow custom-button">أضف إلى العربة</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}


