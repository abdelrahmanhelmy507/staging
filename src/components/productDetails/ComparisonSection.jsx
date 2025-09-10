import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

export default function ComparisonSection({ product }) {
  return (
    <section className="py-5">
      <Container>
        <Row className="g-4 align-items-center">
          <Col md={6}>
            <Card className="shadow-sm border-0">
              <Card.Body>
                <div className="d-flex align-items-baseline gap-3">
                  <h3 className="m-0 text-primary fw-bold">{product.price} ﷼</h3>
                  <del className="text-muted">{product.originalPrice} ﷼</del>
                </div>
                <div className="text-muted mt-2">وفر أكثر مع عرض اليوم</div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Image src={product.images[2]} alt="compare" fluid rounded />
          </Col>
        </Row>
      </Container>
    </section>
  );
}



