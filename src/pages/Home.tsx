import Navbar from "@/components/custom/Global/Navbar";
import { Box, Button, Card, Heading, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero.jpg";
import { Link } from "react-router-dom";
import { FiTarget } from "react-icons/fi"
import { BsClipboard2Check } from "react-icons/bs"
import {  GiProgression } from "react-icons/gi"
import { LuBookOpenText, LuDatabase } from "react-icons/lu";

export const Hero = () => {

    const { t } = useTranslation("landing");
    return (
        <Box
            display={"flex"} flexDir={{ base: "column", lg: "row" }} alignItems={"end"} justifyContent={"space-between"} gap={4} textAlign={"center"} py={20} px={12}>

            <Box w={{base:"100%", lg:"auto"}}>
                <Heading lineHeight={1} mb={3} as={"h2"} textAlign={"left"} fontSize={{ base: "3xl", md: "5xl" }} fontWeight={"bold"} color={{ base: "green.600", _dark: "green.400" }} >
                    {t("hero.title")}
                </Heading>

                <Heading as={"h3"} textAlign={"left"} fontSize={{ base: "md", md: "lg" }} fontWeight={"bold"} color={{ base: "gray.600", _dark: "gray.400" }} >
                    {t("hero.subtitle")}
                </Heading>

                <Box display={"flex"} flexWrap={"wrap"} justifyContent={{base:"center", lg:"flex-start"}} alignItems={"center"} gap={3}>
                    <Button  asChild variant={"outline"} colorPalette={"green"} size={"2xl"} mt={6}>

                        <Link to={"/signup"}>{t("hero.ctaPrimary")}</Link>
                    </Button>


                    <Button  asChild variant={"outline"} colorPalette={"blue"} size={"2xl"} mt={6}>

                        <a href={"#adv"}>{t("hero.ctaSecondary")}</a>
                    </Button>
                </Box>
            </Box>


            <Image src={heroImage} alt="Hero" w={{base: "100%", lg: "50%"}} rounded={"xl"} filter={"grayscale(75%)"} />

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
            </Box>

        </Box>
    )
}

export default function Home() {


    return (
        <Box>

            <Navbar />
            <Hero />
            <Advantages />

        </Box>
    )

}