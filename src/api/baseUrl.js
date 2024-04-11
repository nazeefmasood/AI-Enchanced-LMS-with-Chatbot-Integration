import axios from "axios";

const baseURL = axios.create({
  baseURL: process.env.DB_BASE_URL || "http://localhost:3001/api"
});

export default baseURL;
