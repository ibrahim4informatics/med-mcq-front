import { checkAuthStatus } from "@/api/auth";
import { useQuery } from "@tanstack/react-query";

export default function useAuthStatus() {
    return useQuery({
        queryKey: ["authStatus"],
        queryFn: checkAuthStatus,
        staleTime: 0
    });
}