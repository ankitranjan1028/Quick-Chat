import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://quick-chat-backend-aoqy.onrender.com/api" : "/api",
  withCredentials: true,
});
