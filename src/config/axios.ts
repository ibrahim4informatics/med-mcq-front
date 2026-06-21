import { refreshAccessToken } from "@/api/auth";
import axios from "axios";
// 👇 GLOBAL (module scope) state for interceptor logic
// let isRefreshing = false;
let refreshPromise: Promise<string> | null = null;


export let accessToken: string | null = null;

export const setToken = (token: string | null) => {
    accessToken = token;
};

export const getToken = () => accessToken;


export const logout = () => {
    setToken(null);
};

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json",

    },
    withCredentials: true, // Important for sending cookies (refresh token)
});

// TODO: Add interceptors for handling auth tokens and errors


api.interceptors.request.use((config) => {
    const token = getToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});



api.interceptors.response.use(
    (res) => res,
    async (error) => {
        const original = error.config;

        // ❌ stop refresh endpoint from looping
        if (original.url?.includes("/auth/refresh")) {
            logout();
            return Promise.reject(error);
        }

        if (error.response?.status === 401 && !original._retry) {
            original._retry = true;

            try {
                // ✅ only ONE refresh call ever at a time
                if (!refreshPromise) {
                    refreshPromise = refreshAccessToken().finally(() => {
                        refreshPromise = null;
                    });
                }

                const newToken = await refreshPromise;

                setToken(newToken);

                original.headers.Authorization = `Bearer ${newToken}`;

                return api(original);
            } catch (err) {
                logout();
                return Promise.reject(err);
            }
        }

        return Promise.reject(error);
    }
);

export default api;