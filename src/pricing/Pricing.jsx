import React from "react";
import { Badge, Row, Col, Card, Button } from "react-bootstrap";
import "./pricing.css";
export default function Pricing() {
  return (
    <>
    <div className="pricing-content ">
      <h2 className="text-center fw-bold py-4 mb-4">حزم جاهزة للعمل</h2>
      <Row className="g-0 h-100">
        <Col lg={6}>
          <Card >
            <div className="card-content">
              <div className="image">
                <img src="./aurpos.png" alt="" />
              </div>

              <div className="info">
                <h3 className="fw-bold mb-2"> AurPOS (أوربوس)  </h3>
                <p className=" mb-4"> نظام نقاط بيع (Point of Sale) للمطاعم والكافيهات.</p>
                
                 <ul className="custom-features-list">
                          <li>تسجيل و إدارة المبيعات بسرعة.</li>
                          <li>دعم الدفع النقدي و الإلكتروني.</li>
                          <li>إدارة الفواتير و الطابعات.</li>
                          <li>ربط مباشر مع باقي أنظمة Aurages زي AurMenu و AurRest</li>
                          <li>تقارير لحظية عن المبيعات و الإيرادات.</li> 
                        </ul>
               <div className="d-flex align-items-baseline justify-content-between">
                 <Button className="btn-primary-glow custom-button">
                  أضف إلى العربة
                </Button>
                <div className="d-flex align-items-baseline justify-content gap-3 ">
                  <Badge bg="success"><span>
                    وفر 800
                    <img
                      className="sar me-2"
                      src="./sar.svg"
                      width={20}
                      alt=""
                    />
                  </span></Badge>
                  <div className="price">
                    <span className="">
                      1295
                      <img
                        className="sar me-2 ms-3"
                        src="./sar.svg"
                        width={20}
                        alt=""
                      />
                    </span>
                    <del className="text-muted">
                      2092
                      <img
                        className="sar me-2 "
                        src="./sar.svg"
                        width={20}
                        alt=""
                      />
                    </del>
                  </div>
                </div>
               </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col lg={6}>
          <Card >
            <div className="card-content">
              <div className="image">
                <img src="./aurmenu.png" alt="" />
              </div>

              <div className="info">
                <h3 className="fw-bold mb-2"> AurMenu (أورمينيو) </h3>
                <p className=" mb-4">نظام المنيو الذكي (Digital Menu).</p>
                
                 <ul className="custom-features-list">
                          <li>تحديث الأسعار و الأصناف بشكل لحظي.</li>
                          <li>دعم الصور و الوصف لكل صنف.</li>
                          <li>ربط مباشر مع AurPOS من اجل تسجيل الطلب  أوتوماتيك.</li>
                          <li>تحسين تجربة العميل و تقليل وقت الانتظار.</li>
                          <li>عرض المنيو على شاشات أو QR Code</li>
                        </ul>
               <div className="d-flex align-items-baseline justify-content-between">
                 <Button className="btn-primary-glow custom-button">
                  أضف إلى العربة
                </Button>
                <div className="d-flex align-items-baseline justify-content gap-3 ">
                  <Badge bg="success"><span>
                    وفر 800
                    <img
                      className="sar me-2"
                      src="./sar.svg"
                      width={20}
                      alt=""
                    />
                  </span></Badge>
                  <div className="price">
                    <span className="">
                      1295
                      <img
                        className="sar me-2 ms-3"
                        src="./sar.svg"
                        width={20}
                        alt=""
                      />
                    </span>
                    <del className="text-muted">
                      2092
                      <img
                        className="sar me-2 "
                        src="./sar.svg"
                        width={20}
                        alt=""
                      />
                    </del>
                  </div>
                </div>
               </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col lg={6}>
          <Card >
            <div className="card-content">
              <div className="image">
                <img src="./aurest.png" alt="" />
              </div>

              <div className="info">
                <h3 className="fw-bold mb-2"> AurRest (أورست) </h3>
                <p className=" mb-4"> النظام المتكامل لإدارة المطاعم (Restaurant Management System).</p>
                
                 <ul className="custom-features-list">
                          <li>شاشة المدير (Dashboard) لمتابعة الأداء و المبيعات.</li>
                          <li>إدارة الطلبات (Dine-in, Takeaway, Delivery).</li>
                          <li>نظام Kitchen Display System (KDS).</li>
                          <li>نظام التوصيل و متابعة الكباتن.</li>
                          <li>إضافات: الجرد، كابتن الصالة، الخدمة الذاتية.</li>
                          <li>حزم متعددة (Lite, Basic, Pro, Ultimate) تناسب حجم المشروع.</li>
                        </ul>
               <div className="d-flex align-items-baseline justify-content-between">
                 <Button className="btn-primary-glow custom-button">
                  أضف إلى العربة
                </Button>
                <div className="d-flex align-items-baseline justify-content gap-3 ">
                  <Badge bg="success"><span>
                    وفر 800
                    <img
                      className="sar me-2"
                      src="./sar.svg"
                      width={20}
                      alt=""
                    />
                  </span></Badge>
                  <div className="price">
                    <span className="">
                      1295
                      <img
                        className="sar me-2 ms-3"
                        src="./sar.svg"
                        width={20}
                        alt=""
                      />
                    </span>
                    <del className="text-muted">
                      2092
                      <img
                        className="sar me-2 "
                        src="./sar.svg"
                        width={20}
                        alt=""
                      />
                    </del>
                  </div>
                </div>
               </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col lg={6}>
          <Card >
            <div className="card-content">
              <div className="image">
                <img src="./auracc.png" alt="" />
              </div>

              <div className="info">
                <h3 className="fw-bold mb-2"> AurAcc (أوراك)  </h3>
                <p className=" mb-4">النظام المالي و المحاسبي (Accounting System).</p>
                
                 <ul className="custom-features-list">
                          <li>إدارة الحسابات العامة (General Ledger).</li>
                          <li>ربط مباشر مع AurPOS و AurRest لضبط الحسابات أوتوماتيك.</li>
                          <li>متابعة الرواتب و الموردين.</li>
                          <li>تقارير مالية مفصلة (Daily, Monthly, Annual).</li>
                          <li>إدارة المصروفات و الإيرادات.</li>
                        </ul>
               <div className="d-flex align-items-baseline justify-content-between">
                 <Button className="btn-primary-glow custom-button">
                  أضف إلى العربة
                </Button>
                <div className="d-flex align-items-baseline justify-content gap-3 ">
                  <Badge bg="success"><span>
                    وفر 800
                    <img
                      className="sar me-2"
                      src="./sar.svg"
                      width={20}
                      alt=""
                    />
                  </span></Badge>
                  <div className="price">
                    <span className="">
                      1295
                      <img
                        className="sar me-2 ms-3"
                        src="./sar.svg"
                        width={20}
                        alt=""
                      />
                    </span>
                    <del className="text-muted">
                      2092
                      <img
                        className="sar me-2 "
                        src="./sar.svg"
                        width={20}
                        alt=""
                      />
                    </del>
                  </div>
                </div>
               </div>
              </div>
            </div>
          </Card>
        </Col>
      
      </Row>
      </div>
    </>
  );
}
