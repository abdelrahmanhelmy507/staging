import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { 
  FaArrowLeft, 
  FaCheck, 
  FaStar, 
  FaShoppingCart, 
  FaPhone,
  FaEnvelope,
  FaQrcode,
  FaBell,
  // FaNfcSymbol,
  FaBullhorn,
  FaPlus
} from "react-icons/fa";

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const products = {
    "20": {
      title: "جهاز استقبال طلبات أورمينيو",
      subtitle: "جهاز مخصص لاستقبال الطلبات من العملاء",
      image: "/images/aurmenu-device.jpg",
      price: "299",
      currency: "ريال",
      badge: "الأكثر مبيعاً",
      description: "جهاز استقبال طلبات أورمينيو هو حل متكامل لاستقبال وإدارة الطلبات في مطعمك. يتميز بواجهة سهلة الاستخدام وتكامل كامل مع نظام أورمينيو.",
      features: [
        "شاشة لمس عالية الدقة 10 بوصة",
        "معالج سريع لضمان الأداء الأمثل",
        "اتصال WiFi مستقر",
        "بطارية تدوم طوال اليوم",
        "واجهة سهلة الاستخدام",
        "تكامل كامل مع نظام أورمينيو",
        "دعم متعدد اللغات",
        "تحديثات تلقائية"
      ],
      specifications: {
        "الشاشة": "10 بوصة LCD",
        "المعالج": "Quad-core 2.0GHz",
        "الذاكرة": "4GB RAM",
        "التخزين": "64GB",
        "الاتصال": "WiFi, Bluetooth",
        "البطارية": "5000mAh",
        "الأبعاد": "25 x 18 x 2 cm",
        "الوزن": "800g"
      },
      // icon: <FaDeviceMobile />
    },
    "notifications-device": {
      title: "جهاز الإشعارات الذكي",
      subtitle: "نظام إشعارات متقدم للطلبات الجديدة",
      image: "/images/notification-device.jpg",
      price: "199",
      currency: "ريال",
      badge: "جديد",
      description: "جهاز الإشعارات الذكي يساعدك في متابعة الطلبات الجديدة والتحديثات المهمة في مطعمك. يتميز بإشعارات صوتية وضوئية واضحة.",
      features: [
        "إشعارات صوتية قابلة للتخصيص",
        "إضاءة LED ملونة",
        "شاشة صغيرة لعرض التفاصيل",
        "اتصال WiFi",
        "بطارية طويلة الأمد",
        "سهولة التركيب",
        "متوافق مع جميع أجهزة أورمينيو",
        "إعدادات قابلة للتخصيص"
      ],
      specifications: {
        "الشاشة": "2.4 بوصة OLED",
        "الاتصال": "WiFi",
        "البطارية": "3000mAh",
        "الأبعاد": "8 x 6 x 2 cm",
        "الوزن": "150g",
        "المدة": "30 يوم",
        "الصوت": "مكبر صوت 5W",
        "الإضاءة": "LED RGB"
      },
      icon: <FaBell />
    },
    "qr-printing": {
      title: "خدمة طباعة QR Code",
      subtitle: "خدمة طباعة أكواد QR للقوائم",
      image: "/images/qr-printing.jpg",
      price: "49",
      currency: "ريال",
      badge: "خدمة",
      description: "خدمة طباعة أكواد QR احترافية لقوائم مطعمك. نحن نطبع ونرسل لك أكواد QR عالية الجودة جاهزة للاستخدام.",
      features: [
        "طباعة عالية الجودة",
        "مواد مقاومة للماء",
        "تصميم مخصص لهوية مطعمك",
        "شحن مجاني",
        "تسليم سريع",
        "أحجام متعددة",
        "دعم جميع أنواع الأسطح",
        "ضمان الجودة"
      ],
      specifications: {
        "الحجم": "10x10 سم (قابل للتخصيص)",
        "المادة": "فينيل مقاوم للماء",
        "التسليم": "3-5 أيام عمل",
        "الكمية": "من 10 إلى 1000 قطعة",
        "التصميم": "مخصص",
        "الضمان": "6 أشهر",
        "الشحن": "مجاني",
        "الدعم": "24/7"
      },
      icon: <FaQrcode />
    },
    "nfc-devices": {
      title: "أجهزة NFC المتقدمة",
      subtitle: "تقنية NFC للدفع والتفاعل السريع",
      image: "/images/nfc-devices.jpg",
      price: "89",
      currency: "ريال",
      badge: "تقني",
      description: "أجهزة NFC متقدمة تتيح للعملاء التفاعل مع قوائمك والدفع بسهولة. تقنية حديثة لتحسين تجربة العملاء.",
      features: [
        "تقنية NFC متقدمة",
        "سرعة في القراءة",
        "متوافق مع جميع الهواتف",
        "تصميم أنيق ومتين",
        "سهولة التركيب",
        "تكامل مع أنظمة الدفع",
        "دعم متعدد اللغات",
        "تحديثات تلقائية"
      ],
      specifications: {
        "التقنية": "NFC 13.56MHz",
        "المدى": "4 سم",
        "السرعة": "106-848 kbps",
        "الأبعاد": "5 x 5 x 0.5 cm",
        "الوزن": "50g",
        "المادة": "بلاستيك ABS",
        "اللون": "أسود/أبيض",
        "الضمان": "سنتان"
      },
      // icon: <FaNfcSymbol />
    },
    "marketing-solutions": {
      title: "حلول التسويق المتقدمة",
      subtitle: "أدوات تسويقية متقدمة لزيادة المبيعات",
      image: "/images/marketing-solutions.jpg",
      price: "149",
      currency: "ريال",
      badge: "تسويقي",
      description: "حزمة شاملة من أدوات التسويق الرقمي لمساعدتك في زيادة مبيعات مطعمك وجذب المزيد من العملاء.",
      features: [
        "حملات تسويقية مخصصة",
        "تحليلات مفصلة",
        "إدارة وسائل التواصل الاجتماعي",
        "تصميم مواد تسويقية",
        "استراتيجيات جذب العملاء",
        "تقارير الأداء",
        "دعم استشاري",
        "تدريب الفريق"
      ],
      specifications: {
        "المدة": "شهري",
        "الحملات": "غير محدود",
        "المنصات": "جميع المنصات",
        "التقارير": "أسبوعية",
        "الدعم": "مستمر",
        "التدريب": "مشمول",
        "التحليلات": "متقدمة",
        "التخصيص": "كامل"
      },
      icon: <FaBullhorn />
    },
    "more-addons": {
      title: "المزيد من الإضافات",
      subtitle: "إضافات أخرى لتحسين تجربة أورمينيو",
      image: "/images/more-addons.jpg",
      price: "يختلف",
      currency: "ريال",
      badge: "متنوع",
      description: "اكتشف المزيد من الإضافات والتطبيقات التي يمكنها تحسين تجربة أورمينيو في مطعمك وتوسيع قدراته.",
      features: [
        "تطبيقات إضافية",
        "وحدات توسيع",
        "تكامل مع أنظمة أخرى",
        "أدوات تحليل متقدمة",
        "حلول مخصصة",
        "دعم تقني متخصص",
        "تحديثات مستمرة",
        "استشارات تقنية"
      ],
      specifications: {
        "النوع": "متنوع",
        "التوافق": "أورمينيو",
        "التثبيت": "مدعوم",
        "التدريب": "مشمول",
        "الدعم": "24/7",
        "التحديثات": "مجانية",
        "الضمان": "حسب المنتج",
        "التخصيص": "متاح"
      },
      icon: <FaPlus />
    }
  };

  const product = products[0];

  if (!product) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <h2>المنتج غير موجود</h2>
          <Button variant="primary" onClick={() => navigate('/aurmenu')}>
            العودة للصفحة الرئيسية
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <div className="product-details-page py-5">
      <Container>
        <Row>
          <Col lg={12}>
            <Button 
              variant="outline-secondary" 
              onClick={() => navigate('/aurmenu')}
              className="mb-4"
            >
              <FaArrowLeft className="me-2 " />
              العودة لأورمينيو
            </Button>
          </Col>
        </Row>

        <Row className="g-4">
          {/* Product Image */}
          <Col lg={6} md={6} sm={12}>
            <div className="product-image-container">
              <img 
                src={product.image} 
                alt={product.title}
                className="product-image img-fluid rounded"
                onError={(e) => {
                  e.target.src = '/images/placeholder-product.jpg';
                }}
              />
              {product.badge && (
                <Badge bg="primary" className="product-badge">
                  {product.badge}
                </Badge>
              )}
            </div>
          </Col>

          {/* Product Info */}
          <Col lg={6} md={6} sm={12}>
            <div className="product-info">
              <div className="product-icon mb-3">
                {product.icon}
              </div>
              <h1 className="product-title">{product.title}</h1>
              <p className="product-subtitle text-muted">{product.subtitle}</p>
              
              <div className="product-price mb-4">
                <span className="price-amount">{product.price}</span>
                <span className="price-currency"> {product.currency}</span>
                {productId !== "more-addons" && (
                  <span className="price-period"> / شهرياً</span>
                )}
              </div>

              <p className="product-description mb-4">
                {product.description}
              </p>

              <div className="product-actions mb-4">
                <Button variant="primary" size="lg" className="me-3">
                  <FaShoppingCart className="me-2" />
                  اطلب الآن
                </Button>
                <Button variant="outline-primary" size="lg">
                  <FaPhone className="me-2" />
                  اتصل بالبيع
                </Button>
              </div>

              <div className="product-rating mb-4">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star filled" />
                  ))}
                </div>
                <span className="rating-text">(4.8) - 127 تقييم</span>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={8} md={12}>
            {/* Features */}
            <Card className="mb-4">
              <Card.Header>
                <h3>المميزات الرئيسية</h3>
              </Card.Header>
              <Card.Body>
                <Row>
                  {product.features.map((feature, index) => (
                    <Col md={6} sm={12} key={index}>
                      <div className="feature-item d-flex align-items-center mb-3">
                        <FaCheck className="text-success me-3" />
                        <span>{feature}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>

            {/* Specifications */}
            <Card>
              <Card.Header>
                <h3>المواصفات التقنية</h3>
              </Card.Header>
              <Card.Body>
                <Row>
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <Col md={6} sm={12} key={index}>
                      <div className="spec-item d-flex justify-content-between mb-3">
                        <span className="spec-label">{key}:</span>
                        <span className="spec-value">{value}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={12}>
            {/* Contact Card */}
            <Card className="contact-card">
              <Card.Header>
                <h4>هل تحتاج مساعدة؟</h4>
              </Card.Header>
              <Card.Body>
                <p>فريقنا متاح لمساعدتك في اختيار الحل المناسب لمطعمك.</p>
                
                <div className="contact-methods">
                  <div className="contact-method d-flex align-items-center mb-3">
                    <FaPhone className="text-primary me-3" />
                    <div>
                      <div>+966 50 123 4567</div>
                      <small className="text-muted">مبيعات</small>
                    </div>
                  </div>
                  
                  <div className="contact-method d-flex align-items-center mb-3">
                    <FaEnvelope className="text-primary me-3" />
                    <div>
                      <div>sales@aurmenu.com</div>
                      <small className="text-muted">البريد الإلكتروني</small>
                    </div>
                  </div>
                </div>

                <Button variant="outline-primary" className="w-100">
                  طلب عرض توضيحي
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

