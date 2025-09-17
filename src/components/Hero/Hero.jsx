// components/Hero.jsx

import { useTranslation } from "react-i18next";
import { Carousel, Button, Row, Col, Container } from "react-bootstrap";
import "./Hero.css";

export default function Hero() {
  const { t, i18n } = useTranslation();

  return (
    <div className="hero-section">
      <Carousel controls={false} indicators={false} fade interval={3000}>
        {/* Slide 1 */}
        {/* <Carousel.Item>
          <div className="hero-slide mt-5 pt-5">
            <img
              className="d-block w-100"
              src="./nat.png"
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
        </Carousel.Item> */}
        {/* <Carousel.Item>

        </Carousel.Item> */}

        {/* Slide 2 */}
        {/* <Carousel.Item>
          <div className="hero-slide ">
           
            <div className="info pe-5 me-5"> */}
        {/* <img className="logo" src="./nationalLogo.png" alt="" width={400}/> */}

        {/* <h1 className="title">مستقبل تكنولوجيا المطاعم</h1>
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
            <div className="image pt-5">
              <img src="./slide7.png" alt="" width={600} />
            </div>
           
           
          </div>
        </Carousel.Item> */}

        {/* Slide 3 - اليوم الوطني 95 */}

        <Carousel.Item>
          <div className="hero-slide national-day-hero ">
            <div className="logo">
              <img
                className="d-block w-100"
                src="/staging/images/nationalLogo.png"
                alt={t("اليوم الوطني السعودي")}
              />
            </div>
            <div className="overlay-national-day"></div>
            <div className="hero-content-national">
              <div className="national-day-badge mb-3">
                <span className="badge-text">
                  {t("اليوم الوطني السعودي 94")}
                </span>
              </div>
              <h1 className="national-day-title">
                {t("نحتفل معاً بـ")}{" "}
                <span className="highlight-green">{t("95 عاماً")}</span>{" "}
                {t("من التقدم والازدهار")}
              </h1>
              <p className="national-day-subtitle">
                {t(
                  "بمناسبة اليوم الوطني السعودي، نفتخر بخدمة المملكة بأحدث الحلول التقنية."
                )}{" "}
                <br />
                <strong>
                  {t(
                    "عروض خاصة على جميع أنظمتنا احتفالاً بهذه المناسبة العزيزة"
                  )}
                </strong>
              </p>

              <div className="hero-buttons national-day-buttons">
                <Button
                  variant="success"
                  size="lg"
                  className="me-3 national-btn"
                >
                  🎉 {t("اكتشف العروض الخاصة")}
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="national-btn-outline"
                >
                  {t("تواصل معنا")}
                </Button>
              </div>

              <div className="national-day-footer mt-4">
                <p className="mb-0">
                  <span className="saudi-colors">🟢⚪🟢</span>
                  <strong>{t("كل عام وأنتم بخير")}</strong>
                  <span className="saudi-colors">🟢⚪🟢</span>
                </p>
                <p className="mt-5">{t("امتلك جميع البيانات اللازمة لتنمية مشروعك بشكل أسرع")}</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
