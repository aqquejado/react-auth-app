import { apiClient, authApiClient } from "./AxiosClient";

export const registerUser = async (data) => apiClient.post("/api/register", data);

export const login = async (data) => apiClient.post("/api/login", data, {
    withCredentials: true,
});

export const logout = async () => authApiClient.post("/api/logout", {
    withCredentials: true,
});

export const forgotPassword = async (email) => apiClient.post("/api/forgot-password", { email });

export const resetPassword = async (data) => apiClient.post("/api/reset-password", data);

export const getUser = async () => authApiClient.get("/api/user");