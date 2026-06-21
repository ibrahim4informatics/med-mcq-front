import { createContext, useContext, useEffect, useState } from "react";
import { accessToken as at } from "@/config/axios";
import useAuthStatus from "@/hooks/queries/useAuthStatus";
import { Box, Spinner, Text } from "@chakra-ui/react";


interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: (value: boolean) => void;
    accessToken: string | null;
    setAccessToken: (token: string | null) => void;
}


const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    setIsAuthenticated: () => { },
    accessToken: null,
    setAccessToken: () => { },
});



export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [accessToken, setAccessToken] = useState<string | null>(null);

    const { isPending  , isError  } = useAuthStatus()


    useEffect(() => {
        console.log(at)
        setAccessToken(at)

        if (at) {
            setIsAuthenticated(true);
        }
    }, [at])


    if(isPending){
        return <Box w={"full"} h={"100dvh"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Spinner size={"xl"} color={{ base:"green.500" , _dark:"green.300" }} />
        </Box>
    }

    if(isError){
        return <Box w={"full"} h={"100dvh"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Text color={"red.500"}>Error occurred while fetching auth status</Text>
        </Box>
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, accessToken, setAccessToken }}>
            {children}
        </AuthContext.Provider>
    );
}


export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
};