import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 2em 20em;
  height: 100vh;
  
  @media (max-width: 1270px) {
    padding: 2em 2em;
  }
`;

export const SectionHeaderContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: 10px;
font-family: 'Agbalumo';
`
export const SectionHeaderText = styled.p`
  margin: 0;
  color: #819c85;
  font-size: 20px;
`

export const SectionHeader = styled.p`
  font-size: 80px;
  margin: 0;
  color: #d5ffdb;
  margin-top: -2.3rem;

  @media (max-width: 768px) {
    font-size: 50px;
  }
`;