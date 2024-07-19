import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const accomplishmentsData = [
  { number: "3", text: "Years of experience in software development" },
  { number: "5", text: "Completed freelance projects" },
  { number: "1", text: "Founded PraiseTech in 2024" },
  { number: "10+", text: "Technologies mastered" },
  { number: "2", text: "Major coding competitions won" },
  {
    number: "1",
    text: "Bachelor's degree in Information Technology in progress",
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {accomplishmentsData.map((item, index) => (
        <Box key={index}>
          <BoxNum>{item.number}</BoxNum>
          <BoxText>{item.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
