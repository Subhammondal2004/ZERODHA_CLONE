import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import { FundsProvider } from "./components/FundContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FundsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          pauseOnHover
          draggable
          theme="colored"
        />
      </BrowserRouter>
    </FundsProvider>
  </React.StrictMode>
);
