import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header () {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    {name : "الرئيسيه" , dropdown : []},
    { name: 'متجر الانظمه والتطبيقات', dropdown:  ['اورمينيو' ,'اورست' ,"اوربس كلاود اوراك" ,  ] },
    { name: 'الاجهزه والمعدات', dropdown:[ 'الطابعات' ]},
    { name: 'الامن السيبراني', dropdown: ["شهدات SSL" , "امن موقعك الالكتروني" ,"النسخ الاحتياطي للموقع الالكتروني" ,"النسخ الاحتياطي"] },
    { name: 'الحلول', dropdown: ["التصميم الغرافيكي" , "تطوير البرمجيات المخصصه" , "تصميم وتطوير"] },
    { name: 'العروض', dropdown: []},
    { name: 'الدعم', dropdown: [] },
    { name: 'سله المنتجات', dropdown:[  ]},
    { name: 'اللغه', dropdown: ['English']}
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo ms-4">
          <img src="AuragesLogo.png" alt="" width={100}/>
        </div>
          

        {/* Navigation */}
        <nav className="navigation">
          <ul className="nav-list">
            {navigationItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a href="#" className="nav-link" onClick={closeMobileMenu}>
                  {item.name}
                </a>
                {item.dropdown.length !== 0 && (
                  <div className="dropdown mb-4">
                  <div className="dropdown-content">
                    {item.dropdown.map((ele) =>{return (
                      <p>{ele}</p>
                    )})}
                  </div>
                </div>
                )}
              </li>
            ))}
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
};


