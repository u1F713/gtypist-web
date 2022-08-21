import { FunctionComponent } from 'react'
import * as S from './StatusBar.styled'

interface StatusBarProps {
  caption: string
  description: string
}

const StatusBar: FunctionComponent<StatusBarProps> = ({ caption, description }) => {
  return (
    <S.Container>
      <S.Header>
        <span>{caption}</span>
        <span>
          {APP_NAME.replace('-', ' ')} {APP_VERSION}
        </span>
      </S.Header>
      <S.DescriptionDisplay>{description}</S.DescriptionDisplay>
    </S.Container>
  )
}

export default StatusBar
