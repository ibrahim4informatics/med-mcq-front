import Navbar from "@/components/custom/Global/Navbar";
import { Badge, Box, Button, Card, Container, Flex, Heading, Icon, Image, List, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero.jpg";
import { Link } from "react-router-dom";
import { FiTarget } from "react-icons/fi"
import { BsClipboard2Check } from "react-icons/bs"
import { GiProgression } from "react-icons/gi"
import { LuBadge, LuBookOpenText, LuChartColumn, LuCheck, LuClock, LuDatabase, LuLaptop } from "react-icons/lu";
import GuestLayout from "@/layouts/GuestLayout";
import { useAuthContext } from "@/contexts/AuthContext";




export function PremiumPricingCard() {
    const { t } = useTranslation("landing");

    const features = [
        t("pricing.premium.features.f1"),
        t("pricing.premium.features.f2"),
        t("pricing.premium.features.f3"),
        t("pricing.premium.features.f4"),
        t("pricing.premium.features.f5"),
        t("pricing.premium.features.f6"),
    ];

    return (
        <Card.Root
            maxW="420px"
            w="full"
            borderWidth="2px"
            borderColor="green.500"
            borderRadius="2xl"
            shadow="md"
            transition="all .2s"
            position="relative"
            _hover={{
                shadow: "xl",
                transform: "translateY(-6px)",
            }}
        >
            <Card.Body p={8}>
                <Flex
                    direction="column"
                    align="center"
                    gap={4}
                >
                    <Badge
                        colorPalette="green"
                        size="lg"
                    >
                        {t("pricing.premium.badge")}
                    </Badge>

                    <Heading size="xl">
                        {t("pricing.premium.name")}
                    </Heading>

                    <Flex
                        align="baseline"
                        gap={1}
                    >
                        <Text
                            fontSize="5xl"
                            fontWeight="bold"
                            color="green.500"
                        >
                            {t("pricing.premium.price")}
                        </Text>

                        <Text color="fg.muted">
                            {t("pricing.premium.period")}
                        </Text>
                    </Flex>

                    <Text
                        textAlign="center"
                        color="fg.muted"
                    >
                        {t("pricing.premium.description")}
                    </Text>

                    <List.Root
                        alignSelf="stretch"
                        gap={3}
                        mt={4}
                    >
                        {features.map((feature) => (
                            <List.Item
                                key={feature}
                                listStyleType="none"
                            >
                                <Flex gap={3}>
                                    <Icon
                                        as={LuCheck}
                                        color="green.500"
                                        mt="1"
                                    />
                                    <Text>{feature}</Text>
                                </Flex>
                            </List.Item>
                        ))}
                    </List.Root>

                    <Button
                        mt={6}
                        size="lg"
                        w="full"
                        colorPalette="green"
                    >
                        {t("pricing.premium.cta")}
                    </Button>
                </Flex>
            </Card.Body>
        </Card.Root>
    );
}


export function TrialPricingCard() {
    const { t } = useTranslation("landing");

    const features = [
        t("pricing.trial.features.f1"),
        t("pricing.trial.features.f2"),
        t("pricing.trial.features.f3"),
        t("pricing.trial.features.f4"),
    ];

    return (
        <Card.Root
            maxW="400px"
            w="full"
            borderWidth="1px"
            borderRadius="2xl"
            shadow="sm"
            transition="all .2s"
            _hover={{
                shadow: "lg",
                transform: "translateY(-4px)",
            }}
        >
            <Card.Body p={8}>
                <Flex
                    direction="column"
                    align="center"
                    gap={4}
                >
                    <Badge
                        colorPalette="blue"
                        size="lg"
                    >
                        Free Trial
                    </Badge>

                    <Heading size="xl">
                        {t("pricing.trial.name")}
                    </Heading>

                    <Text
                        fontSize="4xl"
                        fontWeight="bold"
                        color="green.500"
                    >
                        {t("pricing.trial.duration")}
                    </Text>

                    <Text
                        textAlign="center"
                        color="fg.muted"
                    >
                        {t("pricing.trial.description")}
                    </Text>

                    <List.Root
                        alignSelf="stretch"
                        gap={3}
                        mt={4}
                    >
                        {features.map((feature) => (
                            <List.Item
                                key={feature}
                                listStyleType="none"
                            >
                                <Flex gap={3}>
                                    <Icon
                                        as={LuCheck}
                                        color="green.500"
                                        mt="1"
                                    />
                                    <Text>{feature}</Text>
                                </Flex>
                            </List.Item>
                        ))}
                    </List.Root>

                    <Button
                        mt={6}
                        size="lg"
                        w="full"
                        colorPalette="green"
                    >
                        {t("pricing.trial.cta")}
                    </Button>
                </Flex>
            </Card.Body>
        </Card.Root>
    );
}

export const Pricing = () => {

    const { t } = useTranslation("landing");
    return (
        <Box id="pricing" w={"100%"} px={12} py={20}>

            <Heading as={"h3"} textAlign={"center"} mb={10} fontSize={{ base: "2xl", md: "4xl" }} fontWeight={"bold"} color={{ base: "green.600", _dark: "green.400" }} >
                {t("pricing.title")}
            </Heading>

            <Text textAlign={"center"} maxW={"5xl"} mx={"auto"} fontSize={{ base: "md", md: "lg" }} color={{ base: "gray.600", _dark: "gray.400" }} >
                {t("pricing.subtitle")}
            </Text>

            {/* Pricing plans */}

            <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} gap={12} mt={12}>

                <TrialPricingCard />
                <PremiumPricingCard />
            </Box>

        </Box>
    )
}

