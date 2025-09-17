import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { MdMenu, MdOutlineSupportAgent, MdOutlineInfo, MdOutlineStar, MdOutlineWork, MdOutlineSchool, MdOutlineExplore, MdOutlineHome } from "react-icons/md";
import { FaRocket, FaMedal, FaCrown } from "react-icons/fa";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidLeftArrow } from "react-icons/bi";




export default function AurmenuHeader() {
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
        <div className=" aurmenu-header-content d-flex align-items-center justify-content-center aurmenu-container">
          {/* <div className="logo ms-4">
            <Link to={"./"}>
              <img src="/staging/images/aurmenu-logo.png" alt="" width={100} />
            </Link>
          </div> */}
          <button className="scroll-btn left d-xl-none" onClick={() => scroll("left")}>
      <BiSolidLeftArrow />


      </button>
          {/* Desktop Nav */}
          <nav ref={scrollRef} className=" aurmenu-nav nav-scroll">
            <ul className="nav-list d-flex align-items-center  gap-3">
              <li className="nav-item nav-item2">
                <FaRocket className="icon"/> 
                <Link className="nav-link" to={"products/7"}>
                  {t("أورمينيو البدايه")}
                </Link>
              </li>

              <li className="nav-item nav-item2">
                <FaMedal className="icon"/>
                <Link className="nav-link" to={"products/8"}>
                  {t("أورمينيو التقدم")}
                </Link>
              </li>

              <li className="nav-item nav-item2">
                <FaCrown  className="icon" />
                <Link className="nav-link" to={"products/9"}>
                  {t("أورمينيو التميز")}
                </Link>
              </li>

              <li className="nav-item nav-item2">
                <MdOutlineExplore  className="icon" />
                <Link className="nav-link" to={"products/10"}>
                  {t("أورمينيو الاحتراف")}
                </Link>
              </li>

              <li className="nav-item nav-item2">
                <MdOutlineHome  className="icon"/>
                <a className="nav-link" href="https://aurmenu.com/" target="blank">
                  {t("المزيد من اورمينيو")}
                </a>
              </li>

              <li className=" nav-item2">
                <MdOutlineInfo  className="icon"/>
                <Link className="nav-link" to={"agentcontact"}>
                  {t("تواصل معنا")}
                </Link>
                
              </li>

              <li className="nav-item nav-item2">
                <MdOutlineInfo  className="icon"/>
                <Link className="nav-link" to={"about"}>{t("حول اورمنيو")}</Link>
              </li>

              <li className="nav-item nav-item2">
                <MdOutlineStar  className="icon"/>
                <Link className="nav-link" to={"features"}>{t("المميزات")}</Link>
              </li>

              <li className="nav-item nav-item2">
                <MdOutlineSupportAgent  className="icon"/>
                <Link className="nav-link" to={"support"}>
                  {t("المساندة والدعم")}
                </Link>
              </li>

              <li className="nav-item nav-item2">
                <MdOutlineSchool  className="icon"/>
                <Link className="nav-link" to={"education"}>
                  {t("التدريب والتعليم")}
                </Link>
              </li>

              <li className="nav-item nav-item2">
                <MdOutlineWork  className="icon"/>
                <Link className="nav-link" to={"careers"}>
                  {t("التوظيف")}
                </Link>
              </li>
            </ul>
          </nav>
<button className="scroll-btn right d-xl-none" onClick={() => scroll("right")}>
        <BiSolidRightArrow />

      </button>
          {/* Mobile Menu Toggle */}
          {/* <div className="mobile-menu-toggle d-lg-none">
            <MdMenu onClick={() => setShow(true)} className="fs-2 cursor-pointer" />
          </div> */}
        </div>

        {/* Mobile Nav */}
        {/* {show && (
          <div className="fixed top-0 start-0 w-100 h-100 bg-white p-3 shadow-lg">
            <ul className="d-flex flex-column gap-3">
              <li className="nav-item d-flex align-items-center justify-content-between">
                <span className="d-flex align-items-center gap-2">
                  <FaRocket />
                  <Link className="nav-link" to={"products/7"} onClick={() => setShow(false)}>
                    {t("اورمينيو البدايه")}
                  </Link>
                </span>
                <IoClose className="icon-close fs-3 cursor-pointer" onClick={() => setShow(false)} />
              </li>

              <li className="nav-item d-flex align-items-center gap-2">
                <FaMedal />
                <Link className="nav-link" to={"products/8"} onClick={() => setShow(false)}>
                  {t("اورمينيو التقدم")}
                </Link>
              </li>

              <li className="nav-item d-flex align-items-center gap-2">
                <FaCrown />
                <Link className="nav-link" to={"products/9"} onClick={() => setShow(false)}>
                  {t("اورمينيو التميز")}
                </Link>
              </li>

              <li className="nav-item d-flex align-items-center gap-2">
                <MdOutlineExplore />
                <Link className="nav-link" to={"products/10"} onClick={() => setShow(false)}>
                  {t("اورمينيو الاحتراف")}
                </Link>
              </li>

              <li className="nav-item d-flex align-items-center gap-2">
                <MdOutlineHome />
                <a className="nav-link" href="https://aurmenu.com/" target="blank">
                  {t("المزيد من اورمينيو")}
                </a>
              </li>

              <li className="nav-item d-flex align-items-center gap-2">
                <MdOutlineInfo />
                <Link className="nav-link" to={"agentcontact"} onClick={() => setShow(false)}>
                  {t("تواصل معنا")}
                </Link>
              </li>

              <li className="nav-item d-flex align-items-center gap-2">
                <MdOutlineInfo />
                <Link className="nav-link" onClick={() => setShow(false)}>
                  {t("حول اورمنيو")}
                </Link>
              </li>

              <li className="nav-item d-flex align-items-center gap-2">
                <MdOutlineStar />
                <Link className="nav-link" onClick={() => setShow(false)}>
                  {t("المميزات")}
                </Link>
              </li>

              <li className="nav-item d-flex align-items-center gap-2">
                <MdOutlineSupportAgent />
                <Link className="nav-link" to={"support"} onClick={() => setShow(false)}>
                  {t("مركز المساندة والدعم")}
                </Link>
              </li>

              <li className="nav-item d-flex align-items-center gap-2">
                <MdOutlineSchool />
                <Link className="nav-link" to={"education"} onClick={() => setShow(false)}>
                  {t("التدريب والتعليم")}
                </Link>
              </li>

              <li className="nav-item d-flex align-items-center gap-2">
                <MdOutlineWork />
                <Link className="nav-link" to={"careers"} onClick={() => setShow(false)}>
                  {t("التوظيف")}
                </Link>
              </li>
            </ul>
          </div>
        )} */}
      </header>
    </>
  );
}
