import { FunctionComponent } from 'react'
import * as Styles from './Header.styled'

interface HeaderProps {
  selectedMenu: string
}

const Header: FunctionComponent<HeaderProps> = ({ selectedMenu }) => {
  return (
    <Styles.Wrapper>
      <li>{selectedMenu}</li>
      <li>
        <Styles.AppInfo>
          <span className="app-name">gtypist web</span>
          <span className="app-version">{APP_VERSION}</span>
        </Styles.AppInfo>
      </li>
    </Styles.Wrapper>
  )
}

export default Header