export const About = () => {

    const { t } = useTranslation("landing");
    return (
        <Box id="about" w={"100%"} px={12} py={20} >

            <Heading as={"h3"} textAlign={"center"} mb={10} fontSize={{ base: "2xl", md: "4xl" }} fontWeight={"bold"} color={{ base: "green.600", _dark: "green.400" }} >
                {t("about.title")}
            </Heading>

            <Text textAlign={"center"} maxW={"5xl"} mx={"auto"} fontSize={{ base: "md", md: "lg" }} color={{ base: "gray.600", _dark: "gray.400" }} >
                {t("about.description")}
            </Text>


            <Box display={"grid"} gap={12} gridTemplateColumns={{ base: "1fr", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }} mt={12}>

                <Card.Root>

                    <Card.Header >
                        <Box display={"flex"} alignContent={"center"} gap={3}>
                            <LuBadge size={24} color="#0BDC85" />
                            <Card.Title>{t("about.values.quality.title")}</Card.Title>

                        </Box>

                    </Card.Header>

                    <Card.Body>
                        <Card.Description>
                            {t("about.values.quality.description")}
                        </Card.Description>
                    </Card.Body>

                </Card.Root>



                <Card.Root>

                    <Card.Header >
                        <Box display={"flex"} alignContent={"center"} gap={3}>
                            <LuLaptop size={24} color="#0BDC85" />
                            <Card.Title>{t("about.values.accessibility.title")}</Card.Title>

                        </Box>

                    </Card.Header>

                    <Card.Body>
                        <Card.Description>
                            {t("about.values.accessibility.description")}
                        </Card.Description>
                    </Card.Body>

                </Card.Root>



                <Card.Root>

                    <Card.Header >
                        <Box display={"flex"} alignContent={"center"} gap={3}>
                            <LuChartColumn size={24} color="#0BDC85" />
                            <Card.Title>{t("about.values.performance.title")}</Card.Title>

                        </Box>

                    </Card.Header>

                    <Card.Body>
                        <Card.Description>
                            {t("about.values.performance.description")}
                        </Card.Description>
                    </Card.Body>

                </Card.Root>

            </Box>


            <Box display={"flex"} alignItems={"center"} gap={2}>

                <Heading flex={1} as={"h3"} textAlign={"left"} mt={20} mb={10} fontSize={{ base: "xl", md: "2xl" }} fontWeight={"bold"} color={{ base: "green.600", _dark: "green.400" }} >
                    {t("about.cta.title")}
                </Heading>

                <Button asChild variant={"outline"} colorPalette={"gray"} size={"xl"} mt={6}>
                    <a href={"#pricing"}>{t("about.cta.button")}</a>
                </Button>
            </Box>

        </Box>
    )
}

