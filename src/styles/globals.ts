import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  body, html, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #231155;
  }

  .container{
    max-width: 1232px;
    width: 100%;
    padding: 0 16px;
    margin: 0 auto;
  }
`;