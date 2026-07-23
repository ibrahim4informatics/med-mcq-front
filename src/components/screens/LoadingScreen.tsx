import { Box, Spinner } from "@chakra-ui/react";

export default function LoadingScreen() {
    return (
        <Box bg={{ base: "white", _dark: "black" }} display={"flex"} justifyContent={"center"} alignItems={"center"} w={"100%"} h={"100dvh"}
            width={"100%"} height={"100dvh"}>

            <Spinner size={"xl"} color={{ base: "green.400", _dark: "green.600" }} />

        </Box>
    )

}