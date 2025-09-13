
import "./Header.css";
import { Link } from "react-router-dom";
import {  Button } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import React, { Suspense , useEffect, useState}  from 'react';
import { useTranslation } from 'react-i18next';
export default function Header() {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);


  const changeLang = () => {
    i18n.language === "ar" ? i18n.changeLanguage("en")  : i18n.changeLanguage("ar")
  }


  return (
    <header className="header ">
      <div className="header-container ">
        {/* Logo */}
        <div className="logo ms-4">
          <Link to={"/"}><img src="/staging/images/AuragesLogo.png" alt="" width={100} /></Link>
        </div>

        {/* Navigation */}
        <nav className="navigation">
  <ul className="nav-list">
    <li className="nav-item">
      <Link className="nav-link" to={"/"}>
        {t("الرئيسيه")}
      </Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link" to={"/store"}>
        {t("متجر الانظمه والتطبيقات")}
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
            {t("اوربس كلاود")}
          </Link>
        </div>
      </div>
    </li>

    <li className="nav-item">
      <Link className="nav-link">{t("الاجهزه والمعدات")}</Link>
      <div className="dropdown">
        <div className="dropdown-content">
          <Link className="nav-link">{t("الطابعات")}</Link>
        </div>
      </div>
    </li>

    <li className="nav-item">
      <a
        className="nav-link"
        href="https://aurages.net/"
        target="blank"
      >
        {t("الامن السيبراني")}
      </a>
    </li>

    <li className="nav-item">
      <Link className="nav-link">{t("العروض")}</Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link" to={"/admin"}>
        {t("ادمن")}
      </Link>
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


        {/* Mobile menu toggle */}
        <div className="mobile-menu-toggle">
          <MdMenu
            onClick={() => {
              setShow(true);
            }}
          />
        </div>
      </div>

      {show && (
  <div className="fixed">
    <ul>
      <li className="nav-item d-flex align-items-center justify-content-between">
        <Link className="nav-link" to={"/"} onClick={() => { setShow(false) }}>
          {t("الرئيسيه")}
        </Link>
        <IoClose className="icon-close" onClick={() => { setShow(false) }} />
      </li>
      <li>
        <Link className="nav-link" to={"/store"} onClick={() => { setShow(false) }}>
          {t("متجر الانظمه والتطبيقات")}
        </Link>
      </li>
      <li>
        <Link className="nav-link" to={"/store/aurest"} onClick={() => { setShow(false) }}>
          {t("اورست")}
        </Link>
      </li>
      <li>
        <Link className="nav-link" to={"/store/aurmenu"} onClick={() => { setShow(false) }}>
          {t("اورمينيو")}
        </Link>
      </li>
      <li>
        <Link className="nav-link" to={"/store/auracc"} onClick={() => { setShow(false) }}>
          {t("اوراك")}
        </Link>
      </li>
      <li>
        <Link className="nav-link" to={"/store/aurpos"} onClick={() => { setShow(false) }}>
          {t("اوربس كلاود")}
        </Link>
      </li>
      <li>
        <Link className="nav-link" onClick={() => { setShow(false) }}>
          {t("الاجهزه والمعدات")}
        </Link>
      </li>
      <li>
        <Link className="nav-link" onClick={() => { setShow(false) }}>
          {t("الطابعات")}
        </Link>
      </li>
      <li>
        <Link className="nav-link" to={"/contact"} onClick={() => { setShow(false) }}>
          {t("تواصل معنا")}
        </Link>
      </li>
      <li>
        <Link className="nav-link" to={"/cart"} onClick={() => { setShow(false) }}>
          {t("سله المنتجات")}
        </Link>
      </li>
      <li>
        <Link className="nav-link" onClick={() => { changeLang()}}>
          {i18n.language === "en" ? t("العربيه") : t("الانجليزيه")}
        </Link>
      </li>
      <li>
        <Link to={"/login"}>
          <Button className="btn btn-signup mb-1" onClick={() => { setShow(false) }}>
            {t("تسجيل")}
          </Button>
          <Button className="btn btn-signup m-1 " onClick={() => { setShow(false) }}>
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
