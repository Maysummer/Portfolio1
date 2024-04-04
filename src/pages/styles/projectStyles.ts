import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5rem;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export const Project = styled.div`
  background-color: #445751;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: 50%;
`;

export const LinkBracket = styled.span`
  color: #445751;
  transition: color 0.3s ease-out;
`;

export const ProjectText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5em 0.5em 0.5em;
  height: 50%;
  justify-content: space-between;

  &:hover ${LinkBracket} {
    color: #ff7f50;
  }
`;

export const ProjectLink = styled.a`
  text-decoration: none;
`;

export const LinkText = styled.h4`
  display: inline;
  color: #d5ffdb;

  &:hover {
    color: #d5ffdb;
  }
`;

export const Showbox = styled.div`
  margin-top: 4em;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  padding: 0 0.5em;
`;

export const Show = styled(ProjectLink)`
  background-color: #4a5744;
  text-decoration: none;
  color: #f0f0f0;
  padding: 0.5em 1em;
  border-radius: 10px;
  font-size: 19px;
  box-shadow: 6px 6px 7px #343d30;

  &:hover > ${StyledFontAwesomeIcon} {
    transform: translateX(3px);
  }

  &:hover {
    background-color: #62745A;
  }
`;


