import { Container, Row, Col } from "react-bootstrap";
import { 
  FaMobileAlt, 
  FaQrcode, 
  FaBell, 
  FaPrint, 
  FaWifi, 
  FaChartLine,
  FaUsers,
  FaCog,
  FaShieldAlt,
  FaHeadset,
  FaLanguage,
  FaCloud
} from "react-icons/fa";

export default function AurmenuFeatures() {
  const features = [
    {
      icon: <FaMobileAlt />,
      title: "واجهة متجاوبة",
      description: "تصميم متجاوب يعمل على جميع الأجهزة - الهواتف الذكية والأجهزة اللوحية وأجهزة الكمبيوتر"
    },
    {
      icon: <FaQrcode />,
      title: "قوائم QR ذكية",
      description: "إنشاء قوائم QR فورية للعملاء لتصفح الأطباق والأسعار بسهولة"
    },
    {
      icon: <FaBell />,
      title: "إشعارات فورية",
      description: "تلقي إشعارات فورية للطلبات الجديدة والتحديثات المهمة"
    },
    {
      icon: <FaPrint />,
      title: "طباعة تلقائية",
      description: "طباعة تلقائية للطلبات في المطبخ مع إمكانية تخصيص التنسيق"
    },
    {
      icon: <FaWifi />,
      title: "اتصال مستقر",
      description: "نظام اتصال مستقر ومحمي لضمان عدم انقطاع الخدمة"
    },
    {
      icon: <FaChartLine />,
      title: "تحليلات متقدمة",
      description: "تقارير وتحليلات مفصلة عن المبيعات والأطباق الأكثر طلباً"
    },
    {
      icon: <FaUsers />,
      title: "إدارة العملاء",
      description: "نظام شامل لإدارة بيانات العملاء وتتبع طلباتهم السابقة"
    },
    {
      icon: <FaCog />,
      title: "سهولة الإعداد",
      description: "إعداد سريع وبسيط مع دعم فني متخصص لضمان التشغيل الأمثل"
    },
    {
      icon: <FaShieldAlt />,
      title: "أمان عالي",
      description: "حماية متقدمة للبيانات والمعاملات مع تشفير SSL"
    },
    {
      icon: <FaHeadset />,
      title: "دعم 24/7",
      description: "دعم فني متوفر على مدار الساعة لمساعدتك في أي وقت"
    },
    {
      icon: <FaLanguage />,
      title: "دعم متعدد اللغات",
      description: "واجهة متعددة اللغات لتناسب عملاءك من مختلف الجنسيات"
    },
    {
      icon: <FaCloud />,
      title: "نسخ احتياطي سحابي",
      description: "نسخ احتياطي تلقائي لجميع البيانات في السحابة"
    }
  ];

  return (
    <section className="aurmenu-features py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title text-center">مميزات نظام أورمينيو</h2>
          <p className="section-subtitle">
            اكتشف المميزات المتقدمة التي تجعل أورمينيو الحل الأمثل لإدارة قوائم مطعمك
          </p>
        </div>
        
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <div className="aurmenu-feature-card h-100 text-center p-2">
                <div className="aurmenu-feature-icon " >
                  {feature.icon}
                </div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
