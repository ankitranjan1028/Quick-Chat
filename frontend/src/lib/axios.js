import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://quick-chat-backend-w19i.onrender.com/api" : "/api",
  withCredentials: true,
});
