import { FunctionComponent, useMemo } from 'react'
import * as S from './HighlightText.styled'

interface TextHighlightProps {
  marginLeft?: number
  marginRight?: number
  children: string
}

const TextHighlight: FunctionComponent<TextHighlightProps> = ({ marginLeft, marginRight, children }) => {
  const text = useMemo(() => {
    return `${'\u3164'.repeat(marginLeft ?? 0)}${children}${'\u3164'.repeat(marginRight ?? 0)}`
  }, [marginLeft, marginRight])

  return <S.Container>{text}</S.Container>
}

export default TextHighlight
