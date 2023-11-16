import styled, { keyframes } from 'styled-components';

export interface NavProps {
  hideList: boolean;
  openHamburger: boolean;
}
export const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(
    rgba(24, 31, 25, 0.8),
    rgba(67, 86, 70, 0.6)
  );
  position: fixed;
  top: 0;
  align-items: flex-start;
`;

export const HamburgerContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

export const Links = styled.a`
  color: white;
  text-decoration: none;
  margin: 2em;
  font-size: larger;
  font-weight: 500;
`;

export const LinksContainer = styled(HamburgerContainer)<NavProps>`
  flex-direction: ${(props) => (props.openHamburger ? 'column' : 'row')};
  display: ${(props) => (props.hideList ? 'none' : 'flex')};
`;

export const NavList = styled.div`
display : flex;`

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Dot = styled.span`
  height: 7px;
  width: 7px;
  background-color: #ff5757;
  border-radius: 50%;
  display: inline-block;
  animation: ${fadeInOut} 4s linear infinite;
`;

export const NmesoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  margin-left: 20px;
  font-family: cursive;
`;
