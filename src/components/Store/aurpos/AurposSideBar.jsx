import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AurposSideBar() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const addonItems = [
    {
      id: "aurpos-go-all-6",
      title: t("اوربوس AurPOS Go All 6"),
      description: t("نظام نقاط بيع متكامل للأعمال التجارية")
    },
    {
      id: "aurpos-mobile",
      title: t("اوربوس موبايل"),
      description: t("تطبيق موبايل لإدارة الطلبات والمبيعات")
    },
    {
      id: "aurpos-go-all-4",
      title: t("اوربوس AurPOS Go All 4"),
      description: t("نسخة مدمجة من نظام نقاط البيع للأعمال الصغيرة")
    },
    {
      id: "marketing-solutions",
      title: t("حلول تسويقية"),
      description: t("أدوات تسويقية متقدمة لزيادة المبيعات")
    }
  ];

  const handleItemClick = (itemId) => {
    navigate(`/aurpos/product/${itemId}`);
  };

  return (
    <div className="aurmenu-products-sidebar mt-5 pt-5">
      <div className="sidebar-header">
        <h4>{t("إضافات أوربوس")}</h4>
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
