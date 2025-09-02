// components/Hero.jsx
import React from "react";
import { Carousel, Button, Row, Col, Container } from "react-bootstrap";
import './Hero.css'

export default function Hero() {
  return (
    <div className="hero-section">
      <Carousel controls={false} indicators={false} fade interval={3000}>
        
        {/* Slide 1 */}
        <Carousel.Item>
          <div className="hero-slide">
            <img
              className="d-block w-100"
              src="./slide1.jpg"
              alt="Second slide"
            />
            <div className="overlay2"></div>
            <div className="hero-content2">
              <h1>مستقبل تكنولوجيا المطاعم</h1>
              <p>
                نظام نقاط البيع الكامل مع أجهزة وحلول SaaS متكاملة.
                <br />
                من الدفع عبر الهاتف إلى شاشات المطبخ، حوّل نشاطك الفندقي مع أوريجس.
              </p>
              <div className="hero-buttons">
                <Button variant="primary" size="lg" className="me-2">
                  ابدأ الآن
                </Button>
                <Button  size="lg">
                  شاهد العرض
                </Button>
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <div className="hero-slide ">
           
            <div className="info pe-5 me-5">
              {/* <img className="logo" src="./nationalLogo.png" alt="" width={400}/> */}
              
              <h1 className="title">مستقبل تكنولوجيا المطاعم</h1>
              <p className="pt-5 subtitle1  mb-0">بمناسبه اليوم الوطني السعويدي 95 </p>
              <h2 className="">  خصم اكثر من <span className="numbrer">50%</span></h2>
              
              <div className="">
              <p>
                نظام نقاط البيع الكامل مع أجهزة وحلول SaaS متكاملة.
                <br />
                من الدفع عبر الهاتف إلى شاشات المطبخ، حوّل نشاطك الفندقي مع أوريجس.
              </p>
              <div className="hero-buttons">
                <Button variant="primary" size="lg" className="me-2">
                  ابدأ الآن
                </Button>
                <Button  size="lg">
                  شاهد العرض
                </Button>
              </div>
            </div>
            </div>
            <div className="image pt-5 mt-5">
              <img src="./slide7.png" alt="" width={600} />
            </div>
           
           
          </div>
        </Carousel.Item>

        {/* Slide 3 - اليوم الوطني 95 */}
      

      </Carousel>
    </div>
  );
}
