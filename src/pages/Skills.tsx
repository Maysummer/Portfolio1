import { skills } from "../constants/constants";
import { LazyMotion, domAnimation, m } from "framer-motion";
import {
  SectionContainer,
  SectionHeader,
  SectionHeaderContainer,
  SectionHeaderText,
} from "./styles/sectionStyles";
import { SkillCard, SkillsContainer } from "./styles/skillsStyles";
import Marquee from "react-fast-marquee";

export default function Skills() {
  return (
    <SectionContainer id="skills">
      <SectionHeaderContainer>
        <SectionHeaderText>What I can do</SectionHeaderText>
        <SectionHeader>Skills</SectionHeader>
      </SectionHeaderContainer>
      <Marquee speed={150} pauseOnHover={true}>
        <SkillsContainer>
          <LazyMotion features={domAnimation}>
            {skills.map((skill, index) => (
              <m.div
                initial={{ scale: 0.8 }}
                animate={{
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
                style={{ transition: "all 0.6s" }}
                key={index}
              >
                <SkillCard>
                  <img src={skill.icon} alt={skill.id} />
                  <h4>{skill.title}</h4>
                  <p>{skill.description}</p>
                </SkillCard>
              </m.div>
            ))}
          </LazyMotion>
        </SkillsContainer>
      </Marquee>
    </SectionContainer>
  );
}
