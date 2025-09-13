import { Container, Row, Col, Card } from "react-bootstrap";
// import { 
//   FaDeviceMobile, 
//   FaBell, 
//   FaQrcode, 
//   FaNfcSymbol, 
//   FaBullhorn, 
//   FaPlus 
// } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AurmenuSidebar() {
  const navigate = useNavigate();

  const addonItems = [
    {
      id: "order-receiver",
    //   icon: <FaDeviceMobile />,
      title: "جهاز استقبال طلبات أورمينيو",
      description: "جهاز مخصص لاستقبال الطلبات من العملاء"
    },
    {
      id: "notifications-device",
    //   icon: <FaBell />,
      title: "جهاز الإشعارات",
      description: "نظام إشعارات متقدم للطلبات الجديدة"
    },
    {
      id: "qr-printing",
    //   icon: <FaQrcode />,
      title: "طباعة QR Code",
      description: "خدمة طباعة أكواد QR للقوائم"
    },
    {
      id: "nfc-devices",
    //   icon: <FaNfcSymbol />,
      title: "أجهزة NFC",
      description: "تقنية NFC للدفع والتفاعل السريع"
    },
    {
      id: "marketing-solutions",
    //   icon: <FaBullhorn />,
      title: "حلول التسويق",
      description: "أدوات تسويقية متقدمة لزيادة المبيعات"
    },
    {
      id: "more-addons",
    //   icon: <FaPlus />,
      title: "المزيد من الإضافات",
      description: "إضافات أخرى لتحسين تجربة أورمينيو"
    }
  ];

  // const handleItemClick = (itemId) => {
  //   navigate(`/aurmenu/product/${itemId}`);
  // };

  return (
    <div className="aurmenu-products-sidebar mt-5 pt-5">
      <div className="sidebar-header">
        <h4>إضافات أورمينيو</h4>
        <p>اكتشف الإضافات المتاحة</p>
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
