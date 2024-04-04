import { Link as ScrollLink } from 'react-scroll';
import { Links, LinksContainer } from './navbarStyles';

type NavLinkProps = {
  isOpen: boolean;
  hideList: boolean;
}

export default function NavLink({ isOpen, hideList }: NavLinkProps) {
  return (
    <LinksContainer openHamburger={isOpen} hideList={hideList}>
      <Links>
        <ScrollLink to="about" smooth={true} duration={500}>
          About
        </ScrollLink>
      </Links>
      <Links>
        <ScrollLink to="projects" smooth={true} duration={500}>
          Projects
        </ScrollLink>
      </Links>
      <Links>
        <ScrollLink to="skills" smooth={true} duration={500}>
          Skills
        </ScrollLink>
      </Links>
      <Links>
        <ScrollLink to="contact" smooth={true} duration={500}>
          Contact
        </ScrollLink>
      </Links>
    </LinksContainer>
  );
}
