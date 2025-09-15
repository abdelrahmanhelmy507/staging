import { Outlet } from "react-router-dom";
import AurestHeader from "./AurestHeader";
import AurestFooter from "./AurestFooter";
export default function AurestOutlet() {
  return (
    <div className="store-container">
      <AurestHeader />
      <Outlet />
       <AurestFooter />
    </div>
  );
}