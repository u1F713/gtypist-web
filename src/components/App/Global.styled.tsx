import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    font-family: system-ui;
    box-sizing: border-box;
  }

  input, textarea {
    background: transparent;
    border: none;
    outline: none;
    color: currentColor;
    background: transparent;
    text-decoration: none;
    border: none;
    outline: none;
  }

  ::selection {
    color: ${(props) => props.theme.selection_foreground};
    background-color: ${(props) => props.theme.selection_background};
  }

  body {
    color: ${(props) => props.theme.foreground};
    background-color: ${(props) => props.theme.background};
  }

  ul, li {
    list-style: none;
    text-decoration: none;
  }
`
export default GlobalStyle
