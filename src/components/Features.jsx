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

export default function Features() {
  const features = [
    {
      title: "تصميم يراعي الأولوية للجوال",
      desc: "محسن للأجهزة اللوحية والأجهزة المحمولة مع واجهات تعمل باللمس سهلة الاستخدام.",
      icon: FaMobileAlt
    },
    {
      title: "متصل دائما",
      desc: "النظام المستند إلى السحابة يعمل عبر الإنترنت ودون اتصال مع مزامنة تلقائية.",
      icon: FaWifi
    },
    {
      title: "دعم متعدد للدفع",
      desc: "اقبل جميع طرق الدفع بما في ذلك الدفع بدون تلامس والبطاقات والمحافظ المحمولة.",
      icon: FaCreditCard
    },
    {
      title: "تحليلات في الوقت الفعلي",
      desc: "تقارير حية وتحليلات لمساعدتك في اتخاذ قرارات مبنية على البيانات.",
      icon: FaChartLine
    },
    {
      title: "بنية تحتية سحابية",
      desc: "بنية تحتية سحابية آمنة وقابلة للتوسع مع تحديثات تلقائية.",
      icon: FaCloud
    },
    {
      title: "أمن المؤسسات",
      desc: "أمان على مستوى البنوك مع التشفير ومعايير الامتثال.",
      icon: FaShieldAlt
    },
    {
      title: "سريع كالبرق",
      desc: "أداء محسن للتعامل مع كميات كبيرة من المعاملات والفترات المزدحمة.",
      icon: FaBolt
    },
    {
      title: "إدارة الموظفين",
      desc: "أدوار مستخدمين متقدمة وصلاحيات وتتبع الأداء.",
      icon: FaUsers
    },
    {
      title: "متعدد اللغات",
      desc: "دعم للغة العربية، والإنجليزية، ولغات أخرى مع دعم الكتابة من اليمين إلى اليسار (RTL).",
      icon: FaGlobe
    },
    {
      title: "24/7 دعم",
      desc: "دعم فني وخدمة عملاء على مدار الساعة.",
      icon: FaHeadset
    }
  ];

  return (
    <section className="features-section py-5" id="features">
      <Container>
        <div className="text-center mb-5">
          <h2 className="features-title fw-bold mb-3 text-center">لماذا تختار أوريجس؟</h2>
          <p className="features-subtitle">مصمم لصناعة الضيافة الحديثة بميزات وموثوقية على مستوى المؤسسات</p>
        </div>
        
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col lg={2.4} md={4} sm={6} key={index}>
              <Card className="feature-card h-100">
                <Card.Body className="text-center p-4">
                  <div className="feature-icon mb-3">
                    <feature.icon />
                  </div>
                  <Card.Title className="feature-card-title fw-bold mb-3">{feature.title}</Card.Title>
                  <Card.Text className="feature-card-text">{feature.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}



