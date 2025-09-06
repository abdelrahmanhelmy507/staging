import React from "react";
import { Row, Col, Button, Badge } from "react-bootstrap";
import "./pricing.css";

export default function Pricing() {
  return (
    <div className="pricing-content">
      <h2 className="text-center fw-bold py-4 mb-4">حزم جاهزة للعمل</h2>
      <Row className="g-0">
        {/* AurPOS */}
        <Col lg={6} md={6} sm={12}>
          <div className="pricing-card">
            <img src="./aurpos.png" alt="AurPOS" className="pricing-img" />
            <div className="overlay">
              <h3 className="fw-bold mb-2">AurPOS (أوربوس)</h3>
              <p>نظام نقاط بيع (Point of Sale) للمطاعم والكافيهات.</p>
              <ul>
                <li>تسجيل و إدارة المبيعات بسرعة.</li>
                <li>دعم الدفع النقدي و الإلكتروني.</li>
                <li>إدارة الفواتير و الطابعات.</li>
                <li>ربط مباشر مع AurMenu و AurRest.</li>
                <li>تقارير لحظية عن المبيعات و الإيرادات.</li>
              </ul>
              <div className="d-flex align-items-center justify-content-between mt-3">
                <Button className="btn-primary-glow custom-button">أضف إلى العربة</Button>
                <div className="d-flex align-items-baseline gap-2">
                  <Badge bg="success">
                    وفر 800 <img src="./sar.svg" width={18} alt="SAR" />
                  </Badge>
                  <div className="price">
                    <span>
                      1295 <img src="./sar.svg" width={18} alt="SAR" />
                    </span>
                    <del className="text-muted">
                      2092 <img src="./sar.svg" width={18} alt="SAR" />
                    </del>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>

        {/* AurMenu */}
        <Col lg={6} md={6} sm={12}>
          <div className="pricing-card">
            <img src="./aurmenu.png" alt="AurMenu" className="pricing-img" />
            <div className="overlay">
              <h3 className="fw-bold mb-2">AurMenu (أورمينيو)</h3>
              <p>نظام المنيو الذكي (Digital Menu).</p>
              <ul>
                <li>تحديث الأسعار و الأصناف بشكل لحظي.</li>
                <li>دعم الصور و الوصف لكل صنف.</li>
                <li>ربط مباشر مع AurPOS من اجل تسجيل الطلب أوتوماتيك.</li>
                <li>تحسين تجربة العميل و تقليل وقت الانتظار.</li>
                <li>عرض المنيو على شاشات أو QR Code.</li>
              </ul>
              <div className="d-flex align-items-center justify-content-between mt-3">
                <Button className="btn-primary-glow custom-button">أضف إلى العربة</Button>
                <div className="d-flex align-items-baseline gap-2">
                  <Badge bg="success">
                    وفر 800 <img src="./sar.svg" width={18} alt="SAR" />
                  </Badge>
                  <div className="price">
                    <span>
                      1295 <img src="./sar.svg" width={18} alt="SAR" />
                    </span>
                    <del className="text-muted">
                      2092 <img src="./sar.svg" width={18} alt="SAR" />
                    </del>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>

        {/* AurRest */}
        <Col lg={6} md={6} sm={12}>
          <div className="pricing-card">
            <img src="./aurest.png" alt="AurRest" className="pricing-img" />
            <div className="overlay">
              <h3 className="fw-bold mb-2">AurRest (أورست)</h3>
              <p>النظام المتكامل لإدارة المطاعم.</p>
              <ul>
                <li>شاشة المدير (Dashboard) لمتابعة الأداء و المبيعات.</li>
                <li>إدارة الطلبات (Dine-in, Takeaway, Delivery).</li>
                <li>نظام Kitchen Display System (KDS).</li>
                <li>نظام التوصيل و متابعة الكباتن.</li>
                <li>إضافات: الجرد، كابتن الصالة، الخدمة الذاتية.</li>
              </ul>
              <div className="d-flex align-items-center justify-content-between mt-3">
                <Button className="btn-primary-glow custom-button">أضف إلى العربة</Button>
                <div className="d-flex align-items-baseline gap-2">
                  <Badge bg="success">
                    وفر 800 <img src="./sar.svg" width={18} alt="SAR" />
                  </Badge>
                  <div className="price">
                    <span>
                      1295 <img src="./sar.svg" width={18} alt="SAR" />
                    </span>
                    <del className="text-muted">
                      2092 <img src="./sar.svg" width={18} alt="SAR" />
                    </del>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>

        {/* AurAcc */}
        <Col lg={6} md={6} sm={12}>
          <div className="pricing-card">
            <img src="./auracc.png" alt="AurAcc" className="pricing-img" />
            <div className="overlay">
              <h3 className="fw-bold mb-2">AurAcc (أوراك)</h3>
              <p>النظام المالي و المحاسبي.</p>
              <ul>
                <li>إدارة الحسابات العامة (General Ledger).</li>
                <li>ربط مباشر مع AurPOS و AurRest لضبط الحسابات أوتوماتيك.</li>
                <li>متابعة الرواتب و الموردين.</li>
                <li>تقارير مالية مفصلة (Daily, Monthly, Annual).</li>
                <li>إدارة المصروفات و الإيرادات.</li>
              </ul>
              <div className="d-flex align-items-center justify-content-between mt-3">
                <Button className="btn-primary-glow custom-button">أضف إلى العربة</Button>
                <div className="d-flex align-items-baseline gap-2">
                  <Badge bg="success">
                    وفر 800 <img src="./sar.svg" width={18} alt="SAR" />
                  </Badge>
                  <div className="price">
                    <span>
                      1295 <img src="./sar.svg" width={18} alt="SAR" />
                    </span>
                    <del className="text-muted">
                      2092 <img src="./sar.svg" width={18} alt="SAR" />
                    </del>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}