export const Hero = () => {

    const { t } = useTranslation("landing");
    return (
        <Box
            display={"flex"} flexDir={{ base: "column", lg: "row" }} alignItems={"end"} justifyContent={"space-between"} gap={4} textAlign={"center"} py={20} px={12}>

            <Box w={{ base: "100%", lg: "auto" }}>
                <Heading lineHeight={1} mb={3} as={"h2"} textAlign={"left"} fontSize={{ base: "3xl", md: "5xl" }} fontWeight={"bold"} color={{ base: "green.600", _dark: "green.400" }} >
                    {t("hero.title")}
                </Heading>

                <Heading as={"h3"} textAlign={"left"} fontSize={{ base: "md", md: "lg" }} fontWeight={"bold"} color={{ base: "gray.600", _dark: "gray.400" }} >
                    {t("hero.subtitle")}
                </Heading>

                <Box display={"flex"} flexWrap={"wrap"} justifyContent={{ base: "center", lg: "flex-start" }} alignItems={"center"} gap={3}>
                    <Button asChild variant={"outline"} colorPalette={"green"} size={"2xl"} mt={6}>

                        <Link to={"/signup"}>{t("hero.ctaPrimary")}</Link>
                    </Button>


                    <Button asChild variant={"outline"} colorPalette={"blue"} size={"2xl"} mt={6}>

                        <a href={"#adv"}>{t("hero.ctaSecondary")}</a>
                    </Button>
                </Box>
            </Box>


            <Image src={heroImage} alt="Hero" w={{ base: "100%", lg: "50%" }} rounded={"xl"} filter={"grayscale(75%)"} />

        </Box>
    )
}


export const Advantages = () => {

    const { t } = useTranslation("landing");
    return (
        <Box id="adv" w={"100%"} px={12} py={20}>

            <Heading as={"h3"} textAlign={"center"} mb={10} fontSize={{ base: "2xl", md: "4xl" }} fontWeight={"bold"} color={{ base: "green.600", _dark: "green.400" }} >
                {t("advantages.title")}
            </Heading>

            {/* Advantages */}

            <Box display={"grid"} gap={12} gridTemplateColumns={{ base: "1fr", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }}>


                <Card.Root>

                    <Card.Header >
                        <Box display={"flex"} alignContent={"center"} gap={3}>
                            <FiTarget size={24} color="#0BDC85" />
                            <Card.Title>{t("advantages.targetedTraining.title")}</Card.Title>

                        </Box>

                    </Card.Header>

                    <Card.Body>
                        <Card.Description>
                            {t("advantages.targetedTraining.description")}
                        </Card.Description>
                    </Card.Body>

                </Card.Root>




                <Card.Root>

                    <Card.Header >
                        <Box display={"flex"} alignContent={"center"} gap={3}>
                            <BsClipboard2Check size={24} color="#0BDC85" />
                            <Card.Title>{t("advantages.examSimulation.title")}</Card.Title>

                        </Box>

                    </Card.Header>

                    <Card.Body>
                        <Card.Description>
                            {t("advantages.examSimulation.description")}
                        </Card.Description>
                    </Card.Body>

                </Card.Root>




                <Card.Root>

                    <Card.Header >
                        <Box display={"flex"} alignContent={"center"} gap={3}>
                            <GiProgression size={24} color="#0BDC85" />
                            <Card.Title>{t("advantages.progressTracking.title")}</Card.Title>

                        </Box>

                    </Card.Header>

                    <Card.Body>
                        <Card.Description>
                            {t("advantages.progressTracking.description")}
                        </Card.Description>
                    </Card.Body>

                </Card.Root>





                <Card.Root>

                    <Card.Header >
                        <Box display={"flex"} alignContent={"center"} gap={3}>
                            <LuBookOpenText size={24} color="#0BDC85" />
                            <Card.Title>{t("advantages.detailedExplanations.title")}</Card.Title>

                        </Box>

                    </Card.Header>

                    <Card.Body>
                        <Card.Description>
                            {t("advantages.detailedExplanations.description")}
                        </Card.Description>
                    </Card.Body>

                </Card.Root>



                <Card.Root>

                    <Card.Header >
                        <Box display={"flex"} alignContent={"center"} gap={3}>
                            <LuDatabase size={24} color="#0BDC85" />
                            <Card.Title>{t("advantages.questionBank.title")}</Card.Title>

                        </Box>

                    </Card.Header>

                    <Card.Body>
                        <Card.Description>
                            {t("advantages.questionBank.description")}
                        </Card.Description>
                    </Card.Body>

                </Card.Root>

                <Box bg={"bg.subtle"} display={"flex"} alignItems={"center"} justifyContent={"center"} rounded={"xl"} p={10}>
                    <Button asChild variant={"outline"} colorPalette={"blue"} size={"2xl"} mt={6}>
                        <a href={"#about"}>{t("advantages.cta.title")}</a>
                    </Button>

                </Box>
            </Box>

        </Box>
    )
}

export default function Home() {

    const { isAuthenticated } = useAuthContext();
    return (
        <GuestLayout>

            <p>{JSON.stringify(isAuthenticated)}</p>

            <Hero />
            <Advantages />
            <About />
            <Pricing />
        </GuestLayout>
    )

}