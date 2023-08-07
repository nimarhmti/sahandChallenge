import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    // Cookie: `Cookie1=${key}`,
    "Content-Type": "application/json",
  },
});

export { api };
