import axios from "@/config/axios";
import { type FormData as RegisterFormData } from "@/components/forms/RegisterForm";
import { type FormData as LoginFormData } from "@/components/forms/LoginForm";
export const registerUser = async (data: RegisterFormData) => {

    try {
        const response = await axios.post("/auth/register", data);
        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        return error.response;
    }
}


export const loginUser = async (data: LoginFormData) => {

    try {
        const response = await axios.post("/auth/login", data);
        return response;
    }
    catch (error) {
        console.error("Error logging in user:", error);
        return error.response;
    }
}


export const refreshAccessToken = async () => {
    const response = await axios.post("/auth/refresh-token");
    return response.data.access_token;
}


export const checkAuthStatus = async () => {
    try {
        const response = await axios.get("/auth/status");
        return response.status;
    } catch (error) {
        console.error("Error checking auth status:", error);
        return error.response?.status || 500;
    }
}


export const sendOtpEmail = async (email: string) => {

    try {
        const response = await axios.post("/auth/reset-password", { email });
        return response;
    }
    catch (err) {
        return err.response;

    }
}


export const verifyOtp = async (otp: string) => {
    try {
        const response = await axios.post("/auth/reset-password/verify", { otp });
        return response;
    }
    catch (err) {
        return err.response;
    }
}


export const resetPassword = async (password: string) => {
    try {
        const response = await axios.patch("/auth/reset-password", { new_password: password });
        return response;
    }
    catch (err) {
        return err.response;
    }
}

export const getUserRole = async () => {
    try {
        const response = await axios.get("/auth/role");
        return response;
    }

    catch (err) {
        return err.response;
    }
}


export const logoutUser = async () => {
    try {
        const response = await axios.delete("/auth/logout");
        return response;
    }
    catch (err) {
        return err.response;
    }
}