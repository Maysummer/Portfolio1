import { createGlobalStyle } from "styled-components";
import styled from "styled-components"

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    #root{
      margin: 0 auto;
      
    }
  }
`

export const AppContainer = styled.div`
background-image: url('./assets/noise-bg.png');
  background-color: #445747;
  color: white;
`