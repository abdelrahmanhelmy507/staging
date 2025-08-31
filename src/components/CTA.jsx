import React from "react";
import { Container, Button } from "react-bootstrap";

export default function CTA() {
  return (
    <section className="py-4  custom-section "  id="custom">
      <Container className="text-center custom py-5">
        <h2 className="fw-bold mb-3 ">هل تحتاج إلى حزمة مخصصة؟</h2>
        <p className=" mb-4">يمكن لفريقنا مساعدتك في إنشاء الحزمة المثالية حسب احتياجات عملك. تواصل معنا لتوصيات وأسعار خاصة.</p>
        <Button size="lg" className="btn-primary-glow custom-button">اتصل بالمبيعات</Button>
      </Container>
    </section>
  );
}



