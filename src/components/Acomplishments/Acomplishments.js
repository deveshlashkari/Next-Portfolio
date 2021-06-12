import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText, Img } from "./AcomplishmentsStyles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

import { ExperienceData } from "../../constants/constants";

const Acomplishments = () => (
  <Section id="experience">
    <SectionDivider />
    <SectionTitle>Experience</SectionTitle>

    <VerticalTimeline>
      {ExperienceData.map((_data, idx) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#212D45", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #212D45" }}
          date={_data.date}
          iconStyle={{ background: "#212D45", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">{_data.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {_data.organization}
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            {_data.location}
          </h5>
          <p>{_data.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </Section>
);

export default Acomplishments;
