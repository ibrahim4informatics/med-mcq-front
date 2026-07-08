import { sendOtpEmail } from "@/api/auth";
import { Box, Button, HStack, Icon, Input, Text } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import type React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { LuMail } from "react-icons/lu";
import { z } from "zod";

const schema = z.object({
    email: z.email({ error: ({ input }) => !input ? "EMAIL_REQUIRED" : "INVALID_EMAIL" }),
});


type FormFields = z.infer<typeof schema>;
const EmailVerificationForm = ({ setCurrentStep }: { setCurrentStep: React.Dispatch<React.SetStateAction<"email" | "otp" | "password">> }) => {
    const { t } = useTranslation("resetPassword");
    const { register, formState: { errors, isSubmitting }, handleSubmit, setError } = useForm({ resolver: zodResolver(schema) });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        console.log(data);
        // call email verification API here

        const response = await sendOtpEmail(data.email);

        if (response.status === 200) {
            console.log("OTP sent successfully");
            setCurrentStep("otp");

        }

        else if (response.status === 400) {
            setError("email", { type: "manual", message: "EMAIL_NOT_FOUND" });
        }
    }
    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <Box w="full">
                <HStack mb={2}>
                    <Icon as={LuMail} size="sm" />
                    <Text fontSize="sm">
                        {t("emailStep.email.label")}
                    </Text>
                </HStack>

                <Input
                    placeholder={t(
                        "emailStep.email.placeholder"
                    )}
                    {...register("email")}
                />

                {errors.email && (
                    <Text color="red.400" fontSize="sm">
                        {t(`errors.${errors.email.message}`)}
                    </Text>
                )}
            </Box>

            <Button type="submit" loading={isSubmitting} colorPalette={"green"} mt={2} w={"full"}>
                {t("emailStep.submit")}
            </Button>
        </form>

    )
}

export default EmailVerificationForm