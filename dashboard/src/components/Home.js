import { useEffect, useState } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const URL = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    axios
      .get(`${URL}/users/loggedinuser`)
      .then((res) => {
        setUser(res.data.data.user);
        setLoading(false);
      })
      .catch(() => {
        window.location.href = "http://localhost:3000";
      });
  }, []);
  if (loading) {
    return <h3>Checking session...</h3>;
  }
  return (
    <>
      <TopBar user={user} />
      <Dashboard user={user} />
    </>
  );
};

export default Home;
