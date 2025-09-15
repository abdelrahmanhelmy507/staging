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

export default function AurposSideBar() {
  const navigate = useNavigate();

  const addonItems = [
     {
    id: "aurpos-go-all-6",
    title: "اوربوس AurPOS Go All 6",
    description: "نظام نقاط بيع متكامل للأعمال التجارية"
  },
  {
    id: "aurpos-mobile",
    title: "اوربوس موبايل",
    description: "تطبيق موبايل لإدارة الطلبات والمبيعات"
  },
  {
    id: "aurpos-go-all-4",
    title: "اوربوس AurPOS Go All 4",
    description: "نسخة مدمجة من نظام نقاط البيع للأعمال الصغيرة"
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
        <h4>إضافات أوربوس</h4>
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
