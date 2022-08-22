import { FunctionComponent } from 'react'
import * as S from './HighlightText.styled'

interface TextHighlightProps {
  text: string
}

const TextHighlight: FunctionComponent<TextHighlightProps> = ({ text }) => {
  return <S.Container>{text.replace(' ', '\u3164')}</S.Container>
}

export default TextHighlight
