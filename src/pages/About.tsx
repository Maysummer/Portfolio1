import { AboutContent, AboutImage, AboutText } from "./styles/aboutStyles";
import {
  SectionContainer,
  SectionHeader,
  SectionHeaderContainer,
  SectionHeaderText,
} from "./styles/sectionStyles";

import nmeso from "../assets/nmeso.jpeg";

export default function About() {
  return (
    <SectionContainer id="about">
      <SectionHeaderContainer>
        <SectionHeaderText>Who I am</SectionHeaderText>
        <SectionHeader>About</SectionHeader>
      </SectionHeaderContainer>
      <AboutContent>
        <AboutText>
          Hello there! I'm a school-taught systems engineer (BSc) and a
          self-taught software engineer, driven by a deep passion for
          technology.
          <br />
          <br />I enjoy simplifying complex ideas into user-friendly designs. I
          also find fulfillment in volunteering to positively impact the
          community.
          <br />
          <br />
          Collaboration is at the core of my approach, and I am eager to join
          forces with like-minded individuals to build not just functional but
          truly impactful and beautiful products.
        </AboutText>
        <AboutImage src={nmeso} alt="" />
      </AboutContent>
    </SectionContainer>
  );
}
