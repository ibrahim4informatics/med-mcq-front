import { registerUser } from '@/api/auth';
import { Box, Button, HStack, Icon, Input, Text, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { LuMail, LuLock, LuUser, LuPhone } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';



const schema = z.object({
    first_name: z.string({ error: "REQUIRED_FIRST_NAME" }).min(1, { error: "REQUIRED_FIRST_NAME" }),
    last_name: z.string({ error: "REQUIRED_LAST_NAME" }).min(1, { error: "REQUIRED_LAST_NAME" }),
    email: z.email({ error: ({ input }) => !input ? "REQUIRED_EMAIL" : "INVALID_EMAIL" }),
    password: z.string({ error: "REQUIRED_PASSWORD" }).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, { error: "INVALID_PASSWORD" }),
    phone_number: z.string({ error: "REQUIRED_PHONE_NUMBER" }).regex(/^(07|06|05)\d{8}$/, { error: "INVALID_PHONE_NUMBER" }),
});

export type FormData = z.infer<typeof schema>;

const RegisterForm = () => {

    const { t } = useTranslation("register");
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const response = await registerUser(data);
        if (response.status === 201) {
            navigate("/login");
        }
        else if (response.status === 400) {
            console.log("error")
            const message = response.data.message;

            if (message === "Email is taken") {
                setError("email", {
                    type: "manual",
                    message: "EMAIL_ALREADY_EXISTS",
                });
            }
            else if (message === "Phone number is taken") {
                setError("phone_number", {
                    type: "manual",
                    message: "PHONE_NUMBER_ALREADY_EXISTS",
                });
            }

        }

        else {
            console.log("Server error")
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <VStack gap={4}>



                {/* Last Name */}
                <Box w="full">
                    <HStack mb={2}>
                        <Icon as={LuUser} size="sm" />
                        <Text fontSize="sm">
                            {t("register.form.last_name.label")}
                        </Text>
                    </HStack>

                    <Input
                        placeholder={t(
                            "register.form.last_name.placeholder"
                        )}
                        {...register("last_name")}
                    />

                    {errors.last_name && (
                        <Text color="red.400" fontSize="sm">
                            {t(`register.errors.${errors.last_name.message}`)}
                        </Text>
                    )}
                </Box>

                {/* First Name */}
                <Box w="full">
                    <HStack mb={2}>
                        <Icon as={LuUser} size="sm" />
                        <Text fontSize="sm">
                            {t("register.form.first_name.label")}
                        </Text>
                    </HStack>

                    <Input
                        placeholder={t(
                            "register.form.first_name.placeholder"
                        )}
                        {...register("first_name")}
                    />

                    {errors.first_name && (
                        <Text color="red.400" fontSize="sm">
                            {t(`register.errors.${errors.first_name.message}`)}
                        </Text>
                    )}
                </Box>

                {/* Phone Number */}

                {/* First Name */}
                <Box w="full">
                    <HStack mb={2}>
                        <Icon as={LuPhone} size="sm" />
                        <Text fontSize="sm">
                            {t("register.form.phone_number.label")}
                        </Text>
                    </HStack>

                    <Input
                        placeholder={t(
                            "register.form.phone_number.placeholder"
                        )}
                        {...register("phone_number")}
                    />

                    {errors.phone_number && (
                        <Text color="red.400" fontSize="sm">
                            {t(`register.errors.${errors.phone_number.message}`)}
                        </Text>
                    )}
                </Box>


                {/* Email */}
                <Box w="full">
                    <HStack mb={2}>
                        <Icon as={LuMail} size="sm" />
                        <Text fontSize="sm">
                            {t("register.form.email.label")}
                        </Text>
                    </HStack>

                    <Input
                        placeholder={t(
                            "register.form.email.placeholder"
                        )}
                        {...register("email")}
                    />

                    {errors.email && (
                        <Text color="red.400" fontSize="sm">
                            {t(`register.errors.${errors.email.message}`)}
                        </Text>
                    )}
                </Box>

                {/* Password */}
                <Box w="full">
                    <HStack mb={2}>
                        <Icon as={LuLock} size="sm" />
                        <Text fontSize="sm">
                            {t("register.form.password.label")}
                        </Text>
                    </HStack>

                    <Input
                        type="password"
                        placeholder={t(
                            "register.form.password.placeholder"
                        )}
                        {...register("password")}
                    />

                    {errors.password && (
                        <Text color="red.400" fontSize="sm">
                            {t(`register.errors.${errors.password.message}`)}
                        </Text>
                    )}
                </Box>

                {/* Submit */}
                <Button
                    type="submit"
                    w="full"
                    colorPalette="green"
                    loading={isSubmitting}
                >
                    {t("register.actions.register")}
                </Button>
            </VStack>
        </form>
    )
}

export default RegisterForm