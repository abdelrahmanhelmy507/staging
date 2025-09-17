import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import './aurmenu.css';

export default function AurmenuHero() {
  const { t } = useTranslation();

  return (
    <>
      <div className="store-hero-slide aurmenu-hero-p">
        <img
          className="d-block w-100"
          src="/staging/images/aurmenuhero.jpg"
          alt="Second slide"
        />
        <div className="overlay"></div>
        <div className="hero-content">
          <img src="/staging/images/aurmenu-logo-light.png" alt="" className="aurmenu-logo mb-4"/>
          <h1>{t("نظام إدارة القوائم الذكي")}</h1>
          <p>{t("طريقتك الأسهل لإدارة وعرض القوائم بشكل ذكي وسريع يجذب عملاءك")}</p>
          <div className="hero-buttons">
            <Button size="lg" className="mx-2 aurmenu-bg-color">
              {t("ابدأ الان")}
            </Button>
            <Button size="lg" className="mx-2 aurmenu-bg-color">
              {t("شاهد العرض")}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
