import { Link } from "react-router-dom";
import {  Button } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import  {  useState}  from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

export default function AurmenuHeader() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);
 
  return (
    <>
     <header className=" aurmenu-header">
      <div className="header-container aurmenu-header-content container d-flex align-items-center">
        <div className="logo ms-4 ">
                <Link to={"./"}><img src="/staging/images/aurmenu-logo.png" alt="" width={100} /></Link>
              </div>

               <nav className="navigation">
                <ul className="nav-list">
                  <li className="nav-item">
                    <Link className="nav-link" to={"products/7"}>
                      {t("اورمينيو البدايه")}
                    </Link>
                  </li>
              
                  <li className="nav-item">
                    <Link className="nav-link" to={"products/8"}>
                      {t("  اورمينيو التقدم ")}
                    </Link>
                    
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"products/9"}>
                      {t("  اورمينيو التميز ")}
                    </Link>
                    
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"products/10"}>
                      {t("  اورمينيو الاحتراف ")}
                    </Link>
                    
                  </li>
              
                  <li className="nav-item">
                    <a className="nav-link" href="https://aurmenu.com/" target="blank">{t(" المزيد من اورمينيو")}</a>
                    
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link"to={"agentcontact"}>{t("تواصل معنا")}</Link>
                    
                  </li>
              
                  
              
                  <li className="nav-item">
                    <Link className="nav-link">{t("حول اورمنيو")}</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link">{t("المميزات")}</Link>
                  </li>
              
                  
              
                  <li className="nav-item">
                    <Link className="nav-link" to={"support"}>
                      {t("    مركز المساندة والدعم")}
                    </Link>
                  </li>
              
                  <li className="nav-item">
                    <Link className="nav-link" to={"education"}>
                      {t(" التدريب والتعليم")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"careers"}>
                      {t("  التوظيف")}
                    </Link>
                  </li>
              
                  
                </ul>
              </nav>
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
                    <Link className="nav-link" to={"/"}>
                      {t("اورمينيو البدايه")}
                    </Link>
                    <IoClose className="icon-close" onClick={() => { setShow(false) }} />
                  </li>
              
                  <li className="nav-item">
                    <Link className="nav-link" to={"/store"}>
                      {t("  اورمينيو التقدم ")}
                    </Link>
                    
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/store"}>
                      {t("  اورمينيو التميز ")}
                    </Link>
                    
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/store"}>
                      {t("  اورمينيو الاحتراف ")}
                    </Link>
                    
                  </li>
              
                  <li className="nav-item">
                    <Link className="nav-link">{t(" المزيد من اورمينيو")}</Link>
                    
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link">{t("تواصل معنا")}</Link>
                    
                  </li>
              
                  
              
                  <li className="nav-item">
                    <Link className="nav-link">{t("حول اورمنيو")}</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link">{t("المميزات")}</Link>
                  </li>
              
                  
              
                  <li className="nav-item">
                    <Link className="nav-link" to={"/contact"}>
                      {t("    مركز المساندة والدعم")}
                    </Link>
                  </li>
              
                  <li className="nav-item">
                    <Link className="nav-link" to={"/cart"}>
                      {t(" التدريب والتعليم")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/cart"}>
                      {t("  التوظيف")}
                    </Link>
                  </li>
          </ul>
        </div>
      )}
     </header>
    </>
  );
}
