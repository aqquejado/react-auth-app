import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL ?? "http://127.0.0.1:8000";

const apiClient = axios.create({
  baseURL,
});

const authApiClient = axios.create({
  baseURL
});

authApiClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("access="))
      ?.split("=")[1]
  }`;
  return config;
});

export {
  apiClient,
  authApiClient
};