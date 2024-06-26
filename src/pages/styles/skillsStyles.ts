import { styled } from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
`;
export const SkillCard = styled.div`
  background-color: #d5ffdb;
  color: black;
  border-radius: 1.5rem;
  width: 300px;
  height: 300px;
  padding: 1em;

  @media (max-width: 768px) {
    height: 100px;
    width: 100px;
  }

  img {
    object-fit: cover;
    height: 50px;
    width: 50px;
  }

  p {
    @media (max-width: 768px) {
        display: none;
      }
  }
`;
