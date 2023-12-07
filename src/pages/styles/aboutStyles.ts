import styled from 'styled-components';

export const AboutContainer = styled.section`
  padding: 2em 2em;
`;

export const AboutHeader = styled.p`
  font-family: 'Agbalumo';
  font-size: 60px;
  text-align: left;
  margin: 0;
  margin-top: 10px;
`;

export const AboutContent = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  font-size: larger;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
  }
`;

export const AboutImage = styled.img`
  height: 20em;
  border-radius: 1em;
  box-shadow: 5px 8px rgba(24, 31, 25, 0.8);

  &:hover {
    animation-name: img-animation;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;

    @keyframes img-animation {
      0% {
        transform: rotate(0deg);
      }
      10% {
        transform: rotate(15deg);
      }
      20% {
        transform: rotate(-10deg);
      }
      30% {
        transform: rotate(14deg);
      }
      40% {
        transform: rotate(-4deg);
      }
      50% {
        transform: rotate(10deg);
      }
      60% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
`;
