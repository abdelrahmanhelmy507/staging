import { Link } from "react-router-dom";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

import { FaRocket, FaTabletAlt, FaServer } from "react-icons/fa";
import { MdDevicesOther, MdOutlineContactMail, MdLanguage, MdOutlineStar, MdOutlineSupportAgent, MdOutlineSchool, MdWorkOutline } from "react-icons/md";
import { RiComputerLine, RiCpuLine } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiSolidLeftArrow , BiSolidRightArrow } from "react-icons/bi";

export default function AurposHeader() {
  const { t } = useTranslation();
  const scrollRef = useRef(null);

  // دالة التمرير للـ scrollbar
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200; 
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };


  return (
    <header className="aurmenu-header navbar-container">
      <div className="aurmenu-header-content d-flex align-items-center justify-content-between aurpos-container">

       
        {/* Scroll buttons للأجهزة الصغيرة */}
        <button className="scroll-btn left d-xl-none" onClick={() => scroll("left")}>
          <BiSolidLeftArrow />
        </button>

        {/* Navigation */}
        <nav ref={scrollRef} className="aurmenu-nav nav-scroll">
          <ul className="nav-list d-flex align-items-center gap-3">

            <li className="nav-item nav-item2">
              <Link className="nav-link" to={"products/7"}>
              <FaRocket className="aurpos-icon d-block m-auto mb-1"/> 
                {t("اوربوس الاساسية")}
              </Link>
            </li>

            <li className="nav-item nav-item2">
              <Link className="nav-link" to={"products/9"}>
              <MdDevicesOther className="aurpos-icon d-block m-auto mb-1"/>
                {t("اوربوس الفضية")}
              </Link>
            </li>

            <li className="nav-item nav-item2">
              <Link className="nav-link" to={"products/10"}>
              <RiComputerLine className="aurpos-icon d-block m-auto mb-1"/>
                {t("وربوس الموسع")}
              </Link>
            </li>

            <li className="nav-item nav-item2">
              <a className="nav-link" href="https://aurmenu.com/" target="_blank" rel="noreferrer">
              <FaTabletAlt className="aurpos-icon d-block m-auto mb-1"/>
                {t("أجهزة أورست بيسك")}
              </a>
            </li>

            <li className="nav-item nav-item2">
              <a className="nav-link" href="https://aurmenu.com/" target="_blank" rel="noreferrer">
              <RiCpuLine className="aurpos-icon d-block m-auto mb-1"/>
                {t("اوربوس المخصص")}
              </a>
            </li>

            <li className="nav-item nav-item2">
              <Link className="nav-link" to={"agentcontact"}>
              <MdOutlineContactMail className="aurpos-icon d-block m-auto mb-1"/>
                {t("تواصل معنا")}
              </Link>
            </li>

            <li className="nav-item nav-item2">
              <a href="https://aurpos.com/" target="_blank" rel="noreferrer" className="nav-link">
              <MdLanguage className="aurpos-icon d-block m-auto mb-1"/>
                {t("المزيد من أوربوس")}
              </a>
            </li>

            <li className="nav-item nav-item2">
              <Link className="nav-link">
              <AiOutlineInfoCircle className="aurpos-icon d-block m-auto mb-1"/>
              {t("حول أوربس")}
              </Link>
            </li>

            <li className="nav-item nav-item2">
              <Link className="nav-link">
              <MdOutlineStar className="aurpos-icon d-block m-auto mb-1"/>
              {t("المميزات")}
              </Link>
            </li>

            <li className="nav-item nav-item2">
              <Link className="nav-link" to={"support"}>
              <MdOutlineSupportAgent className="aurpos-icon d-block m-auto mb-1"/>
                {t("مركز المساندة والدعم")}
              </Link>
            </li>

            <li className="nav-item nav-item2">
              <Link className="nav-link" to={"education"}>
              <MdOutlineSchool className="aurpos-icon d-block m-auto mb-1"/>
                {t("التدريب والتعليم")}
              </Link>
            </li>

            <li className="nav-item nav-item2">
              <Link className="nav-link" to={"careers"}>
              <MdWorkOutline className="aurpos-icon d-block m-auto mb-1"/>
                {t("التوظيف")}
              </Link>
            </li>

          </ul>
        </nav>

        <button className="scroll-btn right d-xl-none" onClick={() => scroll("right")}>
          <BiSolidRightArrow />
        </button>
      </div>
    </header>
  );
}
