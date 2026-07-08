import { verifyOtp } from '@/api/auth';
import { Button, Field, PinInput } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { use } from 'react'
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from "zod";
const schema = z.object({
    otp: z.array(z.string().length(1, { message: "OTP_REQUIRED" }), {error:"OTP_REQUIRED"}).length(6, { message: "OTP_LENGTH" }).refine((val) => val.every((char) => /^[0-9]$/.test(char)), { message: "OTP_INVALID" }).transform(val => val.join('')),
});

export type FormFields = z.infer<typeof schema>;

const OtpVerificationForm = ({ setCurrentStep }: { setCurrentStep: React.Dispatch<React.SetStateAction<"email" | "otp" | "password">> }) => {

    const { t } = useTranslation("resetPassword");
    const { control, formState: { errors, isSubmitting }, handleSubmit, setError } = useForm({ resolver: zodResolver(schema) });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        console.log(data);
        // call otp verification API here

        const response = await verifyOtp(data.otp);

        if (response.status === 200) {
            console.log("OTP verified successfully");
            setCurrentStep("password");
        }

        else if (response.status === 400) {
            setError("otp", { type: "manual", message: "OTP_INVALID" });
        }

        else {
            setError("otp", { type: "manual", message: "OTP_ATTEMPTS_EXCEEDED" });
        }

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Field.Root invalid={!!errors.otp} mb={4}>
                <Field.Label>{t("otpStep.otp.label")}</Field.Label>
                <Controller
                    control={control}
                    name='otp'
                    render={({ field }) => (
                        <PinInput.Root value={field.value} onValueChange={(e) => field.onChange(e.value)} onBlur={field.onBlur}>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <PinInput.Input index={index} key={index} />
                            ))}
                        </PinInput.Root>
                    )}
                />
                <Field.ErrorText>{t(`errors.${errors.otp?.message}`)}</Field.ErrorText>
            </Field.Root>
            <Button type="submit" loading={isSubmitting} colorPalette="green" w="full">{t("otpStep.submit")}</Button>
            <Button type="submit" asChild colorPalette="blue" mt={2} w="full">
                <a href="/reset-password">{t("otpStep.resend")}</a>
            </Button>
        </form>
    )
}

export default OtpVerificationForm