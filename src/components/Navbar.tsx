import React, { useEffect, useState } from 'react';
import { HamburgerContainer, Links, LinksContainer, NavbarContainer } from './navbar_styles';
import Hamburger from 'hamburger-react';

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
    if (screenWidth < 768 && !isOpen) {
      setIsOpen(false);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <NavbarContainer>
      {screenWidth < 768 && (
        <HamburgerContainer>
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </HamburgerContainer>
      )}
      <LinksContainer flexDir={isOpen} hideList={hideList()}>
        <Links href="http://">About</Links>
        <Links href="http://">Projects</Links>
        <Links href="http://">Skills</Links>
        <Links href="http://">Contact</Links>
      </LinksContainer>
    </NavbarContainer>
  );
}
