import { Button } from "react-bootstrap"
import './aurmenu.css'
export default function AurmenuHero (){

    return(
        <>
       <div className="store-hero-slide aurmenu-hero-p ">
            <img
              className="d-block w-100"
              src="/staging/images/aurmenuhero.jpg"
              alt="Second slide"
            />
            <div className="overlay"></div>
            <div className="hero-content ">
         <img src="/staging/images/aurmenu-logo-light.png" alt="" className="aurmenu-logo mb-4"/>
              <h1>    نظام إدارة القوائم الذكي </h1>
              <p>
                طريقتك الأسهل لإدارة وعرض القوائم بشكل ذكي وسريع يجذب عملاءك
               
              </p>
              <div className="hero-buttons">
                <Button  size="lg" className=" mx-2 aurmenu-bg-color">
                  ابدأ الآن
                </Button>
                <Button  size="lg" className="mx-2 aurmenu-bg-color">
                  شاهد العرض
                </Button>
              </div>
            </div>
          </div>
        </>
    )
}