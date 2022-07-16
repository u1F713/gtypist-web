import { FunctionComponent } from 'react'
import * as Styles from './Header.styled'

interface HeaderProps {
  selected: string
}

export const Header: FunctionComponent<HeaderProps> = ({ selected }) => {
  return (
    <Styles.Wrapper>
      <li>{selected}</li>
      <li>
        <Styles.AppInfo>
          <span className="app-name">{`\u2800${APP_NAME}\u2800`}</span>
          <span className="app-version">{APP_VERSION}</span>
        </Styles.AppInfo>
      </li>
    </Styles.Wrapper>
  )
}
