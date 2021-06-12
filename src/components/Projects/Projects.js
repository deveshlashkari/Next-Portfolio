import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section noPadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((_data) => (
        <BlogCard key={_data.id}>
          <Img src={_data.image} />
          <TitleContent title>
            <HeaderThree title>{_data.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{_data.description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {_data.tags.map((_tags, i) => (
                <Tag key={i}>{_tags}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={_data.source} target="_blank">
              Code
            </ExternalLinks>
            <ExternalLinks href={_data.visit} target="_blank">
              View Project
            </ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
