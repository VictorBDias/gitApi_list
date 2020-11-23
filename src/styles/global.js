import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: anialiased !important;
    background-color: #2c2c2c;
  }

  button {
    cursor: pointer;
  }

`;
