import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {
      -webkit-font-smoothing: antialiased;
    }

    body, input, button {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: ${theme.font.bold};
    }

    button {
      cursor: pointer;
    }
  `}
`;
