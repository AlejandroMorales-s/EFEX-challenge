import axios from "axios";

const efexClient = axios.create({
  baseURL: import.meta.env.VITE_EFEX_API_URL as string,
  headers: {
    "Content-Type": "application/json",
  },
});

export default efexClient;
