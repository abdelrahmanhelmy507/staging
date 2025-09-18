import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AurmenuSidebar() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const addonItems = [
    { id: "20", title: t("جهاز استقبال طلبات أورمينيو"), description: t("جهاز مخصص لاستقبال الطلبات من العملاء") },
    { id: "notifications-device", title: t("جهاز الإشعارات"), description: t("نظام إشعارات متقدم للطلبات الجديدة") },
    { id: "qr-printing", title: t("طباعة QR Code"), description: t("خدمة طباعة أكواد QR للقوائم") },
    { id: "nfc-devices", title: t("أجهزة NFC"), description: t("تقنية NFC للدفع والتفاعل السريع") },
    { id: "marketing-solutions", title: t("حلول التسويق"), description: t("أدوات تسويقية متقدمة لزيادة المبيعات") },
    { id: "more-addons", title: t("المزيد من الإضافات"), description: t("إضافات أخرى لتحسين تجربة أورمينيو") }
  ];

  const handleItemClick = (itemId) => {
    navigate(`product/${itemId}`);
  };

  return (
    <div className="aurmenu-products-sidebar">
      <div className="sidebar-header">
        <h4>{t("إضافات أورمينيو")}</h4>
        <p>{t("اكتشف الإضافات المتاحة")}</p>
      </div>
      
      <div className="sidebar-items">
        {addonItems.map((item) => (
          <div key={item.id} className="sidebar-item" onClick={() => handleItemClick(item.id)}>
            <div className="item-icon">{item.icon}</div>
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
