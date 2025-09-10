import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function AboutSection({ product }) {
  return (
    <section className="py-5">
      <Container>
  <Row className=" g-4">
    <Col md={6}>
      <h4 className="fw-bold mb-3">عن المنتج</h4>
      <p className="text-muted">
        {product.description} يتميز بنظام مرن، توافق عالٍ مع العتاد،
        ودعم فني سريع. صُمم ليكبر مع نشاطك التجاري ويوفر لك رؤية واضحة
        لعملياتك اليومية.
      </p>

      {/* Loop over features */}
      {product.features.map((feature, i) => (
        <div key={i} className="mb-3 ">
          <h5 className="fw-semibold">{feature.category}</h5>
          <ul className="text-muted features-list mb-0">
            {feature.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </Col>

    <Col md={6}>
      <Image src={product.images[1]} alt="about" fluid rounded />
    </Col>
  </Row>
</Container>
    </section>
  );
}



