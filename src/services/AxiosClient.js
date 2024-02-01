import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL ?? "http://127.0.0.1:8000";

const apiClient = axios.create({
  baseURL,
});

const authApiClient = axios.create({
  baseURL
});

authApiClient.interceptors.request.use((config) => {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1]
  config.headers.Authorization = `Bearer ${decodeURI(token)}`;
  return config;
});

export {
  apiClient,
  authApiClient
};