import axios from "axios";

const exchangeRateClient = axios.create({
  baseURL:
    import.meta.env.VITE_EXCHANGE_RATE_API_URL +
    import.meta.env.VITE_EXCHANGE_RATE_API_KEY +
    "/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default exchangeRateClient;
