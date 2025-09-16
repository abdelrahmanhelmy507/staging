import "./Header.css";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import React, { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
export default function Header() {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);

  const changeLang = () => {
    i18n.language === "ar"
      ? i18n.changeLanguage("en")
      : i18n.changeLanguage("ar");
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
                {t("  أورمينيو")}
              </Link>
              <div className="dropdown">
                <Row>
                  <Col lg={2} md={6} sm={12}></Col>
                  <Col lg={1} md={6} sm={12}></Col>
                  <Col className="dropdown-col" lg={2} md={6} sm={12}>
                    <p>استكشاف الجميع</p>
                    <ul className="dropdown-ul">
                      <li>
                        <Link
                          to={"/store/aurmenu/products/7"}
                          className="aurmenu"
                        >
                          أورمينيو البدايه
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/products/8"}className="aurmenu" >
                          {" "}
                          أورمينيو التقدم{" "}
                        </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to={"/store/aurmenu/products/9"}className="aurmenu">
                          أورمينيو التميز{" "}
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link to={"/store/aurmenu/products/10"}className="aurmenu">
                          أورمينيو الاحتراف{" "}
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col className="dropdown-col" lg={2} md={6} sm={12}>
                    <p>إضافات اورمنيو </p>
                    <ul className="dropdown-ul ">
                      <li>
                        <Link className="aurmenu">المزيد من الإضافات</Link>
                      </li>
                      <li>
                        <Link className="aurmenu">
                          جهاز استقبال طلبات أورمينيو
                        </Link>
                      </li>
                      <li>
                        <Link className="aurmenu">جهاز الإشعارات</Link>
                      </li>
                      <li>
                        <Link className="aurmenu">طباعة QR Code</Link>
                      </li>
                      <li>
                        <Link className="aurmenu">أجهزة NFC</Link>
                      </li>
                      <li>
                        <Link className="aurmenu">حلول التسويق</Link>
                      </li>
                    </ul>
                  </Col>
                  <Col className="dropdown-col" lg={2} md={6} sm={12}>
                    <p> المزيد من اورمنيو</p>
                    <ul className=" dropdown-ul">
                      <li>
                        <Link to={"/store/aurmenu/agentcontact"}className="aurmenu">
                          {" "}
                          تواصل معنا{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/about"}className="aurmenu">حول اورمنيو</Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/features"}className="aurmenu">المميزات</Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/support"}className="aurmenu">
                          مركز المساندة والدعم
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/education"}className="aurmenu">
                          التدريب والتعليم
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/careers"}className="aurmenu">التوظيف</Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"store/aurest"}>
                {t(" أوريست")}
              </Link>
              <div className="dropdown">
                <Row>
                  <Col lg={2} md={6} sm={12}></Col>
                  <Col lg={1} md={6} sm={12}></Col>
                  <Col className="dropdown-col" lg={2} md={6} sm={12}>
                    <p>استكشاف الجميع</p>
                    <ul className="dropdown-ul">
                      <li>
                        <Link to={"/store/aurest"} className="aurest">جميع الباقات</Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/products/7"} className="aurest">
                          هايبر أورست لايت
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/products/7"}className="aurest">
                          أجهزة أورست لايت
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/products/8"}className="aurest">
                          هايبر أورست بيسك
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/products/8"} className="aurest">
                          أجهزة أورست بيسك
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/products/9"}className="aurest">
                          هايبر أورست برو
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/products/9"}className="aurest">
                          أجهزة أورست برو
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/products/10"}className="aurest">
                          هايبر أورست التيمت
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/products/10"}className="aurest">
                          أجهزة أورست التيمت
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col className="dropdown-col" lg={2} md={6} sm={12}>
                    <p> إضافات اورست</p>
                    <ul className="dropdown-ul ">
                      <li>
                        <Link className="aurest">أجهزة الطابعات</Link>
                      </li>
                      <li>
                        <Link className="aurest">شاشات المطبخ</Link>
                      </li>
                      <li>
                        <Link className="aurest">كابتن أورست</Link>
                      </li>
                      <li>
                        <Link className="aurest">شاشة الجرد</Link>
                      </li>
                      <li>
                        <Link className="aurest">شاشة الانتظار</Link>
                      </li>
                      <li>
                        <Link className="aurest">حلول تسويقية</Link>
                      </li>
                    </ul>
                  </Col>
                  <Col className="dropdown-col" lg={2} md={6} sm={12}>
                    <p> المزيد من اورست</p>
                    <ul className=" dropdown-ul">
                      <li>
                        <Link to={"/store/aurmenu/agentcontact"}className="aurest">
                          {" "}
                          تواصل معنا{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/about"}className="aurest">حول اورست</Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/features"}className="aurest">المميزات</Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/support"}className="aurest">
                          مركز المساندة والدعم
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/education"}className="aurest">
                          التدريب والتعليم
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/careers"}className="aurest">التوظيف</Link>
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
                    <p>استكشاف الجميع</p>
                    <ul className="dropdown-ul ">
                      <li>
                        {" "}
                        <Link to={"/store/aurmenu/products/7"} className="aurpos">
                          اوربوس الاساسية
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/products/8"}className="aurpos">
                          {" "}
                          اوربوس الفضية{" "}
                        </Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to={"/store/aurmenu/products/9"}className="aurpos">
                          اوربوس الموسع{" "}
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link to={"/store/aurmenu/products/10"}className="aurpos">
                          اوربوس المخصص
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col className="dropdown-col" lg={2} md={6} sm={12}>
                    <p> المزيد من اوربوس </p>
                    <ul className="dropdown-ul ">
                      <li>
                        <Link className="aurpos">اوربوس AurPOS Go All 6 </Link>
                      </li>
                      <li>
                        <Link className="aurpos">اوربوس موبايل </Link>
                      </li>
                      <li>
                        <Link className="aurpos">اوربوس AurPOS Go All 4 </Link>
                      </li>
                      <li>
                        <Link className="aurpos">حلول تسويقية </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col className="dropdown-col" lg={2} md={6} sm={12}>
                    <p> المزيد من اوراك </p>
                    <ul className=" dropdown-ul">
                      <li>
                        <Link to={"/store/aurmenu/agentcontact"}className="aurpos">
                          {" "}
                          تواصل معنا{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/about"}className="aurpos">حول اورمنيو</Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/features"}className="aurpos">المميزات</Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/support"}className="aurpos">
                          مركز المساندة والدعم
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/education"}className="aurpos">
                          التدريب والتعليم
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/careers"}className="aurpos">التوظيف</Link>
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
                    <p>استكشاف الجميع</p>
                    <ul className="dropdown-ul ">
                      <li>
                        {" "}
                        <Link to={"/store/aurmenu/products/7"} className="auracc">
                          المواصفات الفنية
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col className="dropdown-col" lg={2} md={6} sm={12}>
                    <p> إضافات اوراك</p>
                    <ul className="dropdown-ul ">
                      <li>
                        <Link className="auracc">حلول المنشآت الصغيرة والمتوسطة</Link>
                      </li>
                      <li>
                        <Link className="auracc">اوراك لنقاط البيع</Link>
                      </li>
                      <li>
                        <Link className="auracc">حلول مخصصة</Link>
                      </li>
                      <li>
                        <Link className="auracc">حلول تسويقية</Link>
                      </li>
                    </ul>
                  </Col>
                  <Col className="dropdown-col" lg={2} md={6} sm={12}>
                    <p> المزيد من اوراك</p>
                    <ul className=" dropdown-ul">
                      <li>
                        <Link to={"/store/aurmenu/agentcontact"}className="auracc">
                          {" "}
                          تواصل معنا{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/about"}className="auracc">حول اوراك</Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/features"}className="auracc">المميزات</Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/support"}className="auracc">
                          مركز المساندة والدعم
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/education"}className="auracc">
                          التدريب والتعليم
                        </Link>
                      </li>
                      <li>
                        <Link to={"/store/aurmenu/careers"}className="auracc">التوظيف</Link>
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
          <ul>
            <li className="nav-item d-flex align-items-center justify-content-between">
              <Link
                className="nav-link"
                to={"/"}
                onClick={() => {
                  setShow(false);
                }}
              >
                {t("الرئيسيه")}
              </Link>
              <IoClose
                className="icon-close"
                onClick={() => {
                  setShow(false);
                }}
              />
            </li>
            <li>
              <Link
                className="nav-link"
                to={"/store"}
                onClick={() => {
                  setShow(false);
                }}
              >
                {t("متجر الانظمه والتطبيقات")}
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to={"/store/aurest"}
                onClick={() => {
                  setShow(false);
                }}
              >
                {t("اورست")}
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to={"/store/aurmenu"}
                onClick={() => {
                  setShow(false);
                }}
              >
                {t("اورمينيو")}
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to={"/store/auracc"}
                onClick={() => {
                  setShow(false);
                }}
              >
                {t("اوراك")}
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to={"/store/aurpos"}
                onClick={() => {
                  setShow(false);
                }}
              >
                {t("اوربس كلاود")}
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                onClick={() => {
                  setShow(false);
                }}
              >
                {t("الاجهزه والمعدات")}
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                onClick={() => {
                  setShow(false);
                }}
              >
                {t("الطابعات")}
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to={"/contact"}
                onClick={() => {
                  setShow(false);
                }}
              >
                {t("تواصل معنا")}
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to={"/cart"}
                onClick={() => {
                  setShow(false);
                }}
              >
                {t("سله المنتجات")}
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                onClick={() => {
                  changeLang();
                }}
              >
                {i18n.language === "en" ? t("العربيه") : t("الانجليزيه")}
              </Link>
            </li>
            <li>
              <Link to={"/login"}>
                <Button
                  className="btn btn-signup mb-1"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  {t("تسجيل")}
                </Button>
                <Button
                  className="btn btn-signup m-1 "
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  {t("تسجيل الدخول")}
                </Button>
              </Link>
            </li>
          </ul>
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
