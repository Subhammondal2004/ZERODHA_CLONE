import React, { useState } from "react";
import "./LoginModal.css";
import axios from "axios";
import { toast } from "react-toastify";
import { handleAxiosError } from "../../handleAxiosError";

const LoginModal = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const URL = process.env.REACT_APP_SERVER_URL;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${URL}/users/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.success) {
          setEmail("");
          setPassword("");
          toast.success(res.data.message);
          window.location.href = "https://zerodha-clone-dashboard-av6a.onrender.com";
        }
      })
      .catch((error) => handleAxiosError(error));
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>

        <span className="close-btn" onClick={closeModal}>
          ✖
        </span>
      </div>
    </div>
  );
};

export default LoginModal;
