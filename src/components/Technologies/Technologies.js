import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  SiExpo,
  SiPython,
  SiJava,
  SiCsharp,
  SiC,
  SiSupabase,
  SiAdobe,
} from "react-icons/si"; // Importing additional icons
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
} from "./TechnologiesStyles";
import { FaMobile } from "react-icons/fa6";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a diverse set of technologies and tools, ranging from
      front-end and back-end development to graphic design and databases. Below
      is a summary of my skills and experiences.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, Firebase, Supabase
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma, Adobe XD, Graphic Design
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiSupabase size="3rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            SQL, NoSQL, Firebase, Supabase
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiPython size="3rem" />
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python, Java, C, C#
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaMobile size="3rem" />
        <ListContainer>
          <ListTitle>Mobile Development</ListTitle>
          <ListParagraph>
            Experience with <br />
            Expo for React Native
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
