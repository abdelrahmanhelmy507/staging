import React from "react";
import { Button } from "react-bootstrap";
import "../stor.css";
export default function AuraccHero() {
  return (
    <>
      <div className="store-hero-slide ">
        <img
          className="d-block w-100"
          src="/staging/images/auracc3.jpg"
          alt="Second slide"
        />
        <div className="overlay"></div>
        <div className="hero-content">
          <h1> نظام محاسبي متكامل لإدارة أعمالك بسهولة </h1>
          <p>
            حل محاسبي ذكي يساعدك على متابعة الحسابات، إصدار الفواتير، إدارة
            المصروفات، وتحليل الأرباح بسهولة وفي مكان واحد.
          </p>
          <div className="hero-buttons">
            <Button variant="primary" size="lg" className=" mx-2">
              ابدأ الآن
            </Button>
            <Button size="lg" className="mx-2">
              شاهد العرض
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
