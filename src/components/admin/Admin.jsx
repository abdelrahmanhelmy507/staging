import { Container, Navbar, Image } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import "./admin.css";

export default function Admin() {
  return (
    <div className="admin-layout">
      <SideBar />
      <div className="admin-content">
        <Navbar className="admin-topbar px-3 py-2" expand="md">
          <Container fluid className="justify-content-between">
            <Navbar.Brand className="fw-bold" style={{ color: "var(--primary-color)" }}>
              نظام الإدارة
            </Navbar.Brand>
            <div className="d-flex align-items-center gap-2">
              <span className="text-muted small">مرحبا، أدمن</span>
              <Image src="./AuragesLogo.png" alt="profile"   width={100} height={36} />
            </div>
          </Container>
        </Navbar>
        <div className="p-3 p-md-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}