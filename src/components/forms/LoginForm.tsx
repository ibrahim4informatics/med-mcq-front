import { loginUser } from '@/api/auth';
import { setToken } from '@/config/axios';
import { useAuthContext } from '@/contexts/AuthContext';
import { Box, Button, Flex, HStack, Icon, Input, Text, VStack, Link } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { LuMail, LuLock } from "react-icons/lu";
import { useNavigate } from 'react-router';
import { z } from 'zod';



const schema = z.object({
    email: z.email({ error: ({ input }) => !input ? "EMAIL_REQUIRED" : "INVALID_EMAIL" }),
    password: z.string({ error: "PASSWORD_REQUIRED" }).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, { error: "INVALID_PASSWORD" }),
});

export type FormData = z.infer<typeof schema>;

const LoginForm = () => {

    const { setAccessToken, setIsAuthenticated } = useAuthContext();
    const navigate = useNavigate();

    const { t } = useTranslation("login");
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        console.log(data);
        // call login API here

        const response = await loginUser(data);
        console.log(response.data)

        if (response.status === 200) {
            setAccessToken(response.data.access_token);
            setIsAuthenticated(true);
            setToken(response.data.access_token);
            navigate("/dashboard");
        }

        else if (response.status === 400) {

            const message = response.data.message;

            if (message === "Too many sessions. Please logout first.") {
                setError("email", {
                    type: "manual",
                    message: "SESSION_LIMIT",
                });
            }

            else {

                setError("email", {
                    type: "manual",
                    message: "INVALID_CREDENTIALS",
                });
                setError("password", {
                    type: "manual",
                    message: "INVALID_CREDENTIALS",
                });
            }
        }

        else {
            console.log("Login failed");
            setError("email", {
                type: "manual",
                message: "SERVER_ERROR",
            });
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <VStack gap={4}>
                {/* Email */}
                <Box w="full">
                    <HStack mb={2}>
                        <Icon as={LuMail} size="sm" />
                        <Text fontSize="sm">
                            {t("login.form.email.label")}
                        </Text>
                    </HStack>

                    <Input
                        placeholder={t(
                            "login.form.email.placeholder"
                        )}
                        {...register("email")}
                    />

                    {errors.email && (
                        <Text color="red.400" fontSize="sm">
                            {t(`login.errors.${errors.email.message}`)}
                        </Text>
                    )}
                </Box>

                {/* Password */}
                <Box w="full">
                    <HStack mb={2}>
                        <Icon as={LuLock} size="sm" />
                        <Text fontSize="sm">
                            {t("login.form.password.label")}
                        </Text>
                    </HStack>

                    <Input
                        type="password"
                        placeholder={t(
                            "login.form.password.placeholder"
                        )}
                        {...register("password")}
                    />

                    {errors.password && (
                        <Text color="red.400" fontSize="sm">
                            {t(`login.errors.${errors.password.message}`)}
                        </Text>
                    )}
                </Box>

                {/* Forgot password */}
                <Flex justify="flex-end" w="full">
                    <Link fontSize="sm" color="green.500" href='/reset-password'>
                        {t("login.links.forgotPassword")}
                    </Link>
                </Flex>

                {/* Submit */}
                <Button
                    type="submit"
                    w="full"
                    colorPalette="green"
                    loading={isSubmitting}
                >
                    {t("login.actions.login")}
                </Button>
            </VStack>
        </form>
    )
}

export default LoginForm