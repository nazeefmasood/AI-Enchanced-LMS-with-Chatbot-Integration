import axios from "axios";

const baseURL = axios.create({
  baseURL: process.env.DB_BASE_URL || "http://localhost:3010/api",
  headers: { "Content-Type": "application/json" },
});

export default baseURL;
