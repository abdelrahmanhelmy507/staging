import React from "react";
import { Container, Row, Col, Button, Badge, Image, Form } from "react-bootstrap";
import RatingStars from "./RatingStars";

export default function HeroSection({ product, activeImage, setActiveImage, quantity, setQuantity }) {
  return (
    <>
    <section className="pt-3">
      
    </section>
    <section className="product-hero-section py-5">
     
        <Row className="g-4 align-items-center" >
          <Col lg={8} md={7} xs={12}>
            <div className="hero-gallery">
              <div className="hero-image-wrapper">
                <Image src={product.images[activeImage]} alt={product.name} className="hero-image" fluid />
                {product.discount && (
                  <Badge bg="danger" className="discount-badge">خصم {product.discount}%</Badge>
                )}
              </div>
              <div className="thumbs d-flex gap-3 mt-3">
                {product.images.map((img, idx) => (
                  <Image key={img} src={img} alt="thumb" className={`thumb ${idx === activeImage ? "active" : ""}`} onClick={() => setActiveImage(idx)} rounded />
                ))}
              </div>
            </div>
          </Col>
          <Col lg={4} md={5} xs={12}>
            <div className="hero-info  p-md-0">
              <h2 className="fw-bold mb-2">{product.name}</h2>
              <div className="d-flex align-items-center gap-2 mb-2">
                <RatingStars value={product.rating} />
                <small className="text-muted">({product.reviews} تقييم)</small>
              </div>
              <div className="price-row d-flex align-items-baseline gap-3 mb-3">
                <h3 className="m-0 fw-bold text-primary">{product.price} ﷼</h3>
                {product.originalPrice && (<del className="text-muted">{product.originalPrice} ﷼</del>)}
              </div>

              <p className="text-muted mb-4">{product.description}</p>

              <div className="mb-3">
                {/* <div className="mb-2 fw-semibold">اللون</div> */}
                {/* <div className="d-flex gap-2 flex-wrap">
                  {product.colors?.map((c) => (
                    <button key={c} type="button" className={`color-dot ${activeColor === c ? "active" : ""}`} style={{ backgroundColor: c }} onClick={() => setActiveColor(c)} aria-label={`اختر اللون ${c}`} />
                  ))}
                </div> */}
              </div>

              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-3">
                  {/* <div className="mb-2 fw-semibold">المقاس</div>
                  <div className="d-flex gap-2 flex-wrap">
                    {product.sizes.map((s) => (
                      <Button key={s} variant={activeSize === s ? "primary" : "outline-secondary"} size="sm" onClick={() => setActiveSize(s)}>{s}</Button>
                    ))}
                  </div> */}
                </div>
              )}

              <Form className="d-flex align-items-center gap-2 mb-3">
                <Form.Label className="m-0">الكمية</Form.Label>
                <Form.Control type="number" min={1} value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value || "1", 10))} style={{ maxWidth: 100 }} />
              </Form>

              <div className="d-flex gap-2">
                <Button size="lg">أضف إلى السلة</Button>
                <Button size="lg" variant="outline-primary">اشتري الآن</Button>
              </div>
            </div>
          </Col>
          
           
          
        </Row>
        
      
    </section>
    </>
  );
}







