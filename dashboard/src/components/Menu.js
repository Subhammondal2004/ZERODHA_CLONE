import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = ({ user }) => {
  const [selMenu, setSelMenu] = useState(0);
  const [isprofileDropdown, setIsprofileDropdown] = useState(false);
  const [userLogout, setUserLogout] = useState(null);

  const handleMenuClick = (index) => {
    setSelMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsprofileDropdown(!isprofileDropdown);
  };

  const handleLogout = () => {
    axios
      .get(
        "http://localhost:8000/api/v1/users/logout",
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.success) {
          setUserLogout(null);
          window.location.href = "http://localhost:3000";
        }
      })
      .catch((err) => console.log(err.message));
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <button className="avatar" onClick={handleLogout}>
            ZU
          </button>
          <p className="username">{user.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
