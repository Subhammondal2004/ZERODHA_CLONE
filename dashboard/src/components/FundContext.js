import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { handleAxiosError } from "../handleAxiosError";
export const FundsContext = createContext();

export const FundsProvider = ({ children }) => {
  const [fund, setFund] = useState(null);
  const [loading, setLoading] = useState(true);
  const URL = process.env.REACT_APP_SERVER_URL;

  const fetchFunds = async () => {
    axios
      .get(`${URL}/funds/`)
      .then((res) => {
        setFund(res.data.data);
      })
      .catch((err) => {
        handleAxiosError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchFunds();
  }, [fund]);

  return (
    <FundsContext.Provider value={{ fund, fetchFunds, loading }}>
      {children}
    </FundsContext.Provider>
  );
};
