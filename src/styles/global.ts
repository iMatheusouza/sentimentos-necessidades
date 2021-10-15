import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(119.11deg, #FF7982 0%, #FF8D53 100%);
    color: var(--dark-font);
  }

  button {
    cursor: pointer;
  }

  #root {
    --body-gradient: linear-gradient(119.11deg, #FF7982 0%, #FF8D53 100%);
    --button-gradient: linear-gradient(90.09deg, #FF748D 0%, #FF8E4F 100%);
    --app-background: #F4F8FD;
    --white-font: #ffffff;
    --dark-font: #000000;
    --dark-blue: #09183F;


    max-width: 1440px;
    margin: 0 auto;
    background-color: var(--app-background);
    height: 100%;
  }   

`;
