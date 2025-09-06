import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { NavDropdown, Navbar, Container, Nav, Button } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo ms-4">
          <img src="AuragesLogo.png" alt="" width={100} />
        </div>

        {/* Navigation */}
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <Link className="nav-link" to={"/aurages/"}>الرئيسيه</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/aurages/store'}>متجر الانظمه والتطبيقات</Link>
              <div className="dropdown mb-4">
                <div className="dropdown-content">
                  <Link to={"/aurages/store/aurest"}>اورست</Link>
                </div>
                <div className="dropdown-content">
                  <Link to={"/aurages/store/aurmenu"}>اورمينيو</Link>
                </div>
                <div className="dropdown-content">
                  <Link to={"/aurages/store/auracc"}>اوراك</Link>
                </div>
                <div className="dropdown-content">
                  <Link to={"/aurages/store/aurpos"}>اوربس كلاود </Link>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link">الاجهزه والمعدات</Link>

              <div className="dropdown mb-4">
                <div className="dropdown-content">
                  <Link>الطابعات</Link>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'aurages/cybersecurity'}>الامن السيبراني</Link>

              <div className="dropdown mb-4">
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
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link">العروض</Link>

              
            </li>
            <li className="nav-item">
              <Link className="nav-link">الحلول</Link>

              <div className="dropdown mb-4">
                <div className="dropdown-content">
                  <Link>التصميم الغرافيكي</Link>
                </div>
                <div className="dropdown-content">
                  <Link> تطوير البرمجيات المخصصه</Link>
                </div>
                <div className="dropdown-content">
                  <Link> تصميم وتطوير" </Link>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/aurages/contact'}>تواصل معنا</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">سله المنتجات</Link>

            </li>
            <li className="nav-item">
              <Link className="nav-link"> اللغه</Link>

              <div className="dropdown mb-4">
                <div className="dropdown-content">
                  <Link>english</Link>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        {/* Buttons */}
        <div className="header-buttons">
          <button className="btn btn-login m-2">Login</button>
          <button className="btn btn-signup m-1 ">Sign Up</button>
        </div>

        {/* Mobile menu toggle */}
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
