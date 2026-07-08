import { getUserRole } from "@/api/auth";
import { useQuery } from "@tanstack/react-query";

export default function useRole() {
    return useQuery({
        queryKey: ["role"],
        queryFn: getUserRole,
        staleTime: 1000 * 60 * 60 * 24

    })
}