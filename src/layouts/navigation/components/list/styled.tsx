import styled from 'styled-components'

export const Navigation = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  place-items: center;

  li {
    display: grid;
    grid-template-columns: auto 1fr 1fr;
    gap: 1em;
    width: auto;
  }
`
