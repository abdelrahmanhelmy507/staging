import React from "react";
import { Container, Button } from "react-bootstrap";

export default function FinalCTASection({ product }) {
  return (
    <section className="py-5 text-center final-cta">
      <Container>
        <h3 className="fw-bold mb-3">جاهز للشراء؟</h3>
        <div className="mb-3 text-muted">احصل على {product.name} الآن بسعر خاص</div>
        <Button size="lg">اشترِ الآن مقابل {product.price} ﷼</Button>
      </Container>
    </section>
  );
}



