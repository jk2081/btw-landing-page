// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Placeholder from "@/public/placeholder.webp";

const Hero = () => {
  return (
    <Section>
      <Container>
        <div>
          <h1>
            <Balancer>
              The only newsletter you need to build a business that works and
              grows easily!
            </Balancer>
          </h1>
          <h4 className="text-muted-foreground">
            <Balancer>
              Every Saturday, I share one system.that.works that will you not
              find anywhere else.
            </Balancer>
          </h4>
          <h4 className="text-muted-foreground">
            <Balancer>
              Join 1,357 other business owners who want to stay ahead of their
              compeition.
            </Balancer>
          </h4>
          <Image
            className="h-full w-full object-cover object-bottom"
            src={Placeholder}
            width={300}
            height={1080}
            alt="hero image"
            placeholder="blur"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
