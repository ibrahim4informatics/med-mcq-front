import ChangePassword from '@/components/forms/ChangePassword';
import EmailVerificationForm from '@/components/forms/EmailVerificationForm';
import OtpVerificationForm from '@/components/forms/OtpVerificationForm';
import GuestLayout from '@/layouts/GuestLayout'
import { Box, Heading, Text } from '@chakra-ui/react'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ResetPassword = () => {

    const { t } = useTranslation("resetPassword");
    const [currentStep, setCurrentStep] = useState<"email" | "otp" | "password">("email");

    return (
        <GuestLayout>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} minHeight={"100vh"}>


                <Box bg={"bg.subtle"} w={"100%"} maxW={350} p={8} rounded={"xl"}>

                    <Heading textAlign={"center"} size={"lg"} mb={4}>
                        {t("title")}
                    </Heading>

                    <Text textAlign={"center"} mb={8} color={"fg.muted"}>
                        {t("subtitle")}
                    </Text>


                    {currentStep === "email" &&  <EmailVerificationForm setCurrentStep={setCurrentStep}/> }
                    {currentStep === "otp" &&  <OtpVerificationForm setCurrentStep={setCurrentStep}/> }
                    {currentStep === "password" &&  <ChangePassword/> }
                </Box>
            </Box>
        </GuestLayout>
    )
}

export default ResetPassword