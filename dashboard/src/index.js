import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import { attachToken, setToken } from "./auth";
import { ToastContainer } from "react-toastify";
import { FundsProvider } from "./components/FundContext";

// If token is present in URL hash (redirect from frontend), store it for this origin
const hash = window.location.hash || "";
if (hash.startsWith("#token=")) {
  const token = decodeURIComponent(hash.replace("#token=", ""));
  if (token) {
    setToken(token);
    // remove token from URL without reloading
    window.history.replaceState(null, document.title, window.location.pathname + window.location.search);
  }
}

attachToken();

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
