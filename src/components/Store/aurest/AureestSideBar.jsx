import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AurestSideBar() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const addonItems = [
    {
      id: "printers",
      title: t("أجهزة الطابعات"),
      description: t("حلول طباعة الفواتير والإيصالات بكفاءة عالية")
    },
    {
      id: "kitchen-screens",
      title: t("شاشات المطبخ"),
      description: t("شاشات ذكية لإدارة وتنظيم طلبات المطبخ بسهولة")
    },
    {
      id: "aurest-captain",
      title: t("كابتن أورست"),
      description: t("نظام لإدارة الطلبات داخل الصالة بكفاءة")
    },
    {
      id: "inventory-screen",
      title: t("شاشة الجرد"),
      description: t("شاشة مخصصة لمتابعة وإدارة المخزون بدقة")
    },
    {
      id: "waiting-screen",
      title: t("شاشة الانتظار"),
      description: t("نظام مناداة وعرض حالة الطلبات للزبائن")
    },
    {
      id: "advanced-marketing",
      title: t("حلول تسويقية"),
      description: t("استراتيجيات وأدوات لزيادة ولاء العملاء ونمو المبيعات")
    }
  ];

  const handleItemClick = (itemId) => {
    navigate(`/aurmenu/product/${itemId}`);
  };

  return (
    <div className="aurmenu-products-sidebar mt-5 pt-5">
      <div className="sidebar-header">
        <h4>{t("إضافات اورست")}</h4>
        <p>{t("اكتشف الإضافات المتاحة")}</p>
      </div>
      
      <div className="sidebar-items">
        {addonItems.map((item) => (
          <div 
            key={item.id}
            className="sidebar-item" 
            onClick={() => handleItemClick(item.id)}
          >
            <div className="item-icon">
              {item.icon}
            </div>
            <div className="item-content">
              <h6 className="item-title">{item.title}</h6>
              <p className="item-description">{item.description}</p>
            </div>
            <div className="item-arrow">
              <i className="fas fa-arrow-left"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
