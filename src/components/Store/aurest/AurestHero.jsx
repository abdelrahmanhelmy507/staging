import { Button } from 'react-bootstrap'
import './aurest.css'
export default function AurestHero (){

    return(
        <>
         <div className="aurest-hero-slide ">
            <img
              className="d-block w-100"
              src="/staging/images/slide1.jpg"
              alt=" slide"
            />
            <div className="overlay2"></div>
            <div className="hero-content2">
              <h1>  أنظمة أورست الفعالة في إدارة المطاعم تناسب احتياجات مشاريعك اليومية</h1>
              <p>
               مع نظام أورست، ستحصل على باقة كبرى من المميزات والتطويرات المستمرة
                <br />
                من الدفع عبر الهاتف إلى شاشات المطبخ، حوّل نشاطك الفندقي مع أوريجس.
              </p>
              <div className="hero-buttons ">
                <Button variant="primary" size="lg" className="mx-2 aurest-btn">
                  ابدأ الآن
                </Button>
                <Button  size="lg" variant="primary"  className="mx-2 aurest-btn">
                  شاهد العرض
                </Button>
              </div>
            </div>
          </div>
        </>
    )
}