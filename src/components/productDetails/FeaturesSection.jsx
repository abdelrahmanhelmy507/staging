import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function FeaturesSection({ features }) {
  return (
    <section className="py-5 section-alt">
      <Container>
        <Row className="g-4 text-center">
          {features.map((f, idx) => (
            <Col md={3} sm={6} xs={12} key={idx}>
              <Card className="h-100 shadow-sm border-0 p-3">
                <Card.Body>
                  <div className="feature-icon mb-2">⭐</div>
                  <div className="fw-semibold">{f}</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}



