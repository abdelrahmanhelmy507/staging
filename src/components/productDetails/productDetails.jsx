import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetails.css";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import AboutSection from "./AboutSection";
import ReviewsSection from "./ReviewsSection";
import ComparisonSection from "./ComparisonSection";
import RelatedProductsSection from "./RelatedProductsSection";
import FinalCTASection from "./FinalCTASection";

// Temporary local catalog. Replace with API later if needed
const CATALOG = [
  {
    id: "1",
    name: "باقة الانطلاق",
    price: 21,
    originalPrice: 24,
    rating: 4.8,
    reviews: 312,
    description:
      "حل نقاط بيع متكامل لإدارة المطاعم والمقاهي مع واجهة سهلة وتجربة سلسة.",
    features: [
      {
        category: "الأساسيات",
        items: ["1 الفرع", "دعم على مدار الساعة طوال الأسبوع"]
      },
      {
        category: "التصميم",
        items: [
          "ترتيب الأصناف",
          "سمات القائمة",
          "تخصيص رمز QR",
          "150 تخيل الصورة بالذكاء الاصطناعي",
          "توسيع الصورة بالذكاء الاصطناعي (قريباً)",
          "300 البحث عن صورة بالذكاء الاصطناعي"
        ]
      },
      {
        category: "التسويق",
        items: [
          "قائمة العميل (المفضلة)",
          "روابط التواصل الاجتماعي",
          "تقييم العميل",
          "قائمة العملاء"
        ]
      },
      {
        category: "اللغات",
        items: [
          "ترجمة وملء تلقائي بالذكاء الاصطناعي",
          "مساعد العملاء بالذكاء الاصطناعي"
        ]
      },
      {
        category: "الإدارة والأداء",
        items: [
          "لوحة القيادة",
          "الطاولات",
          "المستخدمون والأذونات",
          "تقرير المبيعات",
          "التكامل مع أنظمة إدارة المطاعم هايبر أوريست",
          "تقرير العملاء",
          "تقارير مفصلة",
          "تقارير إحصائية",
          "مبيعات الأصناف",
          "المخزون",
          "خطوط التدفق"
        ]
      }
    ],
    colors: ["#4f46e5", "#e11d48", "#111827"],
    sizes: ["صغير", "متوسط", "كبير"],
    images: ["/staging/images/starter.png","/staging/images/aurmenuhero.jpg", "/staging/images/aurmenu3.jpg", "/staging/images/aurmenu.png"]
  },
  {
    id: "2",
    name: "Aurest Suite",
    price: 1800,
    originalPrice: 2200,
    rating: 4.6,
    reviews: 189,
    description:
      "نظام إدارة المخازن والمستودعات مع تتبع دفعات وصلاحيات دقيقة.",
    features: [
      {
        category: "المميزات",
        items: [
          "جرد ذكي",
          "صلاحيات متعددة",
          "تكامل مع نقاط البيع",
          "تنبيهات المخزون"
        ]
      }
    ],
    colors: ["#0ea5e9", "#111827"],
    sizes: ["قياسي"],
    images: ["/aurest2.jpg", "/aurest.png", "/storehero.jpg"]
  }
];


export default function ProductDetailsLanding() {
  const { id } = useParams();
  const product = useMemo(
    () => CATALOG.find((p) => p.id === id) || CATALOG[0],
    [id]
  );
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeColor, setActiveColor] = useState(
    product.colors?.[0] || "#4f46e5"
  );
  const [activeSize, setActiveSize] = useState(product.sizes?.[0] || "قياسي");

  return (
    <div className="product-details-page py-5">
      <HeroSection
        product={product}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
        quantity={quantity}
        setQuantity={setQuantity}
        activeColor={activeColor}
        setActiveColor={setActiveColor}
        activeSize={activeSize}
        setActiveSize={setActiveSize}
      />

      {/* <FeaturesSection features={product.features} /> */}
      <AboutSection product={product} />
      <ReviewsSection />
      <ComparisonSection product={product} />
      <RelatedProductsSection catalog={CATALOG} currentId={product.id} />
      <FinalCTASection product={product} />
    </div>
  );
}
