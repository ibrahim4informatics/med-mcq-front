import { Box, Flex, Icon, Text } from "@chakra-ui/react";

interface StatsCardProps {
    icon: React.ReactElement;
    title: string;
    subtitle?: string;
    count: number;
    onClick?: () => void;
}

export default function StatsCard({
    icon,
    title,
    subtitle,
    count,
    onClick
}: StatsCardProps) {
    const formattedCount = new Intl.NumberFormat(undefined, {
        notation: "compact",
        maximumFractionDigits: 1,
    }).format(count);

    return (
        <Box
            onClick={onClick}
            cursor={"pointer"}
            bg={{ base: "white", _dark: "gray.900" }}
            borderWidth="1px"
            borderColor={{ base: "gray.200", _dark: "gray.700" }}
            rounded="xl"
            p={5}
            shadow="sm"
            transition="all .2s"
            _hover={{
                shadow: "md",
                transform: "translateY(-2px)",
            }}
        >
            <Flex justify="space-between" align="flex-start">
                <Box>
                    <Text
                        fontSize="sm"
                        color="gray.500"
                        fontWeight="medium"
                    >
                        {title}
                    </Text>

                    <Text
                        mt={2}
                        fontSize="3xl"
                        fontWeight="bold"
                        lineHeight={1}
                    >
                        {formattedCount}
                    </Text>

                    {subtitle && (
                        <Text
                            mt={2}
                            fontSize="sm"
                            color="gray.500"
                        >
                            {subtitle}
                        </Text>
                    )}
                </Box>

                <Flex
                    w="54px"
                    h="54px"
                    rounded="lg"
                    bg="green.500"
                    color="white"
                    align="center"
                    justify="center"
                    fontSize="24px"
                >
                    <Icon>
                        {icon}
                    </Icon>
                </Flex>
            </Flex>
        </Box>
    );
}