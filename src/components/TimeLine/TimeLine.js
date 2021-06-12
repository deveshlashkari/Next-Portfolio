import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";

import { LeftSection, Img } from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Timeline = () => {
  return (
    <Section id="about">
      <SectionDivider />

      <LeftSection>
        <SectionTitle>About Me</SectionTitle>
        <SectionText>
          Hello Humans! <br />I am Devesh currently working as Software Engineer
          at Protonshub Technologies at Indore, India with 2+ years of
          experience in React, Redux, Javascript, Next.js & React Native. I love
          to code and travel. I am a community enthusiast who loves to share
          knowledge and participate in events.
          <br />
          <br />
          Currently I am working on AWS to explore the field of DevOps. <br />
          <br />I am open to discuss on any project idea or technology. Feel
          free to get in touch with me on any of the social media links.
        </SectionText>
      </LeftSection>
    </Section>
  );
};

export default Timeline;
