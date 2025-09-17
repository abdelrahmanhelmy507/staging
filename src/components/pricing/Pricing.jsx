import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./pricing.css";

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <div className="pricing-content">
      <Row className="g-0">
        {/* AurPOS */}
        <Col lg={6} md={6} sm={12}>
          <div className="pricing-card">
            <img src="./images/aurpos2.jpg" alt="AurPOS" className="pricing-img" />
            <div className="overlay">
              <h3 className="fw-bold mb-2">{t("AurPOS (أوربوس)")}</h3>
              <p>{t("إدارة مالية سهلة ودقيقة")}</p>
              <div className="d-flex align-items-center justify-content-between mt-3">
                <Button className="btn-primary-glow custom-button mx-3">{t("اعرف المزيد")}</Button>
                <Button className="btn-primary-glow custom-button mx-3">{t("اشترك الان")}</Button>
              </div>
            </div>
          </div>
        </Col>

        {/* AurMenu */}
        <Col lg={6} md={6} sm={12}>
          <div className="pricing-card">
            <img src="./images/aurmenu3.jpg" alt="AurMenu" className="pricing-img" />
            <div className="overlay">
              <h3 className="fw-bold mb-2">{t("AurMenu (أورمينيو)")}</h3>
              <p>{t("منيو رقمي ذكي وفوري")}</p>
              <div className="d-flex align-items-center justify-content-between mt-3">
                <Button className="btn-primary-glow custom-button mx-3">{t("اعرف المزيد")}</Button>
                <Button className="btn-primary-glow custom-button mx-3">{t("اشترك الان")}</Button>
              </div>
            </div>
          </div>
        </Col>

        {/* AurRest */}
        <Col lg={6} md={6} sm={12}>
          <div className="pricing-card">
            <img src="./images/aurest2.jpg" alt="AurRest" className="pricing-img" />
            <div className="overlay">
              <h3 className="fw-bold mb-2">{t("AurRest (أورست)")}</h3>
              <p>{t("تحكم كامل في أعمال المطعم")}</p>
              <div className="d-flex align-items-center justify-content-between mt-3">
                <Button className="btn-primary-glow custom-button mx-3">{t("اعرف المزيد")}</Button>
                <Button className="btn-primary-glow custom-button mx-3">{t("اشترك الان")}</Button>
              </div>
            </div>
          </div>
        </Col>

        {/* AurAcc */}
        <Col lg={6} md={6} sm={12}>
          <div className="pricing-card">
            <img src="./images/storehero.jpg" alt="AurAcc" className="pricing-img" />
            <div className="overlay">
              <h3 className="fw-bold mb-2">{t("AurAcc (أوراك)")}</h3>
              <p>{t("النظام المالي و المحاسبي.")}</p>
              <div className="d-flex align-items-center justify-content-between mt-3">
                <Button className="btn-primary-glow custom-button mx-3">{t("اعرف المزيد")}</Button>
                <Button className="btn-primary-glow custom-button mx-3">{t("اشترك الان")}</Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
