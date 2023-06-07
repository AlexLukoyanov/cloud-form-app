import { createGlobalStyle } from "styled-components";
import { normalize } from "./normalize";
import { reset } from "./styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  ${normalize}
  * {
    box-sizing: border-box;
  }
  
  @font-face {
  font-family: 'SB Sans Interface';
  src: url('/fonts/B-Sans-Text.woff2') format('woff2'),
       url('/fonts/B-Sans-Medium.woff2') format('woff2'),
       url('/fonts/B-Sans-Bold.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}


  
  body {
    margin: 0;
    background: ${({ theme }: any) => theme.colors.bgGrey};
    color: ${({ theme }: any) => theme.colors.text};
    font-size: 1.15em;
    font-family: 'SB Sans Interface', sans-serif;
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
