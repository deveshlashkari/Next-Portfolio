import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  Img,
} from "./TechnologiesStyles";

import { technologyLogos } from "../../constants/constants";

const Technologies = () => (
  <Section id="technology">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked on different technologies in the web as well as mobile
      development.
    </SectionText>
    <List>
      {technologyLogos.map((_logo, i) => (
        <ListItem>
          <Img key={i} src={_logo} />
        </ListItem>
      ))}
    </List>
  </Section>
);

export default Technologies;
