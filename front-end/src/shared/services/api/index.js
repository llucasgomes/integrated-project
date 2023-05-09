import axios from "axios";

export const API = axios.create({
  baseURL: "https://api-msql.vercel.app",
});
