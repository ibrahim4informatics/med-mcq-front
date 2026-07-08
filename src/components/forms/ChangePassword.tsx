import { resetPassword } from "@/api/auth";
import { Button, Field, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
const schema = z.object({
    password: z.string({ error: ({ input }) => !input ? "PASSWORD_REQUIRED" : "INVALID_PASSWORD" }).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, { error: "INVALID_PASSWORD" }),

});
export type FormFields = z.infer<typeof schema>;
const ChangePassword = () => {
    const navigate = useNavigate();
    const { t } = useTranslation("resetPassword");
    const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm({ resolver: zodResolver(schema) });
    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        // Handle form submission
        console.log(data)

        const response = await resetPassword(data.password);

        if (response.status === 200) {
            navigate("/login");
        }
        else {
            console.log(response)
            setError("password", { type: "manual", message: "INVALID_PASSWORD" });
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Field.Root invalid={!!errors.password} mb={4}>
                <Field.Label>{t("passwordStep.newPassword.label")}</Field.Label>
                <Input type="password" placeholder={t("passwordStep.newPassword.placeholder")} {...register("password")} />
                <Field.ErrorText>{t(`errors.${errors.password?.message}`)}</Field.ErrorText>
            </Field.Root>
            <Button type="submit" loading={isSubmitting} colorPalette="green" w="full">{t("passwordStep.submit")}</Button>
        </form>
    )
}
export default ChangePassword