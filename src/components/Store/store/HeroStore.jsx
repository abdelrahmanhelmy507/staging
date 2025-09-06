import React from "react";
import { Carousel , Button  } from "react-bootstrap";
import '../stor.css'
export default  function  HeroStore () {
    return (
        <>
         
          <div className="store-hero-slide ">
            <img
              className="d-block w-100"
              src="./storehero.jpg"
              alt="Second slide"
            />
            <div className="overlay"></div>
            <div className="hero-content">
              <h1>     حلول تقنية متكاملة لنمو أعمالك </h1>
              <p>
                حلول تقنية حديثة تساعدك على تطوير أعمالك بثقة واحترافية
               
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