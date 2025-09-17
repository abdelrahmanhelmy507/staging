import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // إضافة الترجمة

export default function AuraccSideBar() {
  const navigate = useNavigate();
  const { t } = useTranslation(); // hook الترجمة

  const addonItems = [
    {
      id: "small-medium-business-solutions",
      title: "حلول المنشآت الصغيرة والمتوسطة",
      description: "خدمات وحلول مخصصة لدعم نمو الأعمال الصغيرة والمتوسطة"
    },
    {
      id: "orac-pos",
      title: "اوراك لنقاط البيع",
      description: "نظام نقاط بيع متطور لإدارة المبيعات والمعاملات"
    },
    {
      id: "custom-solutions",
      title: "حلول مخصصة",
      description: "حلول مصممة خصيصًا لتلبية احتياجات عملك"
    },
    {
      id: "marketing-solutions",
      title: "حلول تسويقية",
      description: "أدوات تسويقية متقدمة لزيادة المبيعات"
    }
  ];

  // const handleItemClick = (itemId) => {
  //   navigate(`/aurmenu/product/${itemId}`);
  // };

  return (
    <div className="aurmenu-products-sidebar mt-5 pt-5">
      <div className="sidebar-header">
        <h4>{t("إضافات أوراك")}</h4>
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
              <h6 className="item-title">{t(item.title)}</h6>
              <p className="item-description">{t(item.description)}</p>
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
