import { useEffect, useState } from 'react';
import {
  Dot,
  HamburgerContainer,
  Links,
  LinksContainer,
  NavbarContainer,
  NmesoContainer,
} from './navbarStyles';
import Hamburger from 'hamburger-react';
import { Link as ScrollLink } from 'react-scroll';
import NavLink from './NavLink';

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
          <NavLink isOpen={isOpen} hideList={hideList()} />
        </HamburgerContainer>
      )}
      {screenWidth >= 768 && <NavLink isOpen={isOpen} hideList={hideList()} />}
    </NavbarContainer>
  );
}
