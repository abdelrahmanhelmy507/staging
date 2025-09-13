
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-phone-input-2/lib/style.css';


import Home from "./components/home/Home.jsx";
import Aurmenu from "./components/Store/aurmenu/Aurmenu.jsx";
import Aurest from './components/Store/aurest/Aurest.jsx'
import Aurpos from "./components/Store/aurpos/Aurpos.jsx";
import Aurac from "./components/Store/auracc/Aurac.jsx";
import Header from "./components/home/Header.jsx";
import Footer from "./components/home/Footer.jsx";
import "./App.css";
import { BrowserRouter , Routes , Route , useLocation} from "react-router-dom";
import Store from "./components/store/Store/Store.jsx";
import ContactUs from "./components/ContactUs/ContactUs";
import StoreOutlet from './components/Store/store/StoreOutlet.jsx'
import LegalAgreement from "./components/home/LegalAgreement.jsx";
import PrivacyPolicy from "./components/home/PrivacyPolicy.jsx";
import Admin from "./components/admin/Admin.jsx";
import Dashboard from "./components/admin/Dashboard.jsx";
import UsersDashboard from "./components/admin/UsersDashboard.jsx";
import ProductDashboard from "./components/admin/ProductDashboard.jsx";
import SubscribesDashboard from "./components/admin/SubscribesDashboard.jsx";
import ProductDetails from "./components/admin/ProductDetails.jsx";
import ProductDetailsLanding from "./components/productDetails/productDetails.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import RedirectHandler from "./components/RedirectHandler.jsx";
import Cart from "./components/cart/cart.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";



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
import AgentsContact from './components/Store/aurmenu/ContactPages/AgentsContact';
import AurmenuOtlet from "./components/Store/aurmenu/AurmenuOutlit.jsx";
import Careers from "./components/Store/aurmenu/ServicePages/Careers.jsx";
import SupportCenter from "./components/Store/aurmenu/ServicePages/SupportCenter.jsx";
import TrainingEducation from './components/Store/aurmenu/ServicePages/TrainingEducation';



function Layout({ children }) {
  const location = useLocation();
  const hideLayout = location.pathname.startsWith("/admin");

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
    <BrowserRouter basename="/staging/">
      <RedirectHandler />
    <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<StoreOutlet />}>
            <Route index element={<Store />} />
            <Route path="aurmenu" element={<AurmenuOtlet />} >
                        <Route index element={<Aurmenu />} />

              <Route path="agentcontact" element={<AgentsContact />} />
              <Route path="careers" element={<Careers />} />
              <Route path="support" element={<SupportCenter />} />
              <Route path="education" element={<TrainingEducation />} />
              <Route path="products/:id" element={<ProductDetailsLanding />} />
            </Route>
            <Route path="aurest" element={<Aurest />} />
            <Route path="aurpos" element={<Aurpos />} />
            <Route path="auracc" element={<Aurac />} />
          </Route>
          
          <Route path="/products/:id" element={<ProductDetailsLanding />} />
          <Route path="/cart" element ={<Cart/>}/>
          <Route path="/login" element ={<Login />} />
          <Route path="/register" element ={<Register />} />

        

          <Route path="/contact" element={<ContactUs />} />
          <Route path="/LegalAgreement" element={<LegalAgreement />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />

          <Route path="/admin" element={<Admin />}>
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