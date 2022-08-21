import styled from 'styled-components'

export const Container = styled.div``

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;

  :nth-child(1) {
    text-align: end;
  }
`

export const DescriptionDisplay = styled.h3`
  width: 50%;
  text-align: end;
  margin: 1em;
`
