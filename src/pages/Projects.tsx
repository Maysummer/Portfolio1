import {
  SectionContainer,
  SectionHeader,
  SectionHeaderContainer,
  SectionHeaderText,
} from "./styles/sectionStyles";
import drugInventory from "../assets/drug-inventory.png";
import quizzicalApp from "../assets/quizzical-app.png";
import shoppingCart from "../assets/shopping-cart.png";
import {
  Project,
  ProjectContainer,
  ProjectImg,
  ProjectLink,
  ProjectText,
  LinkBracket,
  LinkText,
  Showbox,
  Show,
  StyledFontAwesomeIcon,
} from "./styles/projectStyles";
import {
  faChevronRight,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <SectionContainer id='projects'>
      <SectionHeaderContainer>
        <SectionHeaderText>What I have done</SectionHeaderText>
        <SectionHeader>Projects</SectionHeader>
      </SectionHeaderContainer>
      <p>
        <StyledFontAwesomeIcon icon={faInfoCircle} />
        Pictures link to hosted version, text links to source code
      </p>
      <ProjectContainer>
        <Project>
          <ProjectLink
            href="https://inventory-plum-zeta.vercel.app/"
            target="-blank"
          >
            <ProjectImg src={drugInventory} alt="Drug inventory project" />
          </ProjectLink>
          <ProjectText>
            <p>
              A React application utilising Redux toolkit for state management
              to handle a drug product list and historical price records fetched
              using React-query.
            </p>
            <ProjectLink
              href="https://github.com/Maysummer/Inventory"
              target="-blank"
            >
              <p>
                <LinkBracket className="code">&lt;</LinkBracket>
                <LinkText>Drug Inventory</LinkText>
                <LinkBracket className="code">&#47;&gt;</LinkBracket>
              </p>
            </ProjectLink>
          </ProjectText>
        </Project>
        <Project>
          <ProjectLink
            href="https://quizzical-app-lac.vercel.app/"
            target="-blank"
          >
            <ProjectImg src={quizzicalApp} alt="Quiz app project" />
          </ProjectLink>
          <ProjectText>
            <p>
              React interactive quiz app. Participants can select answers from
              multiple-choice options, while the app provides real-time feedback
              to indicate the accuracy of their responses.
            </p>
            <ProjectLink
              href="https://github.com/Maysummer/Quizzical-app"
              target="-blank"
            >
              <p>
                <LinkBracket className="code">&lt;</LinkBracket>
                <LinkText>Quizzical App</LinkText>
                <LinkBracket className="code">&#47;&gt;</LinkBracket>
              </p>
            </ProjectLink>
          </ProjectText>
        </Project>
        <Project>
          <ProjectLink
            href="https://shopping-cart-vert-three.vercel.app/"
            target="-blank"
          >
            <ProjectImg src={shoppingCart} alt="Shopping Cart project" />
          </ProjectLink>
          <ProjectText>
            <p>
              A fully functional shopping cart using React, TypeScript, and
              Bootstrap
            </p>
            <ProjectLink
              href="https://github.com/Maysummer/Shopping-Cart"
              target="-blank"
            >
              <p>
                <LinkBracket className="code">&lt;</LinkBracket>
                <LinkText>Shopping Cart</LinkText>
                <LinkBracket className="code">&#47;&gt;</LinkBracket>
              </p>
            </ProjectLink>
          </ProjectText>
        </Project>
      </ProjectContainer>
      <Showbox>
        <Show href="https://github.com/Maysummer" target="-blank">
          Show all
          <StyledFontAwesomeIcon icon={faChevronRight} />
        </Show>
      </Showbox>
    </SectionContainer>
  );
}
