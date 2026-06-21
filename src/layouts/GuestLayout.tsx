import Navbar from "@/components/custom/Global/Navbar";
import { Container } from "@chakra-ui/react";

interface GuestLayoutProps {
    children: React.ReactNode;
}
export default function GuestLayout({ children }: GuestLayoutProps) {
    return (
        <>
            <Navbar />

            <Container>
                {children}
            </Container>
        </>
    );
}