import { SectionContainer, SectionHeader } from "./styles/sectionStyles";
import drugInventory from "../assets/drug-inventory.png";
import quizzicalApp from "../assets/quizzical-app.png";
import travelJournal from "../assets/travel-journal.png";
import digitalCard from "../assets/digital-card.png";
import shoppingCart from "../assets/shopping-cart.png";
import { Photos, ProjectContainer, ProjectImg } from "./styles/projectStyles";

export default function Projects() {
  return (
    <SectionContainer>
      <SectionHeader>Projects</SectionHeader>
      <h2>These are some of my projects</h2>
      <p>
        <i className="fa fa-info-circle"></i>Pictures link to hosted version,
        text links to source code
      </p>
      <ProjectContainer>
        <Photos>
          <a href="https://inventory-plum-zeta.vercel.app/" target="-blank">
            <ProjectImg src={drugInventory} alt="Drug inventory project" />
          </a>
          <p>
            A React application utilising Redux toolkit for state management to
            handle a drug product list and historical price records fetched
            using React-query.
          </p>
          <a href="https://github.com/Maysummer/Inventory" target="-blank">
            <p className="project-tile">
              <span className="code">&lt;</span>
              <span className="text">Drug Inventory</span>
              <span className="code">&#47;&gt;</span>
            </p>
          </a>
        </Photos>
        <Photos>
          <a href="https://quizzical-app-lac.vercel.app/" target="-blank">
            <ProjectImg src={quizzicalApp} alt="Quiz app project" />
          </a>
          <p>
            React interactive quiz app. Participants
            can select answers from multiple-choice options, while the app
            provides real-time feedback to indicate the accuracy of their
            responses.
          </p>
          <a href="https://github.com/Maysummer/Quizzical-app" target="-blank">
            <p className="project-tile">
              <span className="code">&lt;</span>
              <span className="text">Quizzical App</span>
              <span className="code">&#47;&gt;</span>
            </p>
          </a>
        </Photos>
        <Photos>
          <a href="https://shopping-cart-vert-three.vercel.app/" target="-blank">
            <ProjectImg src={shoppingCart} alt="Shopping Cart project" />
          </a>
          <p>A fully functional shopping cart using React, TypeScript, and Bootstrap</p>
          <a href="https://github.com/Maysummer/Shopping-Cart" target="-blank">
            <p className="project-tile">
              <span className="code">&lt;</span>
              <span className="text">Shopping Cart</span>
              <span className="code">&#47;&gt;</span>
            </p>
          </a>
        </Photos>
      </ProjectContainer>
      <div className="showbox">
        <a href="https://github.com/Maysummer" className="show" target="-blank">
          Show all<i className="fas fa-chevron-right"></i>
        </a>
      </div>
    </SectionContainer>
  );
}
