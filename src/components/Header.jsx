// components/Header.jsx
import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouse = (key, isEnter) => () => {
    // Enable hover-driven dropdowns on desktop only
    if (window.innerWidth >= 992) {
      setOpenDropdown(isEnter ? key : null);
    }
  };

  return (
    <Navbar  expand="lg" bg="dark" data-bs-theme="dark" fixed="top" className="shadow-sm navbar">
      
        <Navbar.Brand href="#home" className="fw-bold">
          aurages
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-2">
            <Nav.Link href="#home" className="fw-medium" style={{color : "white"}}>الرئيسية</Nav.Link>
            <NavDropdown
              title="الحلول"
              id="solutions"
              show={openDropdown === "solutions"}
              onMouseEnter={handleMouse("solutions", true)}
              onMouseLeave={handleMouse("solutions", false)}
            >
              <NavDropdown.Item href="#pricing">حزم جاهزة</NavDropdown.Item>
              <NavDropdown.Item href="#custom">حلول مخصصة</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="العروض"
              id="offers"
              show={openDropdown === "offers"}
              onMouseEnter={handleMouse("offers", true)}
              onMouseLeave={handleMouse("offers", false)}
            >
              <NavDropdown.Item href="#summer" >عرض الصيف</NavDropdown.Item>
              <NavDropdown.Item href="#ramadan">عرض رمضان</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="الدعم"
              id="support"
              show={openDropdown === "support"}
              onMouseEnter={handleMouse("support", true)}
              onMouseLeave={handleMouse("support", false)}
            >
              <NavDropdown.Item href="#help">مركز المساعدة</NavDropdown.Item>
              <NavDropdown.Item href="#blog">المدونة</NavDropdown.Item>
              <NavDropdown.Item href="#contact">تواصل معنا</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="سلة المنتجات"
              id="cart"
              show={openDropdown === "cart"}
              onMouseEnter={handleMouse("cart", true)}
              onMouseLeave={handleMouse("cart", false)}
            >
              <NavDropdown.Item href="#products">الأجهزة</NavDropdown.Item>
              <NavDropdown.Item href="#pricing">الحزم</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="الأجهزة"
              id="devices"
              show={openDropdown === "devices"}
              onMouseEnter={handleMouse("devices", true)}
              onMouseLeave={handleMouse("devices", false)}
            >
              <NavDropdown.Item href="#products">Go 5 NFC</NavDropdown.Item>
              <NavDropdown.Item href="#products">Front POS 16</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="متجر الأنظمة و التطبيقات"
              id="store"
              show={openDropdown === "store"}
              onMouseEnter={handleMouse("store", true)}
              onMouseLeave={handleMouse("store", false)}
            >
              <NavDropdown.Item href="#apps">أنظمة المطاعم</NavDropdown.Item>
              <NavDropdown.Item href="#apps">تطبيقات متكاملة</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="الأمن السيبراني"
              id="security"
              show={openDropdown === "security"}
              onMouseEnter={handleMouse("security", true)}
              onMouseLeave={handleMouse("security", false)}
            >
              <NavDropdown.Item href="#ssl">شهادات SSL</NavDropdown.Item>
              <NavDropdown.Item href="#backup">النسخ الاحتياطي</NavDropdown.Item>
              <NavDropdown.Item href="#site-security">أمن موقعك</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="العربية"
              id="lang"
              show={openDropdown === "lang"}
              onMouseEnter={handleMouse("lang", true)}
              onMouseLeave={handleMouse("lang", false)}
            >
              <NavDropdown.Item>العربية</NavDropdown.Item>
              <NavDropdown.Item>English</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
      <Button size="sm" className="custom-button mx-1 ">تسجيل</Button>
                <Button size="sm" className=" mx-1 btn-primary-glow custom-button">تسجيل الدخول</Button>
        </Navbar.Collapse>
    </Navbar>
  );
}
