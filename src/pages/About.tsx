import { AboutContainer, AboutContent, AboutHeader, AboutImage } from './styles/aboutStyles';
import nmeso from '../assets/nmeso.jpeg';

export default function About() {
  return (
    <AboutContainer id="about">
      <AboutHeader>About</AboutHeader>
      <AboutContent>
        <p>
          Hello there! I'm a school-taught systems engineer (BSc) and a
          self-taught frontend engineer, driven by a deep passion for
          technology and a knack for crafting beautiful user interfaces and
          experiences.<br /><br />I thrive on the challenge of translating complex concepts
          into visually appealing and user-friendly designs. Whether bringing an
          idea to life through code or refining the user journey. Beyond the
          screen, I find fulfilment in positively impacting the community
          through volunteering.<br /><br />I believe in the power of technology to drive
          positive change, and I seize every opportunity to contribute my skills
          to meaningful projects. Collaboration is at the core of my approach,
          and I am eager to join forces with like-minded individuals to build
          not just functional but truly impactful and beautiful products.
        </p>
        <AboutImage src={nmeso} alt="" />
      </AboutContent>
    </AboutContainer>
  );
}
