import axios from "axios";
import { BASE_URL } from "../constants";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? `${BASE_URL}/api` : "/api",
  withCredentials: true,
});
