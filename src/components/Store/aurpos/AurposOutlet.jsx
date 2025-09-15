import { Outlet } from "react-router-dom";
import AurposHeader from './AurposHeader';
import AurposFooter from './AurposFooter';

export default function AurposOtlet() {
  return (
    <div className="store-container">
     <AurposHeader />
      <Outlet />
      <AurposFooter />
    </div>
  );
}