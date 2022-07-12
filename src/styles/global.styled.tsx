import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ::selection {
    color: ${(props) => props.theme.selection_foreground};
    background-color: ${(props) => props.theme.selection_background};
  }

  body {
    color: ${(props) => props.theme.foreground};
    background-color: ${(props) => props.theme.background};
  }
`
export default GlobalStyle
