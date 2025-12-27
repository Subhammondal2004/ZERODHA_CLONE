import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import { attachToken } from "./auth";
import { ToastContainer } from "react-toastify";
import { FundsProvider } from "./components/FundContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FundsProvider>
      {attachToken()}
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
