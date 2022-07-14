import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
