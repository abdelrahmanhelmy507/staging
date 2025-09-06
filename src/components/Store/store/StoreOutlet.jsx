import { Outlet } from "react-router-dom";

export default function Store() {
  return (
    <div className="store-container">
      <Outlet />
    </div>
  );
}