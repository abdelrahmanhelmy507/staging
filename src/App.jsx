// App.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Aurmenu from "./components/Store/Aurmenu";
import Aurest from "./components/Store/Aurest";
import Aurpos from "./components/Store/Aurpos";
import Aurac from "./components/Store/Aurac";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Store from "./components/Store/Store";

export default function App() {
  return (
    <div>
      <BrowserRouter>
       <Header />
        <Routes>
          <Route path="/aurages" element={<Home/>} />
          <Route path="/aurages/store" element={<Store/>}>
            <Route path="aurmenu" element={<Aurmenu/>}/> 
            <Route path="aurest" element={<Aurest/>}/> 
            <Route path="aurpos" element={<Aurpos/>}/> 
            <Route path="aurac" element={<Aurac/>}/> npm run dev
          </Route>ىحة
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}
