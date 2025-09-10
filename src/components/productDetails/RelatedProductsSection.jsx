import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function RelatedProductsSection({ catalog, currentId }) {
  return (
    <section className="py-5 section-alt">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="fw-bold m-0">قد يعجبك أيضاً</h4>
          <Link to="/aurages/store">عرض جميع المنتجات</Link>
        </div>
        <Row className="g-4">
          {catalog.filter((p) => p.id !== currentId).map((p) => (
            <Col md={3} sm={6} xs={12} key={p.id}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Img variant="top" src={p.images[0]} />
                <Card.Body>
                  <div className="fw-semibold mb-1">{p.name}</div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="text-primary fw-bold">{p.price} ﷼</span>
                    <del className="text-muted small">{p.originalPrice} ﷼</del>
                  </div>
                  <Button as={Link} to={`/aurages/products/${p.id}`} variant="outline-primary" className="mt-3" size="sm">التفاصيل</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}



