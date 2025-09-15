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

export default function AurestSideBar() {
  const navigate = useNavigate();

  const addonItems = [
   {
    id: "printers",
    // icon: <FaPrint />,
    title: "أجهزة الطابعات",
    description: "حلول طباعة الفواتير والإيصالات بكفاءة عالية"
  },
  {
    id: "kitchen-screens",
    // icon: <FaTv />,
    title: "شاشات المطبخ",
    description: "شاشات ذكية لإدارة وتنظيم طلبات المطبخ بسهولة"
  },
  {
    id: "aurest-captain",
    // icon: <FaUserTie />,
    title: "كابتن أورست",
    description: "نظام لإدارة الطلبات داخل الصالة بكفاءة"
  },
  {
    id: "inventory-screen",
    // icon: <FaBoxes />,
    title: "شاشة الجرد",
    description: "شاشة مخصصة لمتابعة وإدارة المخزون بدقة"
  },
  {
    id: "waiting-screen",
    // icon: <FaClock />,
    title: "شاشة الانتظار",
    description: "نظام مناداة وعرض حالة الطلبات للزبائن"
  },
  {
    id: "advanced-marketing",
    // icon: <FaChartLine />,
    title: "حلول تسويقية",
    description: "استراتيجيات وأدوات لزيادة ولاء العملاء ونمو المبيعات"
  }
  ];

  // const handleItemClick = (itemId) => {
  //   navigate(`/aurmenu/product/${itemId}`);
  // };

  return (
    <div className="aurmenu-products-sidebar mt-5 pt-5">
      <div className="sidebar-header">
        <h4>إضافات  اورست</h4>
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
