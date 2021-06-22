import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
    // normalize
    * {
      padding: 0;
      margin: 0;
      border: 0;
    }

    *,
    *:before,
    *:after {
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    :focus,
    :active {
      outline: none;
    }
    a:focus,
    a:active {
      outline: none;
    }
    nav,
    footer,
    header,
    aside {
      display: block;
    }
    html,
    body {
      height: 100%;
      width: 100%;
      font-size: 100%;
      line-height: 1;
      -ms-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }
    input,
    button,
    textarea {
      font-family: inherit;
    }
    input::-ms-clear {
      display: none;
    }
    button {
      cursor: pointer;
      background: none;
    }
    button::-moz-focus-inner {
      padding: 0;
      border: 0;
    }
    a,
    a:visited {
      text-decoration: none;
    }
    a:hover {
      text-decoration: none;
    }
    ul li {
      list-style: none;
    }
    img {
      vertical-align: top;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: inherit;
      font-weight: inherit;
    }


    // Global styles
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
        text-rendering: optimizeLegibility;
     
    a {
        display: inline-block;
        color: inherit;
        cursor: pointer;
        &:hover,
        &:focus {
          outline: 0;
        }
    }

    h1 {
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.375rem;
        color: ${({ theme }) => theme.colors.primary};
    }

    h2 {
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.5rem;
        color: ${({ theme }) => theme.colors.primary};
        
    }

    h3 {
        font-weight: 700;
        font-size: 1.75rem;
        line-height: 2.25rem;
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 3rem;
    }

    h4 {
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
    }

    hr {
        margin: 3rem auto;
        border-width: .05rem;
        color: ${({ theme }) => theme.colors.tertiary};
        opacity: 0.1;
      }
    }
`;

export default GlobalStyle;
