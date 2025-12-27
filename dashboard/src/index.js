import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import { attachToken, setToken } from "./auth";
import { ToastContainer } from "react-toastify";
import { FundsProvider } from "./components/FundContext";

// If token is present in URL query (redirect from frontend), store it for this origin
const params = new URLSearchParams(window.location.search || "");
const tokenFromQuery = params.get("token");
if (tokenFromQuery) {
  setToken(tokenFromQuery);
  // remove token from URL without reloading
  params.delete("token");
  const newSearch = params.toString();
  const newUrl =
    window.location.pathname +
    (newSearch ? `?${newSearch}` : "") +
    window.location.hash;
  window.history.replaceState(null, document.title, newUrl);
}

attachToken();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FundsProvider>
      <Router>
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
      </Router>
    </FundsProvider>
  </React.StrictMode>
);
