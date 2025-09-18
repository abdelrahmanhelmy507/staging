import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button  } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { t } = useTranslation();
  const [userInput, setUserInput] = useState({
   phoneNumber : ""
  });

  const login = async (e) => {
    e.preventDefault();
    if (!userInput.username || !userInput.email || !userInput.password) {
      alert(t("من فضلك ادخل رقم الهاتف "));
      return;
    }
    try {
      const user = userInput;
      await axios.post("", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert(t("تم التسجيل بنجاح"));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Container
      fluid
      className="login d-flex justify-content-center align-items-center vh-100"
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card className="shadow-lg login-card">
            <Card.Body>
              <h3 className="text-center mb-4 title"> {t("تسجيل")}</h3>
              <Form onSubmit={login}>
                {/* <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label>اسم المستخدم </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="اسم المستخدم "
                    onChange={(e) => {
                      setUserInput({ ...userInput, username: e.target.value });
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>البريد الالكتروني</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="البريد الاكتروني"
                    onChange={(e) => {
                      setUserInput({ ...userInput, email: e.target.value });
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>كلمه السر </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="كلمه السر "
                    onChange={(e) => {
                      setUserInput({ ...userInput, password: e.target.value });
                    }}
                  />
                </Form.Group> */}
                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label> {t("رقم الهاتف")} </Form.Label>
                  <PhoneInput
                    country={"eg"}
                    inputClass="w-100"
                    containerClass="phone-input-rtl"
                    onChange={(value) => {
                      setUserInput({ ...userInput, phoneNumber: value });
                    }}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  {t("تسجيل")}
                </Button>
              </Form>

              <div className="text-center mt-3 register-link">
                <span>{t("لا يوجد لديك حساب؟")} </span>
                <Link to="/register"> {t("انشاء حساب")} </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
