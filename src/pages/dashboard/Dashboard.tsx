import { LanguageDropdown } from "@/components/custom/Global/LanguageSwitcher";
import StatsCard from "@/components/custom/Global/StatsCard";
import LoadingScreen from "@/components/screens/LoadingScreen";
import { ColorModeButton } from "@/components/ui/color-mode";
import useRole from "@/hooks/queries/useRole";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { LuBookDashed, LuBoxes, LuBuilding, LuClipboardList, LuCreditCard, LuFileQuestion, LuFlag, LuMailWarning, LuSquareStack, LuSubscript, LuUser } from "react-icons/lu";
import { Navigate } from "react-router-dom";



const dashboardAdminStats = [
    {
        key: "students",
        title: "Students",
        subtitle: "Registered students",
        count: 12458,
        icon: <LuUser />
    },
    {
        key: "subscriptions",
        title: "Active Subscriptions",
        subtitle: "Premium members",
        count: 3817,
        icon: <LuCreditCard />
    },
    {
        key: "questions",
        title: "Questions",
        subtitle: "Published MCQs",
        count: 58432,
        icon: <LuFileQuestion/>
    },
    {
        key: "faculties",
        title: "Faculties",
        subtitle: "Medical faculties",
        icon: <LuBuilding />,
        count: 12,
    },
    {
        key: "modules",
        title: "Modules",
        subtitle: "Available modules",
        count: 97,
        icon: <LuSquareStack />,
    },
   
    {
        key: "exams",
        title: "Generated Exams",
        subtitle: "Completed by students",
        count: 245391,
        icon: <LuClipboardList />,
    },
    {
        key: "reports",
        title: "Pending Reports",
        subtitle: "Require moderation",
        icon: <LuFlag />,
        count: 34,
    },
];


const AdminDahsboardContent = () => {

    const { t } = useTranslation("dashboard");
    const user = {
        first_name: "John",
        last_name: "Doe",
    }
    return (
        <>

            {/* Dashboard Header */}

            <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} mb={6} flexWrap={"wrap"}>
                <Box>
                    <Heading>{t("admin.title")} {user.first_name} {user.last_name}</Heading>
                    <Text>{t("admin.subtitle")}</Text>
                </Box>

                <Box display={"flex"} alignItems={"center"} gap={3}>
                    <LanguageDropdown />

                    <ColorModeButton />
                </Box>
            </Box>


            {/* Stats Cards */}
            <Grid
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                gap={6}
            >
               {dashboardAdminStats.map((stat) => (
                    <StatsCard
                        key={stat.key}
                        title={stat.title}
                        count={stat.count}
                        subtitle={stat.subtitle}
                        icon={stat.icon}
                    />
                ))}
            </Grid>
        </>
    )
}

const UserDashboardContent = () => {
    return (
        <Heading>User Dashboard</Heading>
    )
}


export default function Dashboard() {


    const { data: userRoleResponse, error: errorRole, isPending: loadingRole } = useRole();


    if (errorRole) {
        return <Navigate to={"/login"} />
    }

    if (loadingRole) {

        return <LoadingScreen />
    }


    return (
        <DashboardLayout>

            {
                userRoleResponse.data.role === "ADMIN" ? <AdminDahsboardContent /> : <UserDashboardContent />
            }
        </DashboardLayout>
    )
}