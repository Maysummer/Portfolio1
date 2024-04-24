import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const PageFooter = styled.footer`
  background-color: #364639;
  padding: 2em 0;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const IconLink = styled.a`
  text-decoration: none;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  padding: 0 0.5em;
  height: 40px;
  width: 40px;
  color: #d5ffdb;
  opacity: 0.4;
`;