// React and Next.js imports

import Image from "next/image";

// UI component imports
import { Section, Container } from "@/components/craft";

// Asset imports
import Placeholder from "@/public/placeholder.webp";
import SubscribeNewsletter from "./subscribe-newsletter";

const Hero1 = () => {
  return (
    <Section>
      <Container className="grid items-stretch md:grid-cols-3 md:gap-2">
        <div className="col-span-2 flex flex-col gap-2 py-2">
          <h1 className="!my-0">
            The only newsletter you need to build a business that works and
            grows easily!
          </h1>
          <h4 className="col-span-2 text-muted-foreground">
            Every Saturday, I share one system.that.works that will you not find
            anywhere else.
          </h4>
          <h4 className="col-span-2 text-muted-foreground">
            Join 1,357 other business owners who want to stay ahead of their
            competition.
          </h4>
          <SubscribeNewsletter />
        </div>
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          <div className="max-[825px]:col-span-3">
            <Image
              src={Placeholder}
              alt="placeholder"
              className="fill object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero1;
