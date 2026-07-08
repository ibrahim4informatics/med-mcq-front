import { logoutUser } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";


export default function useLogout() {
    return useMutation({
        mutationFn: logoutUser,
    });
}