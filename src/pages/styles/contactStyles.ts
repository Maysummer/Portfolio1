import { styled } from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  line-height: 2.25rem;
  padding-top: 2em;
  width: 70%;
`;

const SharedInputStyles = `
  background-color: #3e5241;
  border: none;
  color: #d5ffdb;
  outline: none;
  border-radius: 5px;
  padding: 1em;
  
  &:hover {
    outline: 3px solid #819c85;
  }
`;

export const Input = styled.input`
  ${SharedInputStyles}
  height: 1.5rem;
`;

export const TextArea = styled.textarea`
  ${SharedInputStyles}
`;

export const Submit = styled.button`
  background-color: #4a5744;
  color: #d5ffdb;
  width: fit-content;
  padding: 0.5em 2em;
  border: none;
  font-size: 19px;
  box-shadow: 6px 6px 7px #343d30;
  border-radius: 10px;

  &:hover {
    background-color: #62745A;
  }
`
