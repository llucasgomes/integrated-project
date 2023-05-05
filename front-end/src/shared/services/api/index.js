import axios from "axios";

export const API = axios.create({
  baseUrl: "https://api-msql.vercel.app",
});
