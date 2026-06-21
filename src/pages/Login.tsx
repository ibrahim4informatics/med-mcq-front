import {
    Box,

    Card,
    Container,
    Flex,
    Heading,
    Text,
    VStack,
    Link,
} from "@chakra-ui/react";

import { useTranslation } from "react-i18next";
import GuestLayout from "@/layouts/GuestLayout";
import LoginForm from "@/components/forms/LoginForm";


export default function LoginPage() {
    const { t } = useTranslation("login");





    return (
        <GuestLayout>
            <Flex minH="100vh" bg="bg.subtle">
         

                {/* RIGHT SIDE (form) */}
                <Flex flex="1" align="center" justify="center" p={6}>
                    <Container maxW="md">
                        <Card.Root
                            p={8}
                            borderRadius="2xl"
                            shadow="lg"
                            w="full"
                        >
                            <VStack gap={6} align="stretch">
                                {/* Title */}
                                <Box textAlign="center">
                                    <Heading size="xl">
                                        {t("login.title")}
                                    </Heading>
                                    <Text color="fg.muted">
                                        {t("login.subtitle")}
                                    </Text>
                                </Box>

                                {/* Form */}

                                <LoginForm />
                                <hr />

                                {/* Register link */}
                                <Text textAlign="center" fontSize="sm">
                                    {t("login.links.noAccount")}{" "}
                                    <Link color="green.500" href="/register">
                                        {t("login.links.signup")}
                                    </Link>
                                </Text>

                                {/* Security note */}
                                <Text
                                    fontSize="xs"
                                    textAlign="center"
                                    color="fg.muted"
                                >
                                    {t("login.security.note")}
                                </Text>
                            </VStack>
                        </Card.Root>
                    </Container>
                </Flex>
            </Flex>
        </GuestLayout>
    );
}