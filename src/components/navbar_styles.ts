import styled from 'styled-components';

export interface NavProps {
  hideList: boolean;
  flexDir: boolean;
}
export const NavbarContainer = styled.nav`
  width: 100%;

  background-image: linear-gradient(
    rgba(24, 31, 25, 0.8),
    rgba(67, 86, 70, 0.6)
  );
`;

export const HamburgerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Links = styled.a`
  color: white;
  text-decoration: none;
  margin: 2em;
  font-size: larger;
  font-weight: 500;
`;

export const LinksContainer = styled(HamburgerContainer)<NavProps>`
  flex-direction: ${(props) => (props.flexDir ? 'column' : 'row')};
  display: ${(props) => (props.hideList ? 'none' : 'flex')};
`;
