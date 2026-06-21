import RegisterForm from '@/components/forms/RegisterForm'
import GuestLayout from '@/layouts/GuestLayout'
import { Box, Card, Container, Flex, Heading, Link, Text, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const Register = () => {

    const { t } = useTranslation("register");
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
                                        {t("register.title")}
                                    </Heading>
                                    <Text color="fg.muted">
                                        {t("register.subtitle")}
                                    </Text>
                                </Box>

                                {/* Form */}

                                <RegisterForm />
                                <hr />

                                {/* Register link */}
                                <Text textAlign="center" fontSize="sm">
                                    {t("register.links.haveAccount")}{" "}
                                    <Link color="green.500" href="/login">
                                        {t("register.links.login")}
                                    </Link>
                                </Text>
                            </VStack>
                        </Card.Root>
                    </Container>
                </Flex>
            </Flex>   </GuestLayout>
    )
}

export default Register