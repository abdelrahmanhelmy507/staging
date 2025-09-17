import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../stor.css";

export default function AuraccHero() {
  const { t } = useTranslation();

  return (
    <>
      <div className="store-hero-slide">
        <img
          className="d-block w-100"
          src="/staging/images/auracc3.jpg"
          alt={t("Second slide")}
        />
        <div className="overlay"></div>
        <div className="hero-content">
          <img src="/staging/images/auracc-logo.png" alt="" className="aurmenu-logo mb-4"/>
          <h1>{t("نظام محاسبي متكامل لإدارة أعمالك بسهولة")}</h1>
          <p>
            {t("حل محاسبي ذكي يساعدك على متابعة الحسابات، إصدار الفواتير، إدارة المصروفات، وتحليل الأرباح بسهولة وفي مكان واحد.")}
          </p>
          <div className="hero-buttons">
            <Button variant="primary" size="lg" className="mx-2">
              {t("ابدأ الان")}
            </Button>
            <Button size="lg" className="mx-2">
              {t("شاهد العرض")}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
