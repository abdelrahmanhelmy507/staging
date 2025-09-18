import { Link } from "react-router-dom";


import { useRef } from "react";
import { useTranslation } from "react-i18next";



import { FaRocket, FaTabletAlt, FaServer } from "react-icons/fa";
import { MdDevicesOther, MdOutlineLaptopMac, MdOutlineContactMail, MdLanguage, MdOutlineStar, MdOutlineSupportAgent, MdOutlineSchool, MdWorkOutline, MdOutlinePhonelink } from "react-icons/md";
import { RiComputerLine, RiCpuLine } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiSolidLeftArrow , BiSolidRightArrow  } from "react-icons/bi";


export default function AurestHeader() {
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
        <div className=" aurmenu-header-contentd-flex align-items-center justify-content-between aurest-container ">
          {/* <div className="logo ms-4">
            <Link to={"./"}>
              <img src="/staging/images/aurmenu-logo.png" alt="" width={100} />
            </Link>
          </div> */}
          <button className="scroll-btn left  d-2xl-none" onClick={() => scroll("left")}>
      <BiSolidLeftArrow />


      </button>
          {/* Desktop Nav */}
         <nav ref={scrollRef} className=" aurmenu-nav nav-scroll">
  <ul className="nav-list d-flex align-items-center gap-3">
    <li className="nav-item nav-item2">
      <Link className="nav-link" to={"products/7"}>
      <FaRocket className="aurest-icon  aurest-nav-link d-block m-auto mb-1"/> 
        {t("أورست لايت")}
      </Link>
    </li>

    <li className="nav-item nav-item2">
      <Link className="nav-link aurest-nav-link" to={"products/9"}>
      <MdDevicesOther className="aurest-icon d-block m-auto mb-1" />
        {t("أجهزة أورست لايت")}
      </Link>
    </li>

    <li className="nav-item nav-item2">
      <Link className="nav-link  aurest-nav-link" to={"products/10"}>
      <RiComputerLine className="aurest-icon d-block m-auto mb-1" />
        {t("أورست بيسك")}
      </Link>
    </li>

    <li className="nav-item nav-item2">
      <a className="nav-link  aurest-nav-link" href="https://aurmenu.com/" target="blank">
      <FaTabletAlt className="aurest-icon d-block m-auto mb-1"/>
        {t("أجهزة أورست بيسك")}
      </a>
    </li>

    <li className="nav-item nav-item2">
      <a className="nav-link  aurest-nav-link" href="https://aurmenu.com/" target="blank">
      <RiCpuLine className="aurest-icon d-block m-auto mb-1"/>
        {t("أورست برو")}
      </a>
    </li>

    <li className="nav-item nav-item2">
      <a className="nav-link  aurest-nav-link" href="https://aurmenu.com/" target="blank">
      <MdOutlineLaptopMac className="aurest-icon d-block m-auto mb-1"/>
        {t("أجهزة أورست برو")}
      </a>
    </li>

    <li className="nav-item nav-item2">
      <a className="nav-link  aurest-nav-link" href="https://aurmenu.com/" target="blank">
      <FaServer className="aurest-icon d-block m-auto mb-1"/>
        {t("أورست التيمت")}
      </a>
    </li>

    <li className="nav-item nav-item2">
      <a className="nav-link  aurest-nav-link" href="https://aurmenu.com/" target="blank">
      <MdOutlinePhonelink className="aurest-icon d-block m-auto mb-1"/>
        {t("أجهزة أورست التيمت")}
      </a>
    </li>

    <li className="nav-item nav-item2">
      <Link className="nav-link  aurest-nav-link" to={"agentcontact"}>
      <MdOutlineContactMail className="aurest-icon d-block m-auto mb-1"/>
        {t("تواصل معنا")}
      </Link>
    </li>

    <li className="nav-item nav-item2">
      <a href="https://aurest.net/" target="blank" className="nav-link  aurest-nav-link">
      <MdLanguage className="aurest-icon d-block m-auto mb-1"/>
        {t("المزيد من أورست")}
      </a>
    </li>

    <li className="nav-item nav-item2">
      <Link className="nav-link  aurest-nav-link">
      <AiOutlineInfoCircle className="aurest-icon d-block m-auto mb-1"/>
      {t("حول أورست")}
      </Link>
    </li>

    <li className="nav-item nav-item2">
      <Link className="nav-link  aurest-nav-link">
      <MdOutlineStar className="aurest-icon d-block m-auto mb-1"/>
      {t("المميزات")}
      </Link>
    </li>

    <li className="nav-item nav-item2">
      <Link className="nav-link  aurest-nav-link" to={"support"}>
      <MdOutlineSupportAgent className="aurest-icon d-block m-auto mb-1"/>
        {t("المساندة والدعم")}
      </Link>
    </li>

    <li className="nav-item nav-item2">
      <Link className="nav-link  aurest-nav-link" to={"education"}>
      <MdOutlineSchool className="aurest-icon d-block m-auto mb-1"/>
        {t("التدريب والتعليم")}
      </Link>
    </li>

    <li className="nav-item nav-item2">
      <Link className="nav-link  aurest-nav-link" to={"careers"}>
      <MdWorkOutline className="aurest-icon d-block m-auto mb-1"/>
        {t("التوظيف")}
      </Link>
    </li>
  </ul>
</nav>

<button className="scroll-btn right  d-2xl-none" onClick={() => scroll("right")}>
        <BiSolidRightArrow />

      </button>
         
        </div>

     
      </header>
    </>
  );
}
