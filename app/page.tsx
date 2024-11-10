//import Image from "next/image";
import { Main, Section, Container, Box } from "@/components/craft";
import Hero1 from "@/components/home-page/hero1";
import { NavBar } from "@/components/navbar";

export default function Page() {
  return (
    <Main>
      <Section>
        <Container>
          <Hero1 />
        </Container>
      </Section>
    </Main>
  );
}
