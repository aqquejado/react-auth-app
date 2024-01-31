import { apiClient } from "./AxiosClient";

export const registerUser = async (data) => apiClient.post("/api/register", data);

export const login = async (data) => apiClient.post("/api/login", data);