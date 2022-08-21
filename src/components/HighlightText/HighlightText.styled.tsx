import styled from 'styled-components'

export const Container = styled.span`
  color: ${(props) => props.theme.background};
  background-color: #${(props) => props.theme.colors[5].code};
`
