import React, { useEffect } from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

import { InterestTypes } from "../../constants/constants";

const Hero = (props) => (
  <Section row noPadding>
    <LeftSection>
      <SectionTitle main center>
        Hey there! <br />I am Devesh
      </SectionTitle>
      <SectionText>Developer | Gamer | Traveller</SectionText>
      <Button
        onClick={() => window.open("http://bit.ly/devesh-resume", "_blank")}
      >
        Download Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
