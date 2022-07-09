import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.background};
  }
`
export default GlobalStyle
