import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

export default function Solution() {
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
                    <h2 className="custom-solutions-title fw-bold mb-3">حلول مخصصة للعمليات الكبيرة</h2>
                    <p className="custom-solutions-subtitle">تحتاج إلى حل مخصص لسلسلة مطاعمك أو عملياتك الكبيرة ؟ سيعمل فريقنا للشركات معك لإنشاء حزمة مخصصة تناسب احتياجاتك الخاصة.</p>
                  </div>

                  {/* Content Columns */}
                  <Row className="g-4 mb-5">
                    {/* Left Column - Features List */}
                    <Col lg={6} md={12}>
                      <div className="features-column">
                        <h4 className="features-title mb-4">المميزات</h4>
                        <ul className="custom-features-list">
                          <li>إدارة مواقع متعددة</li>
                          <li>تحليلات وتقارير متقدمة</li>
                          <li>تكاملات واجهة برمجة تطبيقات مخصصة</li>
                          <li>مدير حساب مخصص</li>
                          <li>دعم فني أولوية</li>
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
                              <div className="metric-label">اتفاقية مستوى الخدمة</div>
                            </div>
                          </Col>
                          <Col xs={6}>
                            <div className="metric-block">
                              <div className="metric-number">24/7</div>
                              <div className="metric-label">دعم متميز</div>
                            </div>
                          </Col>
                          {/* Bottom Row */}
                          <Col xs={6}>
                            <div className="metric-block">
                              <div className="metric-number">مخصص</div>
                              <div className="metric-label">التكاملات</div>
                            </div>
                          </Col>
                          <Col xs={6}>
                            <div className="metric-block">
                              <div className="metric-number">أمان متكامل</div>
                              <div className="metric-label">حماية بيانات عملك</div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>

                  {/* Call to Action Button */}
                  <div className="text-center">
                    <Button className="custom-cta-button">
                      <span className="me-2">اتصل بالمبيعات</span>
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





// <Row className="g-4 mb-5">
//               {/* Card 1 - أورمينيو (Ourmenu) */}
//               <Col lg={4} md={6}>
//                 <Card className="solution-card h-100">
//                   <Card.Body className="text-center p-4">
//                     <div className="solution-icon mb-3">
//                       <span className="icon-text">a</span>
//                     </div>
//                     <Card.Title className="fw-bold mb-2">أورمينيو</Card.Title>
//                     <Card.Text className="mb-3">حل القائمة الرقمية مع طلب عبر رمز الاستجابة السريعة (QR)</Card.Text>
//                     <div className="price-section mb-3">
//                       <div className="price fw-bold">456 / شهريا</div>
//                       <div className="trial">تجربة مجانية لمدة 3 أشهر متضمنة</div>
//                     </div>
//                     <ul className="features-list text-end">
//                       <li>إنشاء قائمة عبر رمز الاستجابة السريعة (QR)</li>
//                       <li>تحديثات فورية للقائمة</li>
//                       <li>دعم متعدد اللغات</li>
//                       <li>تخصيص الهوية البصرية</li>
//                     </ul>
//                     <Button className='w-100'>اضف الي العربه</Button>
//                   </Card.Body>
//                 </Card>
//               </Col>

//               {/* Card 2 - أوربوس (Ourpos) */}
//               <Col lg={4} md={6}>
//                 <Card className="solution-card h-100">
//                   <Card.Body className="text-center p-4">
//                     <div className="solution-icon mb-3">
//                       <span className="icon-text">a</span>
//                     </div>
//                     <Card.Title className="fw-bold mb-2">أوربوس</Card.Title>
//                     <Card.Text className="mb-3">نظام نقاط بيع كامل قائم على السحابة</Card.Text>
//                     <div className="price-section mb-3">
//                       <div className="price fw-bold">495 / شهريا</div>
//                       <div className="trial">تشمل تجربة مجانية مدتها 3 أشهر</div>
//                     </div>
//                     <ul className="features-list text-end">
//                       <li>نظام نقاط بيع مستند إلى السحابة</li>
//                       <li>إدارة المخزون</li>
//                       <li>تقارير المبيعات</li>
//                       <li>إدارة الموظفين</li>
//                     </ul>
//                     <Button className='w-100'>اضف الي العربه</Button>
//                   </Card.Body>
//                 </Card>
//               </Col>

//               {/* Card 3 - أورست (Ourrest) */}
//               <Col lg={4} md={12}>
//                 <Card className="solution-card h-100">
//                   <Card.Body className="text-center p-4">
//                     <div className="solution-icon mb-3">
//                       <span className="icon-text">a</span>
//                     </div>
//                     <Card.Title className="fw-bold mb-2">أورست</Card.Title>
//                     <Card.Text className="mb-3">حزمة إدارة المطاعم</Card.Text>
//                     <div className="price-section mb-3">
//                       <div className="price fw-bold">1,499 / شهريا</div>
//                       <div className="trial">تجربة مجانية 3 أشهر متضمنة</div>
//                     </div>
//                     <ul className="features-list text-end">
//                       <li>إدارة الطاولات</li>
//                       <li>نظام عرض المطبخ</li>
//                       <li>إدارة علاقات العملاء</li>
//                       <li>إدارة الموظفين</li>
//                     </ul>
//                     <Button className='w-100'>اضف الي العربه</Button>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             </Row>