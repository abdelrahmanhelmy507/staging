
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Aurmenu from "./components/Store/aurmenu/Aurmenu.jsx";
import Aurest from './components/Store/aurest/Aurest.jsx'
import Aurpos from "./components/Store/aurpos/Aurpos.jsx";
import Aurac from "./components/Store/auracc/Aurac.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter , Routes , Route , useLocation} from "react-router-dom";
import Store from "./components/store/Store/Store.jsx";
import ContactUs from "./components/ContactUs/ContactUs";
import StoreOutlet from './components/Store/store/StoreOutlet.jsx'
import LegalAgreement from "./components/LegalAgreement.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import Admin from "./components/admin/Admin.jsx";
import Dashboard from "./components/admin/Dashboard.jsx";
import UsersDashboard from "./components/admin/UsersDashboard.jsx";
import ProductDashboard from "./components/admin/ProductDashboard.jsx";
import SubscribesDashboard from "./components/admin/SubscribesDashboard.jsx";
import ProductDetails from "./components/admin/ProductDetails.jsx";



// import Syber from "./components/Syber/syber";
// import SSL from "./components/Syber/SSL";
// import SiteLock from "./components/Syber/SiteLock";
// import CodeGuard from "./components/Syber/COdeGuard";
// import Acronis from "./components/Syber/Acronis";


// import Technical from './components/TechSolution/Technaical';
// import Server from './components/TechSolution/server';
// import GraphicDesign from "./components/TechSolution/GraphicDesign";
// import ApplicationPrograming from './components/TechSolution/ApplicationPrograming';
// import Websites from './components/TechSolution/Websites';



function Layout({ children }) {
  const location = useLocation();
  const hideLayout = location.pathname.startsWith("/aurages/admin");

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/aurages" element={<Home />} />
          <Route path="/aurages/store" element={<StoreOutlet />}>
            <Route index element={<Store />} />
            <Route path="aurmenu" element={<Aurmenu />} />
            <Route path="aurest" element={<Aurest />} />
            <Route path="aurpos" element={<Aurpos />} />
            <Route path="auracc" element={<Aurac />} />
          </Route>

          {/* <Route path="/aurages/cybersecurity" element={<Syber />}>
            <Route path="cybersecurity/ssl" element={<SSL />} />
            <Route path="cybersecurity/sitelock" element={<SiteLock />} />
            <Route path="cybersecurity/codeguard" element={<CodeGuard />} />
            <Route path="cybersecurity/acronis" element={<Acronis />} />
          </Route> */}

          {/* <Route path="/aurages/technical" element={<Technical />}>
            <Route path="technical/server" element={<Server />} />
            <Route path="technical/Graphic" element={<GraphicDesign />} />
            <Route path="technical/applictionprograming" element={<ApplicationPrograming />} />
            <Route path="technical/websites" element={<Websites />} />
          </Route> */}

          <Route path="/aurages/contact" element={<ContactUs />} />
          <Route path="/aurages/LegalAgreement" element={<LegalAgreement />} />
          <Route path="/aurages/privacypolicy" element={<PrivacyPolicy />} />

          <Route path="/aurages/admin" element={<Admin />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<UsersDashboard />} />
            <Route path="products" element={<ProductDashboard />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="subscriptions" element={<SubscribesDashboard />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}