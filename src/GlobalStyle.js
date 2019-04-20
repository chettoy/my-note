import { createGlobalStyle } from 'styled-components/macro';
import styledNormalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  @media screen and (max-width:240px){body{font-size:12px;}}
  @media screen and (min-width:241px) and (max-width:320px){body{font-size:16px;}}
  @media screen and (min-width:321px) and (max-width:480px){body{font-size:24px;}}
  @media screen and (min-width:481px) and (max-width:720px){body{font-size:32px;}}
  @media screen and (min-width:721px) and (max-width:1080px){body{font-size:48px;}}
  @media screen and (min-width:1081px) and (max-width:1440px){body{font-size:64px;}}

  a:link{text-decoration:none;}
  a:visited{text-decoration:none;}
  a:hover{text-decoration:none;}
  a:active{text-decoration:none;}

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

export default GlobalStyle;