import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { FaEnvelope, FaPhone, FaUser, FaComment } from "react-icons/fa";

export default function CustomerContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'الاسم مطلوب';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }

    if (!formData.phone) {
      newErrors.phone = 'رقم الهاتف مطلوب';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'الرسالة مطلوبة';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="customer-contact-page py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10} sm={12}>
            <div className="text-center mb-5">
              <h1 className="page-title">اتصل بنا</h1>
              <p className="page-subtitle">
                نحن هنا لمساعدتك! تواصل معنا للحصول على الدعم أو الاستفسارات حول أورمينيو
              </p>
            </div>

            {submitStatus === 'success' && (
              <Alert variant="success" className="mb-4">
                <Alert.Heading>تم إرسال رسالتك بنجاح!</Alert.Heading>
                <p>شكراً لتواصلك معنا. سنقوم بالرد عليك في أقرب وقت ممكن.</p>
              </Alert>
            )}

            {submitStatus === 'error' && (
              <Alert variant="danger" className="mb-4">
                <Alert.Heading>حدث خطأ!</Alert.Heading>
                <p>عذراً، حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.</p>
              </Alert>
            )}

            <Form onSubmit={handleSubmit} className="contact-form">
              <Row className="g-3">
                <Col md={6} sm={12}>
                  <Form.Group controlId="name">
                    <Form.Label className="form-label">
                      <FaUser className="me-2" />
                      الاسم الكامل *
                    </Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      isInvalid={!!errors.name}
                      placeholder="أدخل اسمك الكامل"
                      className="form-control-custom"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6} sm={12}>
                  <Form.Group controlId="email">
                    <Form.Label className="form-label">
                      <FaEnvelope className="me-2" />
                      البريد الإلكتروني *
                    </Form.Label>
                    <Form.Control
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      isInvalid={!!errors.email}
                      placeholder="example@email.com"
                      className="form-control-custom"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6} sm={12}>
                  <Form.Group controlId="phone">
                    <Form.Label className="form-label">
                      <FaPhone className="me-2" />
                      رقم الهاتف *
                    </Form.Label>
                    <PhoneInput
                      international
                      countryCallingCodeEditable={false}
                      defaultCountry="SA"
                      value={formData.phone}
                      onChange={(value) => handleInputChange('phone', value)}
                      placeholder="أدخل رقم هاتفك"
                      className={`phone-input ${errors.phone ? 'is-invalid' : ''}`}
                    />
                    {errors.phone && (
                      <div className="invalid-feedback d-block">
                        {errors.phone}
                      </div>
                    )}
                  </Form.Group>
                </Col>

                <Col md={6} sm={12}>
                  <Form.Group controlId="subject">
                    <Form.Label className="form-label">
                      موضوع الاستفسار
                    </Form.Label>
                    <Form.Select className="form-control-custom">
                      <option value="">اختر موضوع الاستفسار</option>
                      <option value="general">استفسار عام</option>
                      <option value="technical">دعم فني</option>
                      <option value="sales">مبيعات</option>
                      <option value="billing">الفواتير والدفع</option>
                      <option value="feature">طلب ميزة جديدة</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col sm={12}>
                  <Form.Group controlId="message">
                    <Form.Label className="form-label">
                      <FaComment className="me-2" />
                      الرسالة *
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      isInvalid={!!errors.message}
                      placeholder="اكتب رسالتك هنا..."
                      className="form-control-custom"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <div className="text-center mt-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="submit-btn"
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                </Button>
              </div>
            </Form>

            <div className="contact-info mt-5">
              <Row className="g-4">
                <Col md={4} sm={12}>
                  <div className="contact-item text-center">
                    <div className="contact-icon">
                      <FaPhone />
                    </div>
                    <h5>اتصل بنا</h5>
                    <p>+966 50 123 4567</p>
                    <p>+966 11 234 5678</p>
                  </div>
                </Col>
                <Col md={4} sm={12}>
                  <div className="contact-item text-center">
                    <div className="contact-icon">
                      <FaEnvelope />
                    </div>
                    <h5>راسلنا</h5>
                    <p>info@aurmenu.com</p>
                    <p>support@aurmenu.com</p>
                  </div>
                </Col>
                <Col md={4} sm={12}>
                  <div className="contact-item text-center">
                    <div className="contact-icon">
                      <FaComment />
                    </div>
                    <h5>ساعات العمل</h5>
                    <p>الأحد - الخميس: 8:00 - 17:00</p>
                    <p>الجمعة - السبت: مغلق</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
