import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Register() {
   const { t } = useTranslation();
  const [userInput, setUserInput] = useState({
    phoneNumber: "",
  });
    const register = async (e) => {
    e.preventDefault();
    if (Object.values(userInput).some((field) => !field) ) {
      alert("من فضلك ادخل رقم الهاتف  ");
      return;
    }
    try {
      const user = userInput;
      await axios.post("", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert(t("تم التسجيل بنجاح "));
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <Container
      fluid
      className="signup d-flex justify-content-center align-items-center vh-100 "
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={8} md={6} lg={5}>
          <Card className="shadow-lg signup-card">
            <Card.Body>
              <h3 className="text-center mb-4"> {t("تسجيل الدخول")}</h3>
              <Form onSubmit={register}>
                <Row>
                  
                </Row>
                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label>{t("رقم الهاتف")} </Form.Label>
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
                  {t("تسجيل الدخول")}
                </Button>
              </Form>

              <div className="text-center mt-3 register-link">
                <span>{t("لديك حساب بالفعل؟")} </span>
                <Link to="/login">{t("تسجيل")} </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
