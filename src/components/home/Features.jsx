import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { 
  FaMobileAlt, 
  FaWifi, 
  FaCreditCard, 
  FaChartLine, 
  FaCloud,
  FaShieldAlt,
  FaBolt,
  FaUsers,
  FaGlobe,
  FaHeadset
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Features() {
  const { t, i18n } = useTranslation();

  const features = [
    {
      title: t("تصميم يراعي الأولوية للجوال"),
      desc: t("محسن للأجهزة اللوحية والأجهزة المحمولة مع واجهات تعمل باللمس سهلة الاستخدام."),
      icon: FaMobileAlt
    },
    {
      title: t("متصل دائما"),
      desc: t("النظام المستند إلى السحابة يعمل عبر الإنترنت ودون اتصال مع مزامنة تلقائية."),
      icon: FaWifi
    },
    {
      title: t("دعم متعدد للدفع"),
      desc: t("اقبل جميع طرق الدفع بما في ذلك الدفع بدون تلامس والبطاقات والمحافظ المحمولة."),
      icon: FaCreditCard
    },
    {
      title: t("تحليلات في الوقت الفعلي"),
      desc: t("تقارير حية وتحليلات لمساعدتك في اتخاذ قرارات مبنية على البيانات."),
      icon: FaChartLine
    },
    {
      title: t("بنية تحتية سحابية"),
      desc: t("بنية تحتية سحابية آمنة وقابلة للتوسع مع تحديثات تلقائية."),
      icon: FaCloud
    },
    {
      title: t("أمن المؤسسات"),
      desc: t("أمان على مستوى البنوك مع التشفير ومعايير الامتثال."),
      icon: FaShieldAlt
    },
    {
      title: t("سريع كالبرق"),
      desc: t("أداء محسن للتعامل مع كميات كبيرة من المعاملات والفترات المزدحمة."),
      icon: FaBolt
    },
    {
      title: t("إدارة الموظفين"),
      desc: t("أدوار مستخدمين متقدمة وصلاحيات وتتبع الأداء."),
      icon: FaUsers
    },
    {
      title: t("متعدد اللغات"),
      desc: t("دعم للغة العربية، والإنجليزية، ولغات أخرى مع دعم الكتابة من اليمين إلى اليسار (RTL)."),
      icon: FaGlobe
    },
    {
      title: t("24/7 دعم"),
      desc: t("دعم فني وخدمة عملاء على مدار الساعة."),
      icon: FaHeadset
    }
  ];

  return (
    <section className="features-section py-5" id="features">
      <Container>
        <div className="text-center mb-5">
          <h2 className="features-title fw-bold mb-3 text-center">
            {t("لماذا تختار أوريجس؟")}
          </h2>
          <p className="features-subtitle">
            {t("مصمم لصناعة الضيافة الحديثة بميزات وموثوقية على مستوى المؤسسات")}
          </p>
        </div>
        
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col lg={3} md={4} sm={6} key={index}>
              <Card className="feature-card h-100">
                <Card.Body className="text-center">
                  <div className="feature-icon mb-3">
                    <feature.icon />
                  </div>
                  <Card.Title className="feature-card-title fw-bold mb-3">
                    {feature.title}
                  </Card.Title>
                  <Card.Text className="feature-card-text">
                    {feature.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
