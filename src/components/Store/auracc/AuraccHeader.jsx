import { Link } from "react-router-dom";


import { useRef } from "react";
import { useTranslation } from "react-i18next";



import { FaRocket, FaTabletAlt, FaServer } from "react-icons/fa";
import { MdDevicesOther, MdOutlineLaptopMac, MdOutlineContactMail, MdLanguage, MdOutlineStar, MdOutlineSupportAgent, MdOutlineSchool, MdWorkOutline, MdOutlinePhonelink } from "react-icons/md";
import { RiComputerLine, RiCpuLine } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiSolidLeftArrow , BiSolidRightArrow  } from "react-icons/bi";
import "./auracc.css"

export default function AuraccHeader() {
  const { t } = useTranslation();
  const scrollRef = useRef(null);
  // const [show, setShow] = useState(false);
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
    <>
      <header className="aurmenu-header navbar-container ">
        <div className=" aurmenu-header-content d-flex align-items-center justify-content-center auracc-container " >
          {/* <div className="logo ms-4">
            <Link to={"./"}>
              <img src="/staging/images/aurmenu-logo.png" alt="" width={100} />
            </Link>
          </div> */}
          <button className="scroll-btn left d-xl-none" onClick={() => scroll("left")}>
      <BiSolidLeftArrow />


      </button>
          {/* Desktop Nav */}
         <nav ref={scrollRef} className=" aurmenu-nav nav-scroll ">
  <ul className="nav-list d-flex align-items-center justify-c gap-3 ">
    


    <li className="nav-item nav-item2">
      <RiCpuLine className="aurpos-icon auracc-color" />
      <Link className="nav-link auracc-nav-link"  target="blank">
        {t("المواصفات الفنية")}
      </Link>
    </li>

    
    <li className="nav-item nav-item2">
      <MdOutlineContactMail className="aurpos-icon auracc-color "/>
      <Link className="nav-link auracc-nav-link" to={"agentcontact"}>
        {t("تواصل معنا")}
      </Link>
    </li>

    <li className="nav-item nav-item2">
      <MdLanguage className="aurpos-icon auracc-color"/>
      <a href="https://aurpos.com/" target="blank" className="nav-link auracc-nav-link">
        {t("المزيد من أوربوس")}
      </a>
    </li>

    <li className="nav-item nav-item2">
      <AiOutlineInfoCircle className="aurpos-icon auracc-color"/>
      <Link className="nav-link auracc-nav-link">{t("حول أوربس")}</Link>
    </li>

    <li className="nav-item nav-item2">
      <MdOutlineStar className="aurpos-icon auracc-color"/>
      <Link className="nav-link auracc-nav-link">{t("المميزات")}</Link>
    </li>

    <li className="nav-item nav-item2">
      <MdOutlineSupportAgent className="aurpos-icon auracc-color"/>
      <Link className="nav-link auracc-nav-link" to={"support"}>
        {t("المساندة والدعم")}
      </Link>
    </li>

    <li className="nav-item nav-item2">
      <MdOutlineSchool className="aurpos-icon auracc-color"/>
      <Link className="nav-link auracc-nav-link" to={"education"}>
        {t("التدريب والتعليم")}
      </Link>
    </li>

    <li className="nav-item nav-item2">
      <MdWorkOutline className="aurpos-icon auracc-color"/>
      <Link className="nav-link auracc-nav-link" to={"careers"}>
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
    </>
  );
}
