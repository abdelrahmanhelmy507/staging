import "./Header.css";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import React, { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
export default function Header() {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const changeLang = () => {
    i18n.language === "ar"
      ? i18n.changeLanguage("en")
      : i18n.changeLanguage("ar");
  };

  const toggleAccordion = (menuName) => {
    setExpandedMenu(expandedMenu === menuName ? null : menuName);
  };

  const closeModal = () => {
    setShow(false);
    setExpandedMenu(null);
  };

  return (
    <header className="header ">
      <div className="header-container gap-1 ">
        {/* Mobile menu toggle */}
        <div className="mobile-menu-toggle">
          <MdMenu
            onClick={() => {
              setShow(true);
            }}
          />
        </div>
        {/* Logo */}
        <div className="logo mx-3">
          <Link to={"/"}>
            <img src="/staging/images/AuragesLogo.png" alt="" width={100} />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                {t("الرئيسيه")}
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link className="nav-link" to={"/store"}>
                {t("  أورمينيو")}
              </Link>
              <div className="dropdown">
                <div className="dropdown-content">
                  <Link to={"/store/aurest"} className="nav-link">
                    {t("اورست")}
                  </Link>
                </div>
                <div className="dropdown-content">
                  <Link to={"/store/aurmenu"} className="nav-link">
                    {t("اورمينيو")}
                  </Link>
                </div>
                <div className="dropdown-content">
                  <Link to={"/store/auracc"} className="nav-link">
                    {t("اوراك")}
                  </Link>
                </div>
                <div className="dropdown-content">
                  <Link to={"/store/aurpos"} className="nav-link">
                    {t("اوربوس ")}
                  </Link>
                </div>
              </div>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to={"/store/aurmenu"}>
                {t("أورمينيو")}
              </Link>
              <div className="dropdown">
                <Row>
                  <Col lg={2} md={6} sm={12}></Col>
                  <Col lg={1} md={6} sm={12}></Col>
                  <Col className="dropdown-col" lg={2} md={6} sm={12}>
                     <p>{t("استكشاف الجميع")}</p>
                    <ul className="dropdown-ul">
                      <li>
                        <Link
                          to={"/store/aurmenu/products/7"}
                          className="aurmenu"
                        >
                          {t("أورمينيو البدايه")}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/products/8"}className="aurmenu" >
                          {" "}
                           {t("أورمينيو التقدم")}
                        </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to={"/store/aurmenu/products/9"}className="aurmenu">
                           {t("أورمينيو التميز")}
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link to={"/store/aurmenu/products/10"}className="aurmenu">
                           {t("أورمينيو الاحتراف")}
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col className="dropdown-col" lg={2} md={6} sm={12}>
                    <p>{t("إضافات اورمنيو")} </p>
                    <ul className="dropdown-ul ">
                      <li>
                        <Link className="aurmenu">{t("المزيد من الإضافات")}</Link>
                      </li>
                      <li>
                        <Link className="aurmenu">
                         {t("جهاز أورمينيو استقبال الطلبات")}

                        </Link>
                      </li>
                      <li>
                        <Link className="aurmenu"> {t("جهاز أورمينيو الإشعارات")}</Link>
                      </li>
                      <li>
                        <Link className="aurmenu">    {t("طباعة رمز QR")}</Link>
                      </li>
                      <li>
                        <Link className="aurmenu">  {t("أجهزة NFC")}</Link>
                      </li>
                      <li>
                        <Link className="aurmenu"> {t("حلول تسويقية")}</Link>
                      </li>
                    </ul>
                  </Col>
                  <Col className="dropdown-col" lg={2} md={6} sm={12}>
                    <p>  {t("المزيد من اورمينيو")} </p>
                    <ul className=" dropdown-ul">
                      <li>
                        <Link to={"/store/aurmenu/agentcontact"}className="aurmenu">
                          
                          {t("تواصل معنا")}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/about"}className="aurmenu">{t("حول اورمنيو")}</Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/features"}className="aurmenu">{t("المميزات")}</Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/support"}className="aurmenu">
                          {t("مركز المساندة والدعم")}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/education"}className="aurmenu">
                          {t("التدريب والتعليم")}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/careers"}className="aurmenu">{t("التوظيف")}</Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"store/aurest"}>
                {t("أوريست")}
              </Link>
              <div className="dropdown">
                <Row>
                  <Col lg={2} md={6} sm={12}></Col>
                  <Col lg={1} md={6} sm={12}></Col>
                  <Col className="dropdown-col" lg={2} md={6} sm={12}>
                    <p>{t("استكشاف الجميع")}</p>
                    <ul className="dropdown-ul">
                      <li>
                        <Link to={"/store/aurest"} className="aurest">{t("جميع الباقات")}</Link>
                      </li>
                      <li>
                        <Link to={"/store/aurest/products/7"} className="aurest">
                          {t("هايبر أورست لايت")}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurest/products/7"}className="aurest">
                          {t("أجهزة أورست لايت")}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurest/products/8"}className="aurest">
                          {t("هايبر أورست بيسك")}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurest/products/8"} className="aurest">
                          {t("أجهزة أورست بيسك")}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurest/products/9"}className="aurest">
                          {t("هايبر أورست برو")}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurest/products/9"}className="aurest">
                          {t("أجهزة أورست برو")}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurest/products/10"}className="aurest">
                          {t("هايبر أورست التيمت")}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurest/products/10"}className="aurest">
                          {t("أجهزة أورست التيمت")}
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col className="dropdown-col" lg={2} md={6} sm={12}>
                    <p> {t("إضافات اورست")}</p>
                    <ul className="dropdown-ul ">
                      <li>
                        <Link className="aurest">{t("أجهزة الطابعات")}</Link>
                      </li>
                      <li>
                        <Link className="aurest">{t("شاشات المطبخ")}</Link>
                      </li>
                      <li>
                        <Link className="aurest">{t("كابتن أورست")}</Link>
                      </li>
                      <li>
                        <Link className="aurest">{t("شاشة الجرد")}</Link>
                      </li>
                      <li>
                        <Link className="aurest">{t("شاشة الانتظار")}</Link>
                      </li>
                      <li>
                        <Link className="aurest">{t("حلول تسويقية")}</Link>
                      </li>
                    </ul>
                  </Col>
                  <Col className="dropdown-col" lg={2} md={6} sm={12}>
                    <p> {t("المزيد من اورست")}</p>
                    <ul className=" dropdown-ul">
                      <li>
                        <Link to={"/store/aurest/agentcontact"}className="aurest">
                          {" "}
                          {t("تواصل معنا")}{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurest/about"}className="aurest">{t("حول اورست")}</Link>
                      </li>
                      <li>
                        <Link to={"/store/aurest/features"}className="aurest">{t("المميزات")}</Link>
                      </li>
                      <li>
                        <Link to={"/store/aurest/support"}className="aurest">
                          {t("مركز المساندة والدعم")}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurest/education"}className="aurest">
                          {t("التدريب والتعليم")}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurest/careers"}className="aurest">{t("التوظيف")}</Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"store/aurpos"}>
                {t("أوربوس")}
              </Link>
              <div className="dropdown">
                <Row>
                  <Col lg={2} md={6} sm={12}></Col>
                  <Col lg={1} md={6} sm={12}></Col>
                  <Col className="dropdown-col" lg={2} md={6} sm={12}>
                    <p>{t("استكشاف الجميع")}</p>
                    <ul className="dropdown-ul ">
                      <li>
                        {" "}
                        <Link to={"/store/aurpos/products/7"} className="aurpos">
                          {t("اوربوس الاساسية")}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurpos/products/8"}className="aurpos">
                          {" "}
                          {t("اوربوس الفضية")}{" "}
                        </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to={"/store/aurpos/products/9"}className="aurpos">
                          {t("اوربوس الموسع")}{" "}
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link to={"/store/aurpos/products/10"}className="aurpos">
                          {t("اوربوس المخصص")}
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col className="dropdown-col" lg={2} md={6} sm={12}>
                    <p> {t(" إضافات  أوربوس")} </p>
                    <ul className="dropdown-ul ">
                      <li>
                        <Link className="aurpos">{t("اوربوس AurPOS Go All 6")} </Link>
                      </li>
                      <li>
                        <Link className="aurpos">{t("اوربوس موبايل")} </Link>
                      </li>
                      <li>
                        <Link className="aurpos">{t("اوربوس AurPOS Go All 4")} </Link>
                      </li>
                      <li>
                        <Link className="aurpos">{t("حلول تسويقية")} </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col className="dropdown-col" lg={2} md={6} sm={12}>
                    <p> {t("المزيد من اوربوس")} </p>
                    <ul className=" dropdown-ul">
                      <li>
                        <Link to={"/store/aurmenu/agentcontact"}className="aurpos">
                          {" "}
                          {t("تواصل معنا")}{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurpos/about"}className="aurpos">{t("حول اورمنيو")}</Link>
                      </li>
                      <li>
                        <Link to={"/store/aurpos/features"}className="aurpos">{t("المميزات")}</Link>
                      </li>
                      <li>
                        <Link to={"/store/aurpos/support"}className="aurpos">
                          {t("مركز المساندة والدعم")}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurpos/education"}className="aurpos">
                          {t("التدريب والتعليم")}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurpos/careers"}className="aurpos">{t("التوظيف")}</Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/store/auracc"}>
                {t("أوراك")}
              </Link>
              <div className="dropdown">
                <Row>
                  <Col lg={2} md={6} sm={12}></Col>
                  <Col lg={1} md={6} sm={12}></Col>
                  <Col className="dropdown-col" lg={2} md={6} sm={12}>
                    <p>{t("استكشاف الجميع")}</p>
                    <ul className="dropdown-ul ">
                      <li>
                        {" "}
                        <Link to={"/store/auracc/products/7"} className="auracc">
                          {t("المواصفات الفنية")}
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col className="dropdown-col" lg={2} md={6} sm={12}>
                    <p> {t("إضافات اوراك")}</p>
                    <ul className="dropdown-ul ">
                      <li>
                        <Link className="auracc">{t("حلول المنشآت الصغيرة والمتوسطة")}</Link>
                      </li>
                      <li>
                        <Link className="auracc">{t("اوراك لنقاط البيع")}</Link>
                      </li>
                      <li>
                        <Link className="auracc">{t("حلول مخصصة")}</Link>
                      </li>
                      <li>
                        <Link className="auracc">{t("حلول تسويقية")}</Link>
                      </li>
                    </ul>
                  </Col>
                  <Col className="dropdown-col" lg={2} md={6} sm={12}>
                    <p> {t("المزيد من اوراك")}</p>
                    <ul className=" dropdown-ul">
                      <li>
                        <Link to={"/store/auracc/agentcontact"}className="auracc">
                          {" "}
                          {t("تواصل معنا")}{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/auracc/about"}className="auracc">{t("حول اوراك")}</Link>
                      </li>
                      <li>
                        <Link to={"/store/auracc/features"}className="auracc">{t("المميزات")}</Link>
                      </li>
                      <li>
                        <Link to={"/store/auracc/support"}className="auracc">
                          {t("مركز المساندة والدعم")}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/auracc/education"}className="auracc">
                          {t("التدريب والتعليم")}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/auracc/careers"}className="auracc">{t("التوظيف")}</Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link">{t("العروض")}</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/contact"}>
                {t("تواصل معنا")}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/cart"}>
                {t("سله المنتجات")}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" onClick={changeLang}>
                {i18n.language === "en" ? t("العربيه") : t("الانجليزيه")}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Buttons */}
        <div className="header-buttons">
          <Link to={"/login"}>
            <Button className="btn btn-signup m-1">{t("تسجيل")}</Button>
          </Link>
          <Link to={"/register"}>
            <Button className="btn btn-signup m-1">{t("تسجيل الدخول")}</Button>
          </Link>
        </div>
      </div>

      {show && (
        <div className="fixed">
          <div className="mobile-menu-container">
            <div className="mobile-menu-header">
              <Link
                className="nav-link"
                to={"/"}
                onClick={closeModal}
              >
                {t("الرئيسيه")}
              </Link>
              <IoClose
                className="icon-close"
                onClick={closeModal}
              />
            </div>
            
            <div className="mobile-menu-content">
              {/* أورمينيو */}
              <div className="mobile-menu-item">
                <div 
                  className="mobile-menu-main-link"
                  onClick={() => toggleAccordion('aurmenu')}
                >
                  <span className="nav-link">{t("أورمينيو")}</span>
                  {expandedMenu === 'aurmenu' ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {expandedMenu === 'aurmenu' && (
                  <div className="mobile-dropdown-content">
                    <div className="mobile-dropdown-section">
                      <p className="mobile-dropdown-title">{t("استكشاف الجميع")}</p>
                      <ul className="dropdown-ul">
                        <li>
                          <Link to={"/store/aurmenu/products/7"} className="aurmenu" onClick={closeModal}>
                            {t("أورمينيو البدايه")}
                          </Link>
                        </li>
                        <li>
                          <Link to={"/store/aurmenu/products/8"} className="aurmenu" onClick={closeModal}>
                            {t(" أورمينيو التقدم")}
                          </Link>
                        </li>
                        <li>
                          <Link to={"/store/aurmenu/products/9"} className="aurmenu" onClick={closeModal}>
                            {t("أورمينيو التميز")}
                          </Link>
                        </li>
                        <li>
                          <Link to={"/store/aurmenu/products/10"} className="aurmenu" onClick={closeModal}>
                           {t(" أورمينيو الاحتراف")}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="mobile-dropdown-section">
                      <p className="mobile-dropdown-title">إضافات اورمنيو</p>
                      <ul className="dropdown-ul">
                        <li>
                          <Link className="aurmenu" onClick={closeModal}>المزيد من الإضافات</Link>
                        </li>
                        <li>
                          <Link className="aurmenu" onClick={closeModal}>جهاز استقبال طلبات أورمينيو</Link>
                        </li>
                        <li>
                          <Link className="aurmenu" onClick={closeModal}>جهاز الإشعارات</Link>
                        </li>
                        <li>
                          <Link className="aurmenu" onClick={closeModal}>طباعة QR Code</Link>
                        </li>
                        <li>
                          <Link className="aurmenu" onClick={closeModal}>أجهزة NFC</Link>
                        </li>
                        <li>
                          <Link className="aurmenu" onClick={closeModal}>حلول التسويق</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="mobile-dropdown-section">
                      <p className="mobile-dropdown-title">المزيد من اورمنيو</p>
                      <ul className="dropdown-ul">
                        <li>
                          <Link to={"/store/aurmenu/agentcontact"} className="aurmenu" onClick={closeModal}>
                            تواصل معنا
                          </Link>
                        </li>
                        <li>
                          <Link to={"/store/aurmenu/about"} className="aurmenu" onClick={closeModal}>حول اورمنيو</Link>
                        </li>
                        <li>
                          <Link to={"/store/aurmenu/features"} className="aurmenu" onClick={closeModal}>المميزات</Link>
                        </li>
                        <li>
                          <Link to={"/store/aurmenu/support"} className="aurmenu" onClick={closeModal}>
                            مركز المساندة والدعم
                          </Link>
                        </li>
                        <li>
                          <Link to={"/store/aurmenu/education"} className="aurmenu" onClick={closeModal}>
                            التدريب والتعليم
                          </Link>
                        </li>
                        <li>
                          <Link to={"/store/aurmenu/careers"} className="aurmenu" onClick={closeModal}>التوظيف</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* أوريست */}
              <div className="mobile-menu-item">
                <div 
                  className="mobile-menu-main-link"
                  onClick={() => toggleAccordion('aurest')}
                >
                  <span className="nav-link">{t("أوريست")}</span>
                  {expandedMenu === 'aurest' ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {expandedMenu === 'aurest' && (
                  <div className="mobile-dropdown-content">
                    <div className="mobile-dropdown-section">
                      <p className="mobile-dropdown-title">استكشاف الجميع</p>
                      <ul className="dropdown-ul">
                        <li>
                          <Link to={"/store/aurest"} className="aurest" onClick={closeModal}>جميع الباقات</Link>
                        </li>
                        <li>
                          <Link to={"/store/aurmenu/products/7"} className="aurest" onClick={closeModal}>
                            {t("هايبر أورست لايت")}
                          </Link>
                        </li>
                        <li>
                          <Link to={"/store/aurmenu/products/7"} className="aurest" onClick={closeModal}>
                            {t("أجهزة أورست لايت")}
                          </Link>
                        </li>
                        <li>
                          <Link to={"/store/aurmenu/products/8"} className="aurest" onClick={closeModal}>
                            {t("هايبر أورست بيسك")}
                          </Link>
                        </li>
                        <li>
                          <Link to={"/store/aurmenu/products/8"} className="aurest" onClick={closeModal}>
                            {t("أجهزة أورست بيسك")}
                          </Link>
                        </li>
                        <li>
                          <Link to={"/store/aurmenu/products/9"} className="aurest" onClick={closeModal}>
                            {t("هايبر أورست برو")}
                          </Link>
                        </li>
                        <li>
                          <Link to={"/store/aurmenu/products/9"} className="aurest" onClick={closeModal}>
                            {t("أجهزة أورست برو")}
                          </Link>
                        </li>
                        <li>
                          <Link to={"/store/aurmenu/products/10"} className="aurest" onClick={closeModal}>
                            {t("هايبر أورست التيمت")}
                          </Link>
                        </li>
                        <li>
                          <Link to={"/store/aurmenu/products/10"} className="aurest" onClick={closeModal}>
                            {t("أجهزة أورست التيمت")}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="mobile-dropdown-section">
                      <p className="mobile-dropdown-title" > {t("إضافات اورست")}      </p> 
                      <ul className="dropdown-ul">
                         <li>
                        <Link className="aurest" onClick={closeModal}>{t("أجهزة الطابعات")}</Link>
                      </li>
                      <li>
                        <Link className="aurest" onClick={closeModal}>{t("شاشات المطبخ")}</Link>
                      </li>
                      <li>
                        <Link className="aurest" onClick={closeModal}>{t("كابتن أورست")}</Link>
                      </li>
                      <li>
                        <Link className="aurest" onClick={closeModal}>{t("شاشة الجرد")}</Link>
                      </li>
                      <li>
                        <Link className="aurest" onClick={closeModal}>{t("شاشة الانتظار")}</Link>
                      </li>
                      <li>
                        <Link className="aurest" onClick={closeModal}>{t("حلول تسويقية")}</Link>
                      </li>
                      </ul>
                    </div>
                    <div className="mobile-dropdown-section">
                      <p className="mobile-dropdown-title">{t("المزيد من اورست")}  </p>
                      <ul className="dropdown-ul">
                        <li>
                        <Link to={"/store/aurest/agentcontact"}className="aurest">
                          {" "}
                          {t("تواصل معنا")}{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurest/about"}className="aurest" onClick={closeModal}>{t("حول اورست")}</Link>
                      </li>
                      <li>
                        <Link to={"/store/aurest/features"}className="aurest"onClick={closeModal}>{t("المميزات")}</Link>
                      </li>
                      <li>
                        <Link to={"/store/aurest/support"}className="aurest"onClick={closeModal}>
                          {t("مركز المساندة والدعم")}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurest/education"}className="aurest"onClick={closeModal}>
                          {t("التدريب والتعليم")}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurest/careers"}className="aurest"onClick={closeModal}>{t("التوظيف")}</Link>
                      </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* أوربوس */}
              <div className="mobile-menu-item">
                <div 
                  className="mobile-menu-main-link"
                  onClick={() => toggleAccordion('aurpos')}
                >
                  <span className="nav-link">{t("أوربوس")}</span>
                  {expandedMenu === 'aurpos' ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {expandedMenu === 'aurpos' && (
                  <div className="mobile-dropdown-content">
                    <div className="mobile-dropdown-section">
                      <p className="mobile-dropdown-title">استكشاف الجميع</p>
                      <ul className="dropdown-ul">
                        <li>
                        {" "}
                        <Link to={"/store/aurpos/products/7"} className="aurpos" onClick={closeModal}>
                          {t("اوربوس الاساسية")}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurpos/products/8"}className="aurpos"onClick={closeModal}>
                          {" "}
                          {t("اوربوس الفضية")}{" "}
                        </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to={"/store/aurpos/products/9"}className="aurpos"onClick={closeModal}>
                          {t("اوربوس الموسع")}{" "}
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link to={"/store/aurpos/products/10"}className="aurpos"onClick={closeModal}>
                          {t("اوربوس المخصص")}
                        </Link>
                      </li>
                      </ul>
                    </div>
                    <div className="mobile-dropdown-section">
                      <p className="mobile-dropdown-title">  </p>
                      <ul className="dropdown-ul">
                        <li>
                        <Link className="aurpos">{t("اوربوس AurPOS Go All 6")} </Link>
                      </li>
                      <li>
                        <Link className="aurpos">{t("اوربوس موبايل")} </Link>
                      </li>
                      <li>
                        <Link className="aurpos">{t("اوربوس AurPOS Go All 4")} </Link>
                      </li>
                      <li>
                        <Link className="aurpos">{t("حلول تسويقية")} </Link>
                      </li>
                      </ul>
                    </div>
                    <div className="mobile-dropdown-section">
                      <p className="mobile-dropdown-title">المزيد من اوراك</p>
                      <ul className="dropdown-ul">
                        <li>
                          <Link to={"/store/aurmenu/agentcontact"} className="aurpos" onClick={closeModal}>
                            تواصل معنا
                          </Link>
                        </li>
                        <li>
                          <Link to={"/store/aurmenu/about"} className="aurpos" onClick={closeModal}>حول اورمنيو</Link>
                        </li>
                        <li>
                          <Link to={"/store/aurmenu/features"} className="aurpos" onClick={closeModal}>المميزات</Link>
                        </li>
                        <li>
                          <Link to={"/store/aurmenu/support"} className="aurpos" onClick={closeModal}>
                            مركز المساندة والدعم
                          </Link>
                        </li>
                        <li>
                          <Link to={"/store/aurmenu/education"} className="aurpos" onClick={closeModal}>
                            التدريب والتعليم
                          </Link>
                        </li>
                        <li>
                          <Link to={"/store/aurmenu/careers"} className="aurpos" onClick={closeModal}>التوظيف</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* أوراك */}
              <div className="mobile-menu-item">
                <div 
                  className="mobile-menu-main-link"
                  onClick={() => toggleAccordion('auracc')}
                >
                  <span className="nav-link">{t("أوراك")}</span>
                  {expandedMenu === 'auracc' ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {expandedMenu === 'auracc' && (
                  <div className="mobile-dropdown-content">
                    <div className="mobile-dropdown-section">
                      <p className="mobile-dropdown-title">استكشاف الجميع</p>
                      <ul className="dropdown-ul">
                        <li>
                          <Link to={"/store/aurmenu/products/7"} className="auracc" onClick={closeModal}>
                            المواصفات الفنية
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="mobile-dropdown-section">
                      <p className="mobile-dropdown-title">إضافات اوراك</p>
                      <ul className="dropdown-ul">
                        <li>
                          <Link className="auracc" onClick={closeModal}>حلول المنشآت الصغيرة والمتوسطة</Link>
                        </li>
                        <li>
                          <Link className="auracc" onClick={closeModal}>اوراك لنقاط البيع</Link>
                        </li>
                        <li>
                          <Link className="auracc" onClick={closeModal}>حلول مخصصة</Link>
                        </li>
                        <li>
                          <Link className="auracc" onClick={closeModal}>حلول تسويقية</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="mobile-dropdown-section">
                      <p className="mobile-dropdown-title">المزيد من اوراك</p>
                      <ul className="dropdown-ul">
                        <li>
                          <Link to={"/store/aurmenu/agentcontact"} className="auracc" onClick={closeModal}>
                            تواصل معنا
                          </Link>
                        </li>
                        <li>
                          <Link to={"/store/aurmenu/about"} className="auracc" onClick={closeModal}>حول اوراك</Link>
                        </li>
                        <li>
                          <Link to={"/store/aurmenu/features"} className="auracc" onClick={closeModal}>المميزات</Link>
                        </li>
                        <li>
                          <Link to={"/store/aurmenu/support"} className="auracc" onClick={closeModal}>
                            مركز المساندة والدعم
                          </Link>
                        </li>
                        <li>
                          <Link to={"/store/aurmenu/education"} className="auracc" onClick={closeModal}>
                            التدريب والتعليم
                          </Link>
                        </li>
                        <li>
                          <Link to={"/store/aurmenu/careers"} className="auracc" onClick={closeModal}>التوظيف</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Other Links */}
              <div className="mobile-menu-item">
                <Link className="nav-link" onClick={closeModal}>
                  {t("العروض")}
                </Link>
              </div>

              <div className="mobile-menu-item">
                <Link className="nav-link" to={"/contact"} onClick={closeModal}>
                  {t("تواصل معنا")}
                </Link>
              </div>

              <div className="mobile-menu-item">
                <Link className="nav-link" to={"/cart"} onClick={closeModal}>
                  {t("سله المنتجات")}
                </Link>
              </div>

              <div className="mobile-menu-item">
                <Link className="nav-link" onClick={() => { changeLang(); closeModal(); }}>
                  {i18n.language === "en" ? t("العربيه") : t("الانجليزيه")}
                </Link>
              </div>

              <div className="mobile-menu-buttons">
                <Link to={"/login"} onClick={closeModal}>
                  <Button className="btn btn-signup mb-2 w-100">
                    {t("تسجيل")}
                  </Button>
                </Link>
                <Link to={"/register"} onClick={closeModal}>
                  <Button className="btn btn-signup w-100">
                    {t("تسجيل الدخول")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

{
  /* <div className="dropdown mb-4">
                <div className="dropdown-content">
                  <Link to={'aurages/cybersecurity/ssl'}> شهدات SSL</Link>
                </div>
                <div className="dropdown-content">
                  <Link to={'aurages/cybersecurity/sitelock'}>امن موقعك الالكتروني</Link>
                </div>
                <div className="dropdown-content">
                  <Link to={'aurages/cybersecurity/codeGuard'}> النسخ الاحتياطي للموقع الالكتروني</Link>
                </div>
                <div className="dropdown-content">
                  <Link to={'aurages/cybersecurity/acronis'}> النسخ الاحتياطي</Link>
                </div>
              </div> */
}

{
  /* <div className="dropdown mb-4">
                <div className="dropdown-content">
                  <Link>التصميم الغرافيكي</Link>
                </div>
                <div className="dropdown-content">
                  <Link> تطوير البرمجيات المخصصه</Link>
                </div>
                <div className="dropdown-content">
                  <Link> تصميم وتطوير" </Link>
                </div>
              </div> */
}
