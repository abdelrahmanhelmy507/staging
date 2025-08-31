// components/Hero.jsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Hero() {
  return (
    <section className="hero-section d-flex align-items-center pb-5" id="home">
      <Container>
        <Row className="align-items-center g-4 container">
          <Col md={6} sm={12}>
            <h1 className="display-4 fw-bold title">
              <span style={{color : "var(--primary-light)"}}>مستقبل</span> <br/>تكنولوجيا المطاعم
            </h1>
            <p className=" mb-4">
              نظام نقاط بيع كامل مع تكامل SaaS، تقارير فورية، ودفع عبر الهاتف.
            </p>
            <div className="d-flex gap-3 hero-buttons">
              <Button size="lg" className="btn-primary-glow hero-button " href="#pricing">
                ابدأ الآن
              </Button>
              <Button size="lg" className="hero-button " href="#products">
                شاهد العرض
              </Button>
            </div>
            <div className="hero-numbers ">
              <div className="info">
                <p>7/24</p>
                <p>دعم</p>
              </div>
              <div className="info">
                <p>99%</p>
                <p>lمده التشغيل</p>
              </div>
              <div className="info">
                <p>+1000</p>
                <p>شركات ناشطه </p>
              </div>
            </div>
          </Col>
          <Col md={6} sm={12}> 
            <div className="  d-flex gap-2 mt-3 mt-lg-0 ">
              <div className="front-pos">
                <div className="image">
                  <img src="/public/unnamed.png" alt=""  />
                </div>
                <h3 dir="ltr" className="pos-title">Front POS 16</h3>
                <ul className="list-unstyled small mb-4 pos-ul">
                  <li>Go 5 Lite جهاز</li>
                  <li>اشتراك أوروبس لمدة 3 أشهر</li>
                  <li>إعداد وتدريب</li>
                  <li>إعداد وتدريب</li>
                </ul>
                <div className="pricing d-flex justfiy-content-space-between">
                  <Button size="md" className="hero-button " href="#products">
                اضف الي العربه
              </Button>
              <div className="price">
                <span className="">1295 ﷼</span>
                  <del className="del">2092 ﷼</del>
              </div>
                </div>
              </div>
                
            </div>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
}
