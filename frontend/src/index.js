import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { attachToken } from "./auth";

import Homepage from "./Landing_Page/Home/HomePage";
import Signup from "./Landing_Page/Signup/Signup";
import About from "./Landing_Page/About/AboutPage";
import Product from "./Landing_Page/Products/ProductPage";
import Pricing from "./Landing_Page/Pricing/PricingPage";
import Support from "./Landing_Page/Support/SupportPage";
import Navbar from "./Landing_Page/Navbar";
import Footer from "./Landing_Page/Footer";
import NotFound from "./Landing_Page/NotFound";

attachToken();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      pauseOnHover
      draggable
      theme="colored"
    />
  </BrowserRouter>
);
