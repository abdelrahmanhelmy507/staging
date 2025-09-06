import { Container, Row, Col, Form, Button, FloatingLabel } from "react-bootstrap";
import { FaHome, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactUs() {
  return (
    <Container className="py-5 mt-5 contact-container">
      <h2 className="text-center fw-bold mb-5 section-title">تواصل معنا</h2>
      <Row className="g-4 align-items-stretch">
        {/* معلومات التواصل */}
        <Col lg={5}>
          <div className="contact-info p-4 rounded-4 shadow-sm h-100">
            <div className="d-flex align-items-start gap-3 mb-4">
              <div className="icon-box">
                <FaHome />
              </div>
              <div>
                <h6 className="fw-bold">العنوان</h6>
                <p className="mb-0">عنوان تجريبي </p>
              </div>
            </div>

            <div className="d-flex align-items-start gap-3 mb-4">
              <div className="icon-box">
                <FaPhone />
              </div>
              <div>
                <h6 className="fw-bold">الهاتف</h6>
                <p className="mb-1">3258478933</p>
                <p className="mb-1">3258478933</p>
                <p className="mb-0">3258478933</p>
              </div>
            </div>

            <div className="d-flex align-items-start gap-3">
              <div className="icon-box">
                <MdEmail />
              </div>
              <div>
                <h6 className="fw-bold">البريد الإلكتروني</h6>
                <p className="mb-0">example@example.com</p>
              </div>
            </div>
          </div>
        </Col>

        {/* نموذج التواصل */}
        <Col lg={7}>
          <div className="contact-form p-4 rounded-4 shadow-sm h-100">
            <h3 className="fw-bold mb-4">ارسل لنا رسالة</h3>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="ادخل الاسم..." />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="ادخل البريد الإلكتروني..." />
              </Form.Group>
              <FloatingLabel controlId="floatingTextarea2" label="اكتب رسالتك" >
                <Form.Control
                  as="textarea"
                  style={{ height: "120px" }}
                />
              </FloatingLabel>
              <Button variant="primary" type="submit" className="mt-3 w-100 rounded-pill">
                إرسال
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
