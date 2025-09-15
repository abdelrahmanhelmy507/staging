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
  } ,
   {
    id: "3",
    name: "جهاز استقبال الطلبات",
    price: 150,        // مجرد مثال، عدّل السعر الحقيقي
    originalPrice: 180, // مثال
    rating: 4.5,        // مثال
    reviews: 45,        // مثال
    description:
      "جهاز لعرض و استقبال الطلبات فور ورودها من العملاء، مناسب للمطبخ أو الكاشير لمتابعة الطلبات وتنظيمها.",
    features: [
      {
        category: "الأساسيات",
        items: [
          "عرض الطلبات اللحظي",
          "إشعارات صوتية/مرئية عند وصول طلب جديد"
        ]
      },
      {
        category: "الاتصال والتكامل",
        items: [
          "متصل بالشبكة اللاسلكية Wi-Fi",
          "متكامل مع نظام Aurmenu لإدارة الطلبات"
        ]
      },
      {
        category: "التحكم",
        items: [
          "واجهة سهلة للاستخدام",
          "خيارات تخصيص التنبيه (صوت/ضوء)"
        ]
      }
    ],
    colors: ["#38bdf8", "#10b981"], // ألوان افتراضية
    sizes: ["قياسي"],
    images: ["/images/order_receptor.jpg", "/images/order_receptor2.jpg"]
  },
  {
    id: "4",
    name: "جهاز الإشعارات",
    price: 120,
    originalPrice: 140,
    rating: 4.3,
    reviews: 30,
    description:
      "جهاز مخصص لإظهار إشعارات الطلبات الجديدة أو التذكير بالطلبات المتأخّرة، يمكن وضعه في المطبخ أو المكتب.",
    features: [
      {
        category: "الوظائف",
        items: [
          "إشعارات مرئية",
          "وميض ضوئي أو LED",
          "صوت تنبيه قابل للتعديل"
        ]
      },
      {
        category: "الاتصال",
        items: [
          "يتصل عبر Wi-Fi أو بلوتوث",
          "يدعم الربط مع Aurmenu"
        ]
      },
      {
        category: "الخصائص الفيزيائية",
        items: [
          "خام مستدام",
          "تصميم مقاوم للحرارة والرطوبة"
        ]
      }
    ],
    colors: ["#fcd34d", "#f87171"],
    sizes: ["قياسي"],
    images: ["/images/notification_device.jpg"]
  },
  {
    id: "5",
    name: "طابعة رمز الـ QR",
    price: 80,
    originalPrice: 100,
    rating: 4.6,
    reviews: 25,
    description:
      "طابعة متخصصة لطباعة رمز الاستجابة السريعة QR Code بسرعة وجودة عالية لاستخدامها على الطاولات أو مع العملاء.",
    features: [
      {
        category: "الوظائف",
        items: ["طباعة سريعة", "دقة عالية", "دعم مقاسات متغيرة"]
      },
      {
        category: "الاتصال والتوافق",
        items: ["USB / LAN / Bluetooth", "متوافقة مع Aurmenu لإنشاء رموز QR تلقائياً"]
      },
      {
        category: "الإعداد",
        items: ["سهل التركيب", "دعم فني"]
      }
    ],
    colors: ["#6b7280", "#4ade80"],
    sizes: ["قياسي", "محمول"],
    images: ["/images/qr_printer.jpg"]
  },
  {
    id: "6",
    name: "جهاز NFC",
    price: 90,
    originalPrice: 110,
    rating: 4.7,
    reviews: 20,
    description:
      "جهاز يعتمد على تكنولوجيا NFC لتسهيل الطلب أو الدفع أو تفعيل خدمات مباشرة من خلال لمس الجهاز بهاتف العميل.",
    features: [
      {
        category: "الوظائف",
        items: [
          "قراءة علامات NFC",
          "ربط فوري مع القائمة أو الدفع",
          "إمكانية تخصيص التفاعل حسب العلامة"
        ]
      },
      {
        category: "التكامل",
        items: [
          "يدمج مع Aurmenu",
          "يمكن استخدامه مع الطاولات أو عند الدخول"
        ]
      },
      {
        category: "الأمان",
        items: ["تشفير البيانات", "مصادقة آمنة"]
      }
    ],
    colors: ["#34d399", "#3b82f6"],
    sizes: ["بطاقة", "وحدة سطح مكتب"],
    images: ["/images/nfc_device.jpg"]
  }, 
   {
    id: "7",
    name: "Aurmenu البداية",
    price: 500, // مثال، عدّل بالقيمة الحقيقية
    originalPrice: 600,
    rating: 4.5,
    reviews: 150,
    description:
      "باقة البداية من Aurmenu لتجربة إدارة الطلبات الرقمية بسهولة وبتكلفة مناسبة.",
    features: [
      {
        category: "الأساسيات",
        items: ["فرع واحد", "إدارة قائمة أساسية", "طباعة QR للطاولات"]
      },
      {
        category: "الدعم",
        items: ["دعم فني خلال ساعات العمل"]
      }
    ],
    colors: ["#22c55e", "#3b82f6"],
    sizes: ["صغير"],
    images: ["/images/aurmenu_start.jpg"]
  },
  {
    id: "8",
    name: "Aurmenu التقدم",
    price: 1000,
    originalPrice: 1200,
    rating: 4.6,
    reviews: 98,
    description:
      "باقة التقدم لتوسيع تجربة المطاعم مع المزيد من الأدوات الذكية في Aurmenu.",
    features: [
      {
        category: "التصميم",
        items: ["تخصيص واجهة القائمة", "إضافة صور احترافية"]
      },
      {
        category: "التسويق",
        items: ["ربط مع وسائل التواصل", "مراجعات العملاء"]
      }
    ],
    colors: ["#f59e0b", "#2563eb"],
    sizes: ["متوسط"],
    images: ["/images/aurmenu_progress.jpg"]
  },
  {
    id: "9",
    name: "Aurmenu التميز",
    price: 1500,
    originalPrice: 1800,
    rating: 4.7,
    reviews: 76,
    description:
      "باقة التميز تقدم تجربة أكثر احترافية مع إمكانيات متقدمة لإدارة الطلبات والتقارير.",
    features: [
      {
        category: "الإدارة",
        items: ["تقرير مبيعات مفصل", "إدارة مخزون", "صلاحيات المستخدمين"]
      },
      {
        category: "الأداء",
        items: ["لوحة تحكم متقدمة", "إحصائيات تفاعلية"]
      }
    ],
    colors: ["#8b5cf6", "#ec4899"],
    sizes: ["كبير"],
    images: ["/images/aurmenu_excellence.jpg"]
  },
  {
    id: "10",
    name: "Aurmenu الاحتراف",
    price: 2500,
    originalPrice: 3000,
    rating: 4.9,
    reviews: 54,
    description:
      "باقة الاحتراف من Aurmenu مصممة لتلبية احتياجات السلاسل والمطاعم الكبرى بأعلى مستوى من التكامل.",
    features: [
      {
        category: "التكامل",
        items: ["تكامل مع أنظمة محاسبة", "دعم فروع متعددة", "API مفتوح"]
      },
      {
        category: "الأمان",
        items: ["تشفير كامل للبيانات", "نسخ احتياطي دوري"]
      }
    ],
    colors: ["#dc2626", "#0ea5e9"],
    sizes: ["مؤسسي"],
    images: ["/images/aurmenu_pro.jpg"]
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
    <div className="product-details-page ">
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
