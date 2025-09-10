import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import RatingStars from "./RatingStars";

export default function ReviewsSection() {
  return (
    <section className="py-5 section-alt">
      <Container>
        <h4 className="fw-bold mb-4">تقييمات العملاء</h4>
        <Row className="g-3">
          {[1, 2, 3].map((r) => (
            <Col md={4} key={r}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="fw-semibold">عميل #{r}</div>
                    <RatingStars value={4.5} />
                  </div>
                  <div className="text-muted">منتج رائع سهل الاستخدام وساهم في تسريع عملياتنا اليومية.</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}



