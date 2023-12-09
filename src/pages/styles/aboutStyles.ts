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
  color: #d5ffdb;

  @media (max-width: 768px) {
    font-size: 50px;
  }
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
  border-radius: 3em;
  filter: drop-shadow(0 0 2rem #d5ffdb);

  &:hover {
    animation-name: img-animation;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;

    @keyframes img-animation {
      0% {
        transform: rotate(0deg);
      }
      10% {
        transform: rotate(5deg);
      }
      20% {
        transform: rotate(-5deg);
      }
      30% {
        transform: rotate(3deg);
      }
      40% {
        transform: rotate(-3deg);
      }
      50% {
        transform: rotate(2deg);
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
