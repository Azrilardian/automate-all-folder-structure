import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
${normalize};
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html body {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`;

export default GlobalStyles;
