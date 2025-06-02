import axios from "axios";

const API = axios.create({
  baseURL: "https://quipedia-web-backendserver.onrender.com/api", // change to your backend URL
});

// Add JWT token automatically in headers if present
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
