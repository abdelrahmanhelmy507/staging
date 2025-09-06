// App.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Aurmenu from "./components/Store/aurmenu/Aurmenu.jsx";
import Aurest from './components/Store/aurest/Aurest.jsx'
import Aurpos from "./components/Store/Aurpos";
import Aurac from "./components/Store/Aurac";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Store from "./components/store/Store/Store.jsx";
import Syber from "./components/Syber/syber";
import SSL from "./components/Syber/SSL";
import SiteLock from "./components/Syber/SiteLock";
import CodeGuard from "./components/Syber/COdeGuard";
import Acronis from "./components/Syber/Acronis";
import Technical from './components/TechSolution/Technaical';
import Server from './components/TechSolution/server';
import GraphicDesign from "./components/TechSolution/GraphicDesign";
import ApplicationPrograming from './components/TechSolution/ApplicationPrograming';
import Websites from './components/TechSolution/Websites';
import ContactUs from "./components/ContactUs/ContactUs";
import StoreOutlet from './components/Store/store/StoreOutlet.jsx'



export default function App() {
  return (
    <div>
      <BrowserRouter>
       <Header />
        <Routes>
          <Route path="/aurages" element={<Home/>} />
          <Route path="/aurages/store" element={< StoreOutlet />}>
            <Route index element={< Store/>} />
            <Route path="aurmenu" element={<Aurmenu/>}/> 
            <Route path="aurest" element={<Aurest/>}/> 
            <Route path="aurpos" element={<Aurpos/>}/> 
            <Route path="aurac" element={<Aurac/>}/> 
          </Route>
          <Route path="/aurages/cybersecurity"  element = {<Syber/>}>
            <Route path="cybersecurity/ssl" element={<SSL/>}/> 
            <Route path="cybersecurity/sitelock" element={<SiteLock/>}/> 
            <Route path="cybersecurity/codeguard" element={<CodeGuard/>}/> 
            <Route path="cybersecurity/acronis" element={<Acronis/>}/> 
          </Route>
          <Route path="/aurages/technical"  element = {<Technical/>}>
            <Route path="technical/server" element={<Server/>}/> 
            <Route path="technical/Graphic" element={<GraphicDesign/>}/> 
            <Route path="technical/applictionprograming" element={<ApplicationPrograming/>}/> 
            <Route path="technical/websites" element={<Websites/>}/> 
          </Route>
          <Route path="/aurages/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}
