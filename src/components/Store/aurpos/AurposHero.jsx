import { Button } from "react-bootstrap";
import "./aurpos.css";
export default function AurposHero() {
  return (
    <>
      <div className="store-hero-slide pt-5 ">
        <img
          className="d-block w-100"
          src="../aurpos2.jpg"
          alt="Second slide"
        />
        <div className="overlay"></div>
        <div className="hero-content">
          <h1> إدارة متكاملة لحساباتك </h1>
          <p>
            نظام محاسبي متطور يمكنك استخدامه أينما كنت لمتابعة سير أعمالك بدقة
          </p>
          <div className="hero-buttons">
            <Button variant="primary" size="lg" className=" mx-2">
              ابدأ الآن
            </Button>
            <Button size="lg" className="mx-2">
              شاهد العرض
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
