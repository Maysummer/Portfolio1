import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 2em 20em;

  @media (max-width: 1270px) {
    padding: 2em 2em;
  }
`;

export const SectionHeader = styled.p`
  font-family: 'Agbalumo';
  font-size: 60px;
  text-align: left;
  margin: 0;
  margin-top: 10px;
  color: #d5ffdb;

  @media (max-width: 768px) {
    font-size: 50px;
  }
`;