import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function SideBar() {
	return (
		<aside className="admin-sidebar">
			<div className="admin-brand">
				<span>لوحة تحكم </span>
			</div>
			<Nav className="flex-column admin-nav" as="nav">
				<NavLink to="/aurages/admin" end>
					الرئيسية
				</NavLink>
				<NavLink to="/aurages/admin/users">
					المستخدمون
				</NavLink>
				<NavLink to="/aurages/admin/products">
					المنتجات
				</NavLink>
				<NavLink to="/aurages/admin/subscriptions">
					الاشتراكات
				</NavLink>
			</Nav>
		</aside>
	);
}


