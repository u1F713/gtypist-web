import { FC, memo } from 'react'
import * as S from './styled'

interface TextEntryProps {
  label: string
  drill: string
}

export const TextEntry: FC<TextEntryProps> = ({ label, drill }) => {
  return (
    <section>
      <S.TextLabel>{label}</S.TextLabel>
    </section>
  )
}

const validateProps = (prevProps: TextEntryProps, nextProps: TextEntryProps): boolean => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps)
}

export const MemoizedTextEntry = memo(TextEntry, validateProps)
