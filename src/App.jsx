// App.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/services";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Solution from "./components/solution";
import "./App.css";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <CTA />
      <Solution />
      <Features />
      <Footer />
    </div>
  );
}
