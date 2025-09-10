import { Button } from "react-bootstrap"
import './aurmenu.css'
export default function AurmenuHero (){

    return(
        <>
       <div className="store-hero-slide ">
            <img
              className="d-block w-100"
              src="/staging/images/aurmenuhero.jpg"
              alt="Second slide"
            />
            <div className="overlay"></div>
            <div className="hero-content">
              <h1>    نظام إدارة القوائم الذكي </h1>
              <p>
                طريقتك الأسهل لإدارة وعرض القوائم بشكل ذكي وسريع يجذب عملاءك
               
              </p>
              <div className="hero-buttons">
                <Button variant="primary" size="lg" className=" mx-2">
                  ابدأ الآن
                </Button>
                <Button  size="lg" className="mx-2">
                  شاهد العرض
                </Button>
              </div>
            </div>
          </div>
        </>
    )
}