import axios from "axios";

const TOKEN_KEY = "token";

export const setToken = (token) => {
  if (!token) return;
  localStorage.setItem(TOKEN_KEY, token);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
  try {
    delete axios.defaults.headers.common["Authorization"];
  } catch (e) {}
};

export const attachToken = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export default { setToken, clearToken, attachToken, getToken };
