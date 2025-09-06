import { Container, Row, Col, Button } from "react-bootstrap";

export default function AurmenuPricing() {
  return (
    <section className="aurest-pricing py-5">
      <Container>
        <h2 className="text-center mb-5">خطط الأسعار</h2>
        <Row className="g-4">
          {/* LIGHT */}
          <Col lg={3} md={6} sm={12}>
            <div className="pricing-card">
              <h3>الباقة LIGHT</h3>
              <p className="price">
                33.25<span> $ / شهريًا</span>
              </p>
              <ul className="features-list">
                {/* قسم الـ POS */}
                <li>طلبات متعددة الأقسام (Take-away)</li>
                <li>طلبات التوصيل</li>
                <li>قائمة منتجات مع فئات ومجموعات متعددة</li>
                <li>شاشة العملاء</li>
                <li>طرق دفع متعددة</li>
                <li>تقرير البائع</li>
                <li>تقرير القيمة المضافة</li>
                <hr />

                {/* قسم إدارة الـ POS */}
                <li>إدارة نقاط البيع (POS Management)</li>
                <li>إدارة الأقسام</li>
                <li>إدارة قوائم المنتجات</li>
                <li>إدارة التصنيفات والمجموعات</li>
                <li>إدارة شاشة العملاء</li>
                <hr />

                {/* قسم التقارير */}
                <li>إدارة تقارير المبيعات عبر الويب</li>
                <li>التقارير الإحصائية</li>
                <li>التقارير التحليلية</li>
                <li>التقارير الرسومية</li>
                <hr />

                {/* قسم الدعم */}
                <li>نظام تتبع</li>
                <li>دعم فني 24/7</li>
              </ul>
              <Button variant="primary" size="lg" className="w-100">
                اشترك الآن
              </Button>
            </div>
          </Col>

          {/* BASIC */}
          <Col lg={3} md={6} sm={12}>
            <div className="pricing-card">
              <h3>الباقة BASIC</h3>
              <p className="price">
                50<span> $ / شهريًا</span>
              </p>
              <ul className="features-list">
                {/* قسم الـ POS */}
                <li>نظام نقاط البيع (POS)</li>
                <li>طلبات متعددة الأقسام</li>
                <li>طلبات تيك أواي</li>
                <li>طلبات التوصيل</li>
                <li>قائمة المنتجات</li>
                <li>تصنيفات ومجموعات متعددة</li>
                <li>شاشة العملاء</li>
                <li>طرق دفع متعددة</li>
                <li>تقرير البائع</li>
                <li>تقرير القيمة المضافة</li>
                <hr />

                {/* إدارة POS */}
                <li>طلبات داخلية (Dine-In)</li>
                <li>جدولة الطاولات</li>
                <li>إدارة الأقسام</li>
                <li>إدارة قوائم المنتجات</li>
                <li>إدارة طرق الدفع</li>
                <li>إدارة تطبيقات التيك أواي</li>
                <li>إدارة الطلبات الداخلية والطاولات</li>
                <li>إدارة التوصيل</li>
                <hr />

                {/* تقارير */}
                <li>أنظمة العروض</li>
                <li>تقارير إحصائية</li>
                <li>تقارير تحليلية</li>
                <li>تقارير رسومية</li>
                <hr />

                {/* الدعم */}
                <li>نظام تتبع</li>
                <li>دعم فني 24/7</li>
              </ul>
              <Button variant="primary" size="lg" className="w-100">
                اشترك الآن
              </Button>
            </div>
          </Col>

          {/* PRO */}
          <Col lg={3} md={6} sm={12}>
            <div className="pricing-card">
              <h3>الباقة PRO</h3>
              <p className="price">
                83.25<span> $ / شهريًا</span>
              </p>
              <ul className="features-list">
                {/* قسم الـ POS */}
                <li>كل مميزات BASIC</li>
                <li>إدارة العملاء</li>
                <li>نظام الحجوزات</li>
                <hr />

                {/* تقارير وإدارة */}
                <li>تقارير متقدمة</li>
                <li>تقارير إحصائية / تحليلية / رسومية</li>
                <li>إدارة المشتريات</li>
                <li>إدارة المخزون</li>
                <li>إدارة استهلاك المواد الأولية</li>
                <li>إدارة التوريدات</li>
                <hr />

                {/* الدعم */}
                <li>دعم مباشر</li>
                <li>دعم فني 24/7</li>
              </ul>
              <Button variant="primary" size="lg" className="w-100">
                اشترك الآن
              </Button>
            </div>
          </Col>

          {/* ULTIMATE */}
          {/* ULTIMATE */}
          <Col lg={3} md={6} sm={12}>
            <div className="pricing-card ultimate">
              <h3>الباقة ULTIMATE</h3>
              <p className="price">
                100<span> $ / شهريًا</span>
              </p>
              <ul className="features-list">
                {/* قسم الـ POS */}
                <li>نظام نقاط البيع (POS)</li>
                <li>طلبات متعددة الأقسام</li>
                <li>طلبات تيك أواي</li>
                <li>طلبات التوصيل</li>
                <li>قائمة المنتجات</li>
                <li>تصنيفات ومجموعات متعددة</li>
                <li>شاشة العملاء</li>
                <li>طرق دفع متعددة</li>
                <li>تقرير البائع</li>
                <li>تقرير القيمة المضافة</li>
                <hr />

                {/* إدارة POS */}
                <li>طلبات داخلية (Dine-In)</li>
                <li>جدولة الطاولات</li>
                <li>إدارة نقاط البيع</li>
                <li>إدارة الأقسام</li>
                <li>إدارة قوائم المنتجات</li>
                <li>إدارة التصنيفات والمجموعات</li>
                <li>إدارة شاشة العملاء</li>
                <li>إدارة تقارير المبيعات</li>
                <li>إدارة طرق الدفع</li>
                <li>إدارة تطبيقات التيك أواي</li>
                <li>إدارة الطلبات الداخلية والطاولات</li>
                <li>إدارة الطلبات والتوصيل</li>
                <li>مطور نظام POS</li>
                <li>أنظمة العروض</li>
                <li>إدارة العملاء</li>
                <li>نظام الحجوزات</li>
                <hr />

                {/* مميزات إضافية */}
                <li>نظام الولاء والنقاط</li>
                <li>بطاقات الخصم (Debit Cards)</li>
                <li>التقارير المتقدمة</li>
                <li>إدارة المصروفات</li>
                <hr />

                {/* تقارير */}
                <li>الويب</li>
                <li>التقارير الإحصائية</li>
                <li>التقارير التحليلية</li>
                <li>التقارير الرسومية</li>
                <hr />

                {/* إدارة المخزون */}
                <li>نظام تتبع</li>
                <li>المخزون والمشتريات</li>
                <li>نظام استهلاك المواد الأولية</li>
                <li>إدارة التوريدات</li>
                <li>إدارة المخازن</li>
                <hr />

                {/* المحاسبة */}
                <li>المتابعة المحاسبية</li>
                <li>المحاسبة والمخازن</li>
                <li>الربط مع نظام ERP Auracc</li>
                <li>الإشراف المالي</li>
                <hr />

                {/* الدعم */}
                <li>دعم مباشر</li>
                <li>دعم فني 24/7</li>
              </ul>
              <Button variant="primary" size="lg" className="w-100">
                اشترك الآن
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
