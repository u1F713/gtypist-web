import styled from 'styled-components'

export const Wrapper = styled.header`
  display: grid;
  place-items: end;
  grid-template-columns: 1fr 1fr;
  background-color: #${(props) => props.theme.colors[4].code};
  color: #${(props) => props.theme.colors[0].code};
`

export const AppInfo = styled.div`
  display: flex;

  .app-name {
    color: #${(props) => props.theme.colors[13].code};
    ::selection {
      color: #${(props) => props.theme.colors[4].code};
      background-color: #${(props) => props.theme.colors[13].code};
    }
  }

  .app-version {
    color: #${(props) => props.theme.colors[1].code};
    ::selection {
      color: #${(props) => props.theme.colors[4].code};
      background-color: #${(props) => props.theme.colors[1].code};
    }
  }
`
