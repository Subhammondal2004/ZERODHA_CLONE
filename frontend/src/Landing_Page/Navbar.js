import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg sticky-top border-bottom p-3"
      style={{ backgroundColor: "#fff" }}
    >
      <div class="container">
        <NavLink class="navbar-brand" to="/">
          <img src="media/images/logo.svg" style={{ width: "25%" }}></img>
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink
                  class="nav-link"
                  aria-current="page"
                  to="/signup"
                  className={({ isActive }) =>
                    isActive ? "nav-link active text-primary" : "nav-link"
                  }
                >
                  Signup
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  class="nav-link"
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-link active text-primary" : "nav-link"
                  }
                >
                  About
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  class="nav-link"
                  to="/product"
                  className={({ isActive }) =>
                    isActive ? "nav-link active text-primary" : "nav-link"
                  }
                >
                  Product
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  class="nav-link"
                  to="/pricing"
                  className={({ isActive }) =>
                    isActive ? "nav-link active text-primary" : "nav-link"
                  }
                >
                  Pricing
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  class="nav-link"
                  to="/support"
                  className={({ isActive }) =>
                    isActive ? "nav-link active text-primary" : "nav-link"
                  }
                >
                  Support
                </NavLink>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
