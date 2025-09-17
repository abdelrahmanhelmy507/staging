import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { IoMdStarOutline } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import "./services.css";

export default function Services() {
  const { t } = useTranslation();
  return (
   <>
   <section>
  <div className="my-4 pt-4">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 text-center">
          <img src="/staging/images/OBJECTS.png" alt="" className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <h2 className="head-font text-right" style={{ fontSize: "52px" }}>
            {t("عن")} <span style={{ color: "#0583f2" }}>{t("أوريجس")}</span>
          </h2>
          <p className="text-right">
            {t("يمثل Aurages رمزًا للتكنولوجيا والإبداع في عالم الأعمال والتقدم مجموعة متنوعة من الخدمات المتخصصة في مجال تكنولوجيا المعلومات والتنمية برمجة. تأسست الشركة على أسس قوية من الاحتراف والابتكار لتلبية احتياجات الشركات والأفراد من خلال الحلول التكنولوجية المبتكرة")}
          </p>
        </div>
      </div>
    </div>
  </div>

  <div style={{ backgroundColor: "#f2f4f7" }}>
    <div className="container">
      <div className="text-center py-5">
        <img
          src="/staging/images/aurages.png"
          className="mb-4 img-fluid"
          alt="aurages"
        />
        <h2 className="head-font" style={{ fontSize: "52px" }}>
          {t("شركاتنا")}
        </h2>
        <p style={{ fontSize: "24px", lineHeight: "28px", color: "#000" }}>
          {t("تعرف على كيف يمكن لمنصة Aurages والتطبيقات التابعة لها أن تجعل عملك على مستوى عالٍ من التنظيم والدقة لجعل نشاطك ينمو بشكل مطرد مع تكامل واسع النطاق للتكيف مع جميع الأنشطة.")}
        </p>
        <div className="d-md-flex justify-content-center flex-wrap gap-3">
          <img
            data-wow-delay="100ms"
            className="wow fadeInRight img-fluid"
            src="/staging/images/aurages a 2 .png"
            alt="Aurpos logo"
          />
          <img
            data-wow-delay="200ms"
            className="wow fadeInRight img-fluid"
            src="/staging/images/aurages logo.png"
            alt="aurages logo"
          />
          <img
            data-wow-delay="300ms"
            className="wow fadeInRight img-fluid"
            src="/staging/images/aurest logo.png"
            alt="aurest logo"
          />
          <img
            data-wow-delay="400ms"
            className="wow fadeInRight img-fluid"
            src="/staging/images/aurmenu logo.png"
            alt="aurmenu logo"
          />
        </div>
      </div>
    </div>
  </div>
</section>




   </>
  );
}
