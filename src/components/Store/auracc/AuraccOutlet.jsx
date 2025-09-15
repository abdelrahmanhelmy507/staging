import { Outlet } from "react-router-dom";
import AuraccHeader from "./AuraccHeader";
import AuraccFooter from "./AuraccFooter";

export default function AuraccOutlet() {
  return (
    <div className="store-container">
     <AuraccHeader />
      <Outlet />
      <AuraccFooter />
    </div>
  );
}