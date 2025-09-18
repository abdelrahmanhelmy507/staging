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
      <Link className="nav-link auracc-nav-link"  target="blank">
      <RiCpuLine className="aurpos-icon auracc-color d-block m-auto mb-1" />
        {t("المواصفات الفنية")}
      </Link>
    </li>

    
    <li className="nav-item nav-item2">
      <Link className="nav-link auracc-nav-link" to={"agentcontact"}>
      <MdOutlineContactMail className="aurpos-icon auracc-color d-block m-auto mb-1 "/>
        {t("تواصل معنا")}
      </Link>
    </li>

    <li className="nav-item nav-item2">
      <a href="https://aurpos.com/" target="blank" className="nav-link auracc-nav-link">
      <MdLanguage className="aurpos-icon auracc-color d-block m-auto mb-1"/>
        {t("المزيد من أوراك")}
      </a>
    </li>

    <li className="nav-item nav-item2">
      <Link className="nav-link auracc-nav-link">
      <AiOutlineInfoCircle className="aurpos-icon auracc-color d-block m-auto mb-1"/>
      {t("حول أوربس")}
      </Link>
    </li>

    <li className="nav-item nav-item2">
      <Link className="nav-link auracc-nav-link">
      <MdOutlineStar className="aurpos-icon auracc-color d-block m-auto mb-1"/>
      {t("المميزات")}
      </Link>
    </li>

    <li className="nav-item nav-item2">
      <Link className="nav-link auracc-nav-link" to={"support"}>
      <MdOutlineSupportAgent className="aurpos-icon auracc-color d-block m-auto mb-1"/>
        {t("المساندة والدعم")}
      </Link>
    </li>

    <li className="nav-item nav-item2">
      <Link className="nav-link auracc-nav-link" to={"education"}>
      <MdOutlineSchool className="aurpos-icon auracc-color d-block m-auto mb-1"/>
        {t("التدريب والتعليم")}
      </Link>
    </li>

    <li className="nav-item nav-item2">
      <Link className="nav-link auracc-nav-link" to={"careers"}>
      <MdWorkOutline className="aurpos-icon auracc-color d-block m-auto mb-1"/>
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
