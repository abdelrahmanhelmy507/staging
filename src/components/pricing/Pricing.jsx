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
            <img src="./images/aurpos2.jpg" alt="AurPOS" className="pricing-img" />
            <div className="overlay">
              <h3 className="fw-bold mb-2">AurPOS (أوربوس)</h3>
              <p>نظام نقاط بيع (Point of Sale) للمطاعم والكافيهات.</p>
              
              <div className="d-flex align-items-center justify-content-between mt-3">
                 <Button className="btn-primary-glow custom-button mx-3"> اعرف المزيد  </Button>
                <Button className="btn-primary-glow custom-button mx-3">  اشترك الان </Button>
                <div className="d-flex align-items-baseline gap-2">
                 
                </div>
              </div>
            </div>
          </div>
        </Col>

        {/* AurMenu */}
        <Col lg={6} md={6} sm={12}>
          <div className="pricing-card">
            <img src="./images/aurmenu3.jpg" alt="AurMenu" className="pricing-img" />
            <div className="overlay">
              <h3 className="fw-bold mb-2">AurMenu (أورمينيو)</h3>
              <p>نظام المنيو الذكي (Digital Menu).</p>
              
              <div className="d-flex align-items-center justify-content-between mt-3">
                 <Button className="btn-primary-glow custom-button mx-3"> اعرف المزيد  </Button>
                <Button className="btn-primary-glow custom-button mx-3">  اشترك الان </Button>
                <div className="d-flex align-items-baseline gap-2">
                 
                 
                </div>
              </div>
            </div>
          </div>
        </Col>

        {/* AurRest */}
        <Col lg={6} md={6} sm={12}>
          <div className="pricing-card">
            <img src="./images/aurest2.jpg" alt="AurRest" className="pricing-img" />
            <div className="overlay">
              <h3 className="fw-bold mb-2">AurRest (أورست)</h3>
              <p>النظام المتكامل لإدارة المطاعم.</p>
              
              <div className="d-flex align-items-center justify-content-between mt-3">
                 <Button className="btn-primary-glow custom-button mx-3"> اعرف المزيد  </Button>
                <Button className="btn-primary-glow custom-button mx-3">  اشترك الان </Button>
               
              </div>
            </div>
          </div>
        </Col>

        {/* AurAcc */}
        <Col lg={6} md={6} sm={12}>
          <div className="pricing-card">
            <img src="./images/storehero.jpg" alt="AurAcc" className="pricing-img" />
            <div className="overlay">
              <h3 className="fw-bold mb-2 ">AurAcc (أوراك)</h3>
              <p>النظام المالي و المحاسبي.</p>
              
              <div className="d-flex align-items-center justify-content-between mt-3">
                <Button className="btn-primary-glow custom-button mx-3"> اعرف المزيد  </Button>
                <Button className="btn-primary-glow custom-button mx-3">  اشترك الان </Button>
                <div className="d-flex align-items-baseline gap-2">
                  
                 
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}