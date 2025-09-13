import { Outlet } from "react-router-dom";
import AurmenuHeader from "./AurmenuHeader";
import AurmenuFooter from "./AurmenuFooter";
export default function AurmenuOtlet() {
  return (
    <div className="store-container">
      <AurmenuHeader />
      <Outlet />
       <AurmenuFooter />
    </div>
  );
}