import { useAuthContext } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";


export default function AnonymosRoute({ children }: { children: React.ReactNode }) {
    const { isAuthenticated } = useAuthContext();
    if (isAuthenticated) {
        return <Navigate to="/dashboard" />
    }
    return (
        <>
            {children}
        </>
    );
}