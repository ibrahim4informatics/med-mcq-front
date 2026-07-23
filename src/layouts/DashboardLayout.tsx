import { Box, Button, Icon, Image, Spinner, Text } from "@chakra-ui/react";
import logo from "@/assets/logo.png";
import { LuBuilding, LuFileQuestion, LuLayoutDashboard, LuMenu, LuPaperclip, LuSettings, LuSquareStack, LuUser, LuUsers, LuX } from "react-icons/lu";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import useRole from "@/hooks/queries/useRole";
import {  Link, Navigate, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import useLogout from "@/hooks/mutations/useLogout";
import { useAuthContext } from "@/contexts/AuthContext";
import { useTranslation } from "react-i18next";

const AnimatedBox = motion(Box);


const Sidebar = () => {
    const adminLinks = [
        { label: "dashboard", href: "/dashboard", icon: <LuLayoutDashboard /> },
        { label: "users", href: "/users", icon: <LuUsers /> },
        { label: "faculties", href: "/faculties", icon: <LuBuilding /> },
        { label: "modules", href: "/modules", icon: <LuSquareStack /> },
        { label: "questions", href: "/questions", icon: <LuFileQuestion /> },
        { label: "reports", href: "/reports", icon: <LuPaperclip /> },
        { label: "profile", href: "/profile", icon: <LuUser /> },
        { label: "settings", href: "/settings", icon: <LuSettings /> },
    ]
    const queryCLient = useQueryClient();
    const { data: userRoleResponse, error: errorRole, isPending: loadingRole } = useRole();
    const { mutateAsync: logoutUser, isPending: loggingOut } = useLogout();
    const { setAccessToken, setIsAuthenticated } = useAuthContext();
    const naviagte = useNavigate();
    const [showMenu, setShowMenu] = useState(false);

    const {t} = useTranslation("sidebar");
    const handleSignOut = async () => {
        if (loggingOut) return;
        try {
            await logoutUser();
            queryCLient.clear();
            setAccessToken(null);
            setIsAuthenticated(false);
            naviagte("/login");
        }
        catch {
            return;
        }
    }
    if (errorRole) {
        return <Navigate to={"/login"} />
    }
    if (loadingRole) {
        return <Box w={"full"} h={"100dvh"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Spinner size={"xl"} color={"green.500"} />
        </Box>
    }
    return (
        <Box w={{ base: "full", lg: 320 }} h={{ base: "auto", lg: "100%", }} bg={{ base: "white", _dark: "black" }} borderRight={{
            base: "none",
            lg: "1px solid rgba(0,0,0,.08)",
            _dark: "1px solid rgba(252,252,252,.15)"
        }} p={4}

        >
            {/* Desktop */}
            <Box w={"full"} h={"full"} display={{ base: "none", lg: "block" }}>
                {/* Logo */}
                <Box display={"flex"} alignItems={"center"} justifyContent={"center"} w={"full"} mb={6}>
                    <Image src={logo} alt="Logo" w={85} h={85} rounded={"full"} />
                </Box>
                {/* Links */}
                <Box mt={16} h={"full"} display={"flex"} flexDirection={"column"} gap={4}>
                    {
                        userRoleResponse.data?.role === "ADMIN" && adminLinks.map((link) => (
                            <Button key={link.label} asChild variant={"ghost"} colorPalette={"green"} w={"full"}>
                                <Box display={"flex"} alignItems={"center"} gap={2} asChild>
                                    <Link to={link.href}>
                                        {link.icon}
                                        <Text>{t(`admin.${link.label}`)}</Text>
                                    </Link>
                                </Box>
                            </Button>
                        ))
                    }

                </Box>
            </Box>



            {/* Mobile */}

            <Box display={{ base: "flex", lg: "none" }} alignItems={"center"} justifyContent={"space-between"} w={"full"}>

                <Image src={logo} alt="Logo" w={65} h={65} rounded={"full"} />

                <Button variant={"ghost"} colorPalette={!showMenu ? "green" : "red"} size={"lg"} onClick={() => setShowMenu(!showMenu)}>

                    <Icon as={!showMenu ? LuMenu : LuX} w={6} h={6} />
                </Button>

            </Box>
            {/* Mobile Menu */}

            <AnimatePresence>
                {showMenu && (
                    <AnimatedBox  initial={{ x: "-100%" }} animate={{ x: 0 }} transition={{
                        type: "keyframes"
                    }} exit={{ x: "-100%" }} display={{ base: "flex", lg: "none" }} bg={{ base: "white", _dark: "black" }} p={4} borderRight={{
                        base: "none",
                        lg: "1px solid rgba(0,0,0,.08)",
                        _dark: "1px solid rgba(252,252,252,.15)"
                    }}

                        pos={"absolute"}
                        top={0} left={0} zIndex={20} w={"50%"} maxW={350} minW={300} h={"100dvh"} flexDirection={"column"} gap={4}
                    >
                        {/* Menu items go here */}

                        <Box h={"full"} display={"flex"} flexDirection={"column"} gap={4} justifyContent={"center"} alignItems={"center"}>
                            {
                                userRoleResponse.data?.role === "ADMIN" && adminLinks.map((link) => (
                                    <Button key={link.label} asChild variant={"ghost"} colorPalette={"green"} w={"full"}>
                                        <Box display={"flex"} alignItems={"center"} gap={2} asChild>
                                            <Link to={link.href}>
                                                {link.icon}
                                                <Text>{link.label}</Text>
                                            </Link>
                                        </Box>
                                    </Button>
                                ))
                            }
                        </Box>
                    </AnimatedBox>
                )}
            </AnimatePresence>

        </Box>
    )
}


export default function DashboardLayout({ children }: { children: React.ReactNode }) {


    return (

        <Box w={"full"} h={"100dvh"} overflowY={"hidden"}  display={"flex"} flexDirection={{ base: "column", lg: "row" }}>
            <Sidebar />
            <Box flex={1} bg={{ base: "white", _dark: "bg.subtle" }} overflowY={"auto"} h={"100%"} p={6}>
                {children}
            </Box>
        </Box>
    )
}

// ADMIN LINKS
/**
 * -Users
 * -Faculties
 * -Modules
 * -Questions
 * -Exams
 * -Subscriptions
 * -Profile
 * -Sign-Out
 * - Dark Mode
 * - language
 */

// STUDENT LINKS
/**
 * -Exams
 * -Overview (Tracking)
 * -Practice
 * -Subscriptions
 * -Profile
 * -Sign-Out
 * - Dark Mode
 * - language
 */