import { Box, Button, Heading, Image } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { Link, NavLink } from "react-router-dom"
import { LanguageDropdown } from "./LanguageSwitcher";
import { ColorModeButton } from "@/components/ui/color-mode";
import logo from "@/assets/logo.png";

export default () => {


    const { t } = useTranslation();


    const links = [
        {
            label: "home",
            href: "/"
        },
        {
            label: "about",
            href: "#about"
        },
        {
            label: "pricing",
            href: "#pricing"
        },

    ]


    return (
        <Box pos={"sticky"} top={0} left={0} zIndex={500} bg={{base:"white", _dark:"black"}} w={"100%"} py={4} px={2} display={"flex"} borderBottom={{
            base:"1px solid rgba(0,0,0,.08)",
            _dark:"1px solid rgba(252,252,252,.15)"
            
        }}>
            {/* Logo */}

            <Box display={"flex"} alignItems={"center"} gap={2}>

                <Image src={logo} alt="Logo" w={"40px"} h={"40px"} rounded={"full"} />
                <Heading as={"h1"} fontSize={"2xl"} fontWeight={"bold"} color={{ base: "green.600", _dark: "green.400" }} >Med-QCM</Heading>
            </Box>


            {/* Links */}

            <Box
                flex={1}
                display={{ base: "none", lg: "flex" }} gap={6} alignItems={"center"} justifyContent={"center"} mx={"auto"}

            >

                {links.map((link) => ( <Button key={link.label} asChild variant={"ghost"} colorPalette={"green"} size={"sm"}>
                    <a href={link.href} >
                        {t(link.label)}
                    </a>
                </Button>))}

            </Box>

            <Box display={"flex"} alignItems={"center"} gap={2} ms={"auto"}>

                <Button asChild variant={"outline"} size={"sm"} colorPalette={"green"}>
                    <Link to={"/login"} >
                        {t("login")}
                    </Link>
                </Button>


                <Button asChild variant={"solid"} size={"sm"} colorPalette={"green"}>
                    <Link to={"/register"} >
                        {t("register")}
                    </Link>
                </Button>
                <LanguageDropdown />
                <ColorModeButton />
            </Box>
        </Box>
    )
}