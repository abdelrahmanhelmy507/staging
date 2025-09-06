import { Button } from "react-bootstrap"
import './aurmenu.css'
export default function AurmenuHero (){

    return(
        <>
        <div className="aurmenu-hero-slide">
           
            <div className="info pe-5 me-5"> 
               <h1 className="title">  قائمة أورمنيو الذكية</h1>
              <p>
               استعرض أطباقك ومشروباتك بطريقة مبتكرة، منظّمة، وسهلة التصفح لعملائك.
              </p>
              <div className="hero-buttons">
                <Button variant="primary" size="lg" className="me-2">
                  ابدأ الآن
                </Button>
                <Button  size="lg">
                  شاهد العرض
                </Button>
              </div>
            </div>
            <div className="image pt-5 mt-5">
              <img src="../aurmenu2.png" alt="" />
            </div>
           
           
        </div>
        </>
    )
}