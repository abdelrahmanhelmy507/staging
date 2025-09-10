import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { NavDropdown, Navbar, Container, Nav, Button } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
export default function Header() {
  const [show, setShow] = useState(false);

  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);
  // };

  // const closeMobileMenu = () => {
  //   setIsMobileMenuOpen(false);
  // };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo ms-4">
          <Link to={"/"}><img src="/staging/images/AuragesLogo.png" alt="" width={100} /></Link>
        </div>

        {/* Navigation */}
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                الرئيسيه
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/store"}>
                متجر الانظمه والتطبيقات
              </Link>
              <div className="dropdown ">
                <div className="dropdown-content">
                  <Link to={"/store/aurest"} className="nav-link">اورست</Link>
                </div>
                <div className="dropdown-content">
                  <Link to={"/store/aurmenu"} className="nav-link">اورمينيو</Link>
                </div>
                <div className="dropdown-content">
                  <Link to={"/store/auracc"} className="nav-link">اوراك</Link>
                </div>
                <div className="dropdown-content">
                  <Link to={"/store/aurpos"} className="nav-link">اوربس كلاود </Link>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link">الاجهزه والمعدات</Link>

              <div className="dropdown ">
                <div className="dropdown-content">
                  <Link className="nav-link">الطابعات</Link>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://aurages.net/"
                target="blank"
              >
                الامن السيبراني
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link">العروض</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/admin"}>
                ادمن{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/contact"}>
                تواصل معنا
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/cart"}>
                سله المنتجات
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" > اللغه</Link>

              <div className="dropdown ">
                <div className="dropdown-content">
                  <Link className="nav-link">english</Link>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        {/* Buttons */}
        <div className="header-buttons">
          <Link to={"/login"}>
            <Button className="btn btn-signup m-1">تسجيل</Button>
          </Link>
          <Link to={"/register"}>
            <Button className="btn btn-signup m-1 "> تسجيل الدخول </Button>
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
              <Link className="nav-link" to={"/"} onClick={()=>{setShow(false)}}>
                الرئيسيه
              </Link>
              <IoClose className="icon-close" onClick={()=>{setShow(false)}}/>
            </li>
            <li>
              <Link className="nav-link" to={"/store"} onClick={()=>{setShow(false)}}>
                متجر الانظمه والتطبيقات
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/store/aurest"} onClick={()=>{setShow(false)}}>
                اورست
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/store/aurmenu"} onClick={()=>{setShow(false)}}>
                اورمينيو
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/store/auracc"} onClick={()=>{setShow(false)}}>
                اوراك
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/store/aurpos"} onClick={()=>{setShow(false)}}>
                اوربس كلاود
              </Link>
            </li>
            <li>
              <Link className="nav-link" onClick={()=>{setShow(false)}}>الاجهزه والمعدات</Link>
            </li>
            <li>
              <Link className="nav-link" onClick={()=>{setShow(false)}}>الطابعات</Link>
            </li>
            <li>
              <Link className="nav-link" to={"/contact"} onClick={()=>{setShow(false)}}>
                تواصل معنا
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/cart"} onClick={()=>{setShow(false)}}>
                سله المنتجات
              </Link>
            </li>
            <li>
              <Link className="nav-link" onClick={()=>{setShow(false)}}> اللغه</Link>
            </li>
            <li>
             <Link to={"/login"} >
            <Button className="btn btn-signup mb-1" onClick={()=>{setShow(false)}}>تسجيل</Button>
            <Button className="btn btn-signup m-1 " onClick={()=>{setShow(false)}}> تسجيل الدخول </Button>
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
