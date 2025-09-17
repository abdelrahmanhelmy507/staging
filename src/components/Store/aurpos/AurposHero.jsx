import { Button } from "react-bootstrap";
import "./aurpos.css";
import { useTranslation } from "react-i18next";

export default function AurposHero() {
  const { t } = useTranslation();

  return (
    <div className="store-hero-slide">
      <img
        className="d-block w-100"
        src="/staging/images/aurpos2.jpg"
        alt={t("Second slide")}
      />
      <div className="overlay"></div>
      <div className="hero-content">
        <img src="/staging/images/aurpos-logo.webp" alt="Aurpos Logo" className="aurmenu-logo mb-4"/>
        <h1>{t("إدارة متكاملة لحساباتك")}</h1>
        <p>
          {t("نظام محاسبي متطور يمكنك استخدامه أينما كنت لمتابعة سير أعمالك بدقة")}
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
  );
}
