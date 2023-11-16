import { useEffect, useState } from 'react';
import {
  Dot,
  HamburgerContainer,
  Links,
  LinksContainer,
  NavbarContainer,
  NmesoContainer,
} from './navbar_styles';
import Hamburger from 'hamburger-react';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  const hideList = () => {
    if (screenWidth < 768 && !isOpen) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if ((screenWidth < 768 && !isOpen) || screenWidth >= 768) {
      setIsOpen(false);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <NavbarContainer>
      <NmesoContainer>
        <h4>Nmeso</h4>
        <Dot></Dot>
      </NmesoContainer>

      {screenWidth < 768 && (
        <HamburgerContainer>
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
          <LinksContainer openHamburger={isOpen} hideList={hideList()}>
            <Links>
              <ScrollLink to="about" smooth={true} duration={500}>
                About
              </ScrollLink>
            </Links>
            <Links>
              <ScrollLink to="contact" smooth={true} duration={500}>
                Contact
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
          </LinksContainer>
        </HamburgerContainer>
      )}
      {screenWidth >= 768 && (
        <LinksContainer openHamburger={isOpen} hideList={hideList()}>
          <Links>
            <ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
          </Links>
          <Links>
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
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
        </LinksContainer>
      )}
    </NavbarContainer>
  );
}
