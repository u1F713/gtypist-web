import { FunctionComponent } from 'react'
import * as Styles from './Header.styled'

interface HeaderProps {
  selectedMenu: string
}

export const Header: FunctionComponent<HeaderProps> = ({ selectedMenu }) => {
  return (
    <Styles.Wrapper>
      <li>{selectedMenu}</li>
      <li>
        <Styles.AppInfo>
          <span className="app-name">{`\u2800${APP_NAME}\u2800`}</span>
          <span className="app-version">{APP_VERSION}</span>
        </Styles.AppInfo>
      </li>
    </Styles.Wrapper>
  )
}
