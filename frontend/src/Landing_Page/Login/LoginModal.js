import React, { useState } from "react";
import "./LoginModal.css";
import axios from "axios";
import { toast } from "react-toastify";
import { handleAxiosError } from "../../handleAxiosError";

const LoginModal = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    axios
      .post(
        "http://localhost:8000/api/v1/users/login",
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
          toast.success("Login successful");
          setEmail("");
          setPassword("");
          window.location.href = "http://localhost:3001";
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
