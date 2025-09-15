import { Container, Row, Col, Form, Button, Alert, Card } from "react-bootstrap";
import { useState } from "react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { FaHandshake, FaBuilding, FaUserTie, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function AgentsContact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    region: '',
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

    if (!formData.company.trim()) {
      newErrors.company = 'اسم الشركة مطلوب';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }

    if (!formData.phone) {
      newErrors.phone = 'رقم الهاتف مطلوب';
    }

    if (!formData.position.trim()) {
      newErrors.position = 'المنصب مطلوب';
    }

    if (!formData.region.trim()) {
      newErrors.region = 'المنطقة مطلوبة';
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
      setFormData({ 
        name: '', 
        company: '', 
        email: '', 
        phone: '', 
        position: '', 
        experience: '', 
        region: '', 
        message: '' 
      });
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

  const benefits = [
    {
      icon: <FaHandshake />,
      title: "شراكة مربحة",
      description: "احصل على عمولات مجزية من كل عملية بيع"
    },
    {
      icon: <FaBuilding />,
      title: "دعم تسويقي",
      description: "مواد تسويقية احترافية وأدوات مبيعات متقدمة"
    },
    {
      icon: <FaUserTie />,
      title: "تدريب شامل",
      description: "برامج تدريبية متخصصة لضمان نجاحك"
    }
  ];

  return (
    <div className="agents-contact-page ">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} md={12} sm={12}>
            <div className="text-center mb-5">
              <h1 className="page-title">انضم كوكيل أو موزع</h1>
              <p className="page-subtitle">
                كن جزءاً من شبكة وكلاء أورمينيو وشارك في نجاحنا. نحن نبحث عن شركاء موثوقين 
                لمساعدتنا في توسيع نطاق خدماتنا في جميع أنحاء المنطقة.
              </p>
            </div>

            {/* Benefits Section */}
            <Row className="mb-5">
              <Col sm={12}>
                <h3 className="text-center mb-4">مميزات الشراكة معنا</h3>
              </Col>
              {benefits.map((benefit, index) => (
                <Col lg={4} md={6} sm={12} key={index} className="mb-3">
                  <Card className="benefit-card h-100 text-center ">
                    <Card.Body>
                      <div className="benefit-icon mb-3">
                        {benefit.icon}
                      </div>
                      <Card.Title>{benefit.title}</Card.Title>
                      <Card.Text>{benefit.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {submitStatus === 'success' && (
              <Alert variant="success" className="mb-4">
                <Alert.Heading>تم إرسال طلبك بنجاح!</Alert.Heading>
                <p>شكراً لاهتمامك بالانضمام إلينا كشريك. سنقوم بالتواصل معك في أقرب وقت ممكن.</p>
              </Alert>
            )}

            {submitStatus === 'error' && (
              <Alert variant="danger" className="mb-4">
                <Alert.Heading>حدث خطأ!</Alert.Heading>
                <p>عذراً، حدث خطأ أثناء إرسال طلبك. يرجى المحاولة مرة أخرى.</p>
              </Alert>
            )}

            <Form onSubmit={handleSubmit} className="contact-form">
              <Row className="g-3">
                <Col md={6} sm={12}>
                  <Form.Group controlId="name">
                    <Form.Label className="form-label">
                      <FaUserTie className="me-2" />
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
                  <Form.Group controlId="company">
                    <Form.Label className="form-label">
                      <FaBuilding className="me-2" />
                      اسم الشركة *
                    </Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      isInvalid={!!errors.company}
                      placeholder="أدخل اسم الشركة"
                      className="form-control-custom"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.company}
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
                      placeholder="example@company.com"
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
                  <Form.Group controlId="position">
                    <Form.Label className="form-label">
                      المنصب *
                    </Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.position}
                      onChange={(e) => handleInputChange('position', e.target.value)}
                      isInvalid={!!errors.position}
                      placeholder="مثل: مدير المبيعات، مدير المنطقة"
                      className="form-control-custom"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.position}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6} sm={12}>
                  <Form.Group controlId="experience">
                    <Form.Label className="form-label">
                      سنوات الخبرة
                    </Form.Label>
                    <Form.Select 
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      className="form-control-custom"
                    >
                      <option value="">اختر سنوات الخبرة</option>
                      <option value="0-2">0-2 سنوات</option>
                      <option value="3-5">3-5 سنوات</option>
                      <option value="6-10">6-10 سنوات</option>
                      <option value="10+">أكثر من 10 سنوات</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={6} sm={12}>
                  <Form.Group controlId="region">
                    <Form.Label className="form-label">
                      <FaMapMarkerAlt className="me-2" />
                      المنطقة المستهدفة *
                    </Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.region}
                      onChange={(e) => handleInputChange('region', e.target.value)}
                      isInvalid={!!errors.region}
                      placeholder="مثل: الرياض، جدة، الدمام"
                      className="form-control-custom"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.region}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6} sm={12}>
                  <Form.Group controlId="businessType">
                    <Form.Label className="form-label">
                      نوع النشاط التجاري
                    </Form.Label>
                    <Form.Select className="form-control-custom">
                      <option value="">اختر نوع النشاط</option>
                      <option value="restaurant">مطعم</option>
                      <option value="cafe">مقهى</option>
                      <option value="fastfood">وجبات سريعة</option>
                      <option value="catering">خدمات التموين</option>
                      <option value="other">أخرى</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col sm={12}>
                  <Form.Group controlId="message">
                    <Form.Label className="form-label">
                      رسالة إضافية *
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      isInvalid={!!errors.message}
                      placeholder="أخبرنا عن خبرتك في مجال المطاعم والتقنية، وأهدافك من الشراكة معنا..."
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
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال طلب الشراكة'}
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
                    <p>partners@aurmenu.com</p>
                    <p>business@aurmenu.com</p>
                  </div>
                </Col>
                <Col md={4} sm={12}>
                  <div className="contact-item text-center">
                    <div className="contact-icon">
                      <FaHandshake />
                    </div>
                    <h5>مكتب الشراكة</h5>
                    <p>الأحد - الخميس: 9:00 - 18:00</p>
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
