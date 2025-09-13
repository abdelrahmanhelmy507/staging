import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';

export default function Solution() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <section>
        <div className="solution">
          <Container className='py-2'>
            {/* Custom Solutions Section */}
            <div className="custom-solutions-section">
              <Card className="custom-solutions-card">
                <Card.Body className="p-5">
                  {/* Header */}
                  <div className="text-center mb-5">
                    <h2 className="custom-solutions-title fw-bold mb-3">
                      {t("حلول مخصصة للعمليات الكبيرة")}
                    </h2>
                    <p className="custom-solutions-subtitle">
                      {t("تحتاج إلى حل مخصص لسلسلة مطاعمك أو عملياتك الكبيرة ؟ سيعمل فريقنا للشركات معك لإنشاء حزمة مخصصة تناسب احتياجاتك الخاصة.")}
                    </p>
                  </div>

                  {/* Content Columns */}
                  <Row className="g-4 mb-5">
                    {/* Left Column - Features List */}
                    <Col lg={6} md={12}>
                      <div className="features-column">
                        <h4 className="features-title mb-4">{t("المميزات")}</h4>
                        <ul className="custom-features-list">
                          <li>{t("إدارة مواقع متعددة")}</li>
                          <li>{t("تحليلات وتقارير متقدمة")}</li>
                          <li>{t("تكاملات واجهة برمجة تطبيقات مخصصة")}</li>
                          <li>{t("مدير حساب مخصص")}</li>
                          <li>{t("دعم فني أولوية")}</li>
                        </ul>
                      </div>
                    </Col>

                    {/* Right Column - Metrics & Benefits */}
                    <Col lg={6} md={12}>
                      <div className="metrics-column">
                        <Row className="g-3">
                          {/* Top Row */}
                          <Col xs={6}>
                            <div className="metric-block">
                              <div className="metric-number">99.9%</div>
                              <div className="metric-label">{t("اتفاقية مستوى الخدمة")}</div>
                            </div>
                          </Col>
                          <Col xs={6}>
                            <div className="metric-block">
                              <div className="metric-number">24/7</div>
                              <div className="metric-label">{t("دعم متميز")}</div>
                            </div>
                          </Col>
                          {/* Bottom Row */}
                          <Col xs={6}>
                            <div className="metric-block">
                              <div className="metric-number">{t("مخصص")}</div>
                              <div className="metric-label">{t("التكاملات")}</div>
                            </div>
                          </Col>
                          <Col xs={6}>
                            <div className="metric-block">
                              <div className="metric-number">{t("أمان متكامل")}</div>
                              <div className="metric-label">{t("حماية بيانات عملك")}</div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>

                  {/* Call to Action Button */}
                  <div className="text-center">
                    <Button className="custom-cta-button">
                      <span className="me-2">{t("اتصل بالمبيعات")}</span>
                      <i className="arrow-left">←</i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Container>
        </div>
      </section>
    </>
  )
}
