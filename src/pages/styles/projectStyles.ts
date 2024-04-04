import { styled } from "styled-components";

export const ProjectContainer = styled.div `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 2em;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
`;

export const Photos = styled.div `
    background-color: #303841;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`;

export const ProjectImg = styled.img `
    width: 100%;
`