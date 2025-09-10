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

import { Link } from "react-router-dom";

export default function Register() {
  const [userInput, setUserInput] = useState({
    fname: "",
    lname: "",
    phoneNumber: "",
    email : "",
    country: "",
    userName: "",
    password: "",
  });
  console.log(userInput)
    const register = async (e) => {
    e.preventDefault();
    if (Object.values(userInput).some((field) => !field) ) {
      alert("من فضلك املأ كل الحقول");
      return;
    }
    try {
      const user = userInput;
      await axios.post("", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("تم التسجيل بنجاح ");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <Container
      fluid
      className="signup d-flex justify-content-center align-items-center vh-100 pt-5 mt-5"
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={8} md={6} lg={5}>
          <Card className="shadow-lg signup-card">
            <Card.Body>
              <h3 className="text-center mb-4"> إنشاء حساب</h3>
              <Form onSubmit={register}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formFirstName">
                      <Form.Label>الاسم الاول</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="ادخل الاسم الاول "
                        onChange={(e) => {
                      setUserInput({ ...userInput, fname: e.target.value });
                    }}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formLastName">
                      <Form.Label>ادخل الاسم الثاني</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="ادخل الاسم الثاني "
                        onChange={(e) => {
                      setUserInput({ ...userInput, lname: e.target.value });
                    }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label>رقم الهاتف </Form.Label>
                  <PhoneInput
                    country={"eg"}
                    inputClass="w-100"
                    containerClass="phone-input-rtl"
                    onChange={(value) => {
                      setUserInput({ ...userInput, phoneNumber: value });
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCountry">
                  <Form.Label>الدوله</Form.Label>
                  <Form.Select onChange={(e) => {
                      setUserInput({ ...userInput, country: e.target.value });
                    }}>
                    <option>اختر الدوله </option>
                    <option value="egypt">Egypt</option>
                    <option value="ksa">Saudi Arabia</option>
                    <option value="uae">UAE</option>
                    <option value="usa">USA</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label>اسم المستخدم</Form.Label>
                  <Form.Control type="text" placeholder="ادخل اسم المستخدم " onChange={(e) => {
                      setUserInput({ ...userInput, userName: e.target.value });
                    }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>البريد الالكتروني</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder=" ادخل الايميل الخاص بك "
                    onChange={(e) => {
                      setUserInput({ ...userInput, email: e.target.value });
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>كلمه السر </Form.Label>
                  <Form.Control type="password" placeholder="ادخل كلمه السر " onChange={(e) => {
                      setUserInput({ ...userInput, password: e.target.value });
                    }}/>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  إنشاء حساب
                </Button>
              </Form>

              <div className="text-center mt-3 register-link">
                <span>لديك حساب بالفعل ؟ </span>
                <Link to="/login">تسجيل </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
