import { createGlobalStyle } from "styled-components";
import { normalize } from "./normalize";
import { reset } from "./styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  ${normalize}
  * {
    box-sizing: border-box;

    &:focus-visible {
    outline: 2px solid ${(p) => p.theme.colors.purple};
    border-radius: 4px;

  }
  }
  

@font-face {
    font-family: 'SB Regular';
  src: url('/fonts/SB-Sans-Interface-Regular.otf');
  }

  @font-face {
    font-family: 'SB Medium';
  src: url('/fonts/SB-Sans-Interface-Medium.otf');
  font-weight: 500;
  }

  @font-face {
    font-family: 'SB Bold';
  src: url('/fonts/SB-Sans-Interface-Bold.otf');
  font-weight: bold;
  }


  
  body {
    margin: 0;
    padding: 24px 0px 24px 0px;
    background: ${({ theme }: any) => theme.colors.body};
    color: ${({ theme }: any) => theme.colors.text.PrimaryG800};
    font-size: 14px;
    font-family: 'SB Regular', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;


 
  }

  button{
    border: none;
  }

  html,
  body,
  #root,
  .app {
    position: relative;
    height: 100%;
  }
  html {
    scroll-behavior: smooth;
  }
  // scrollbar
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
    &-track {
      background-color: transparent;
      border-radius: 5px;
    }
    &-thumb {
      background-color: #a6b2c3;
      border-radius: 5px;
    }
    &-corner {
      background-color: #ffffff;
    }
  }
`;

export default GlobalStyles;
