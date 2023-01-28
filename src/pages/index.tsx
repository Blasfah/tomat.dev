import { Inter } from "@next/font/google";
import Container from "@/components/Container";
import LogoContainer from "@/components/LogoContainer";

const inter = Inter({ subsets: ["latin"] });

const title = "/";
const description = "Hello, world!";

export default function Home() {
    return (
        <LogoContainer width={250} height={250} interactable clickable>
            <Container title={title} description={description}>
                <main className="w-full h-full">
                    <div className="w-full h-full flex justify-center items-center">
                        <h1>
                            <em>Generally, I&apos;m a modest guy.</em>
                        </h1>
                    </div>
                </main>
            </Container>
        </LogoContainer>
    );
}
