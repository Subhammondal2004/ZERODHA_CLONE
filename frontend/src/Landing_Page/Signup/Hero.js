import React, { useState } from "react";
import axios from "axios";
import LoginModal from "../Login/LoginModal";
import { handleAxiosError } from "../../handleAxiosError";
import { toast } from "react-toastify";

function Hero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const URL = process.env.REACT_APP_SERVER_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/v1/users/signup", {
        name,
        email,
        password,
      })
      .then((res) => {
        if (res.data.success) {
          setName("");
          setEmail("");
          setPassword("");
          toast.success("Signup successful!");
          window.location.href = "http://localhost:3001";
        }
      })
      .catch((error) => handleAxiosError(error));
  };
  return (
    <div className="container">
      <div className="row text-center p-5 m-5">
        <h1 className="mb-3" style={{ fontSize: "28px" }}>
          Open a free demat and trading account online
        </h1>
        <p style={{ fontSize: "22px" }}>
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>
      <div className="row">
        <div className="col-6">
          <img src="media/images/account_open.svg"></img>
        </div>
        <div className="col-6" style={{ padding: "50px" }}>
          <h1 className="fs-3">Signup Now</h1>
          <p>Or track your existing application</p>
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="Name" class="form-label">
                Name
              </label>
              <input
                type="name"
                class="form-control"
                id="Name"
                value={name}
                aria-describedby="emailHelp"
                style={{ width: "70%" }}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="Email" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="Email"
                aria-describedby="emailHelp"
                style={{ width: "70%" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="Password" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="Password"
                style={{ width: "70%" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginRight: "270px" }}
              >
                Signup
              </button>
            </div>
          </form>
          <div>
            <button
              onClick={() => setShowLogin(true)}
              className="btn btn-primary"
            >
              Login
            </button>

            {showLogin && <LoginModal closeModal={() => setShowLogin(false)} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
