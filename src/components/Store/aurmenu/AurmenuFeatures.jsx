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
import { useTranslation } from "react-i18next";

export default function AurmenuFeatures() {
  const { t } = useTranslation();
  const features = [
    {
      icon: <FaMobileAlt />,
      title: t("واجهة متجاوبة"),
      description: t("تصميم متجاوب يعمل على جميع الأجهزة - الهواتف الذكية والأجهزة اللوحية وأجهزة الكمبيوتر")
    },
    {
      icon: <FaQrcode />,
      title: t("قوائم QR ذكية"),
      description: t("إنشاء قوائم QR فورية للعملاء لتصفح الأطباق والأسعار بسهولة")
    },
    {
      icon: <FaBell />,
      title: t("إشعارات فورية"),
      description: t("تلقي إشعارات فورية للطلبات الجديدة والتحديثات المهمة")
    },
    {
      icon: <FaPrint />,
      title: t("طباعة تلقائية"),
      description: t("طباعة تلقائية للطلبات في المطبخ مع إمكانية تخصيص التنسيق")
    },
    {
      icon: <FaWifi />,
      title: t("اتصال مستقر"),
      description: t("نظام اتصال مستقر ومحمي لضمان عدم انقطاع الخدمة")
    },
    {
      icon: <FaChartLine />,
      title: t("تحليلات متقدمة"),
      description: t("تقارير وتحليلات مفصلة عن المبيعات والأطباق الأكثر طلباً")
    },
    {
      icon: <FaUsers />,
      title: t("إدارة العملاء"),
      description: t("نظام شامل لإدارة بيانات العملاء وتتبع طلباتهم السابقة")
    },
    {
      icon: <FaCog />,
      title: t("سهولة الإعداد"),
      description: t("إعداد سريع وبسيط مع دعم فني متخصص لضمان التشغيل الأمثل")
    },
    {
      icon: <FaShieldAlt />,
      title: t("أمان عالي"),
      description: t("حماية متقدمة للبيانات والمعاملات مع تشفير SSL")
    },
    {
      icon: <FaHeadset />,
      title: t("دعم 24/7"),
      description: t("دعم فني متوفر على مدار الساعة لمساعدتك في أي وقت")
    },
    {
      icon: <FaLanguage />,
      title: t("دعم متعدد اللغات"),
      description: t("واجهة متعددة اللغات لتناسب عملاءك من مختلف الجنسيات")
    },
    {
      icon: <FaCloud />,
      title: t("نسخ احتياطي سحابي"),
      description: t("نسخ احتياطي تلقائي لجميع البيانات في السحابة")
    }
  ];

  return (
    <section className="aurmenu-features py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title text-center">{t("مميزات نظام أورمينيو")}</h2>
          <p className="section-subtitle">
            {t("اكتشف المميزات المتقدمة التي تجعل أورمينيو الحل الأمثل لإدارة قوائم مطعمك")}
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
