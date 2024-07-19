import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
``;
const Hero = () => (
  <Section>
    <LeftSection>
      <SectionTitle>
        Welcome to My Professional Portfolio <br />
        Showcasing Skills and Achievements
      </SectionTitle>
      <SectionText>
        Explore a curated selection of work from Praise Masunga that highlights
        a steadfast commitment to excellence and innovation. Each project
        embodies a continuous journey of growth and professional dedication.
      </SectionText>
      <Button onClick={() => (window.location.href = "/portfolio")}>
        Discover More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
