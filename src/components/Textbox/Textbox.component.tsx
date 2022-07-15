import { FunctionComponent } from 'react'
import { useGetInputKey } from '~/features/typist/text'
import * as S from './Textbox.styled'

export const TextBox: FunctionComponent = () => {
  const { text } = useGetInputKey()

  return (
    <div>
      <S.BoxStyled>{text}</S.BoxStyled>
    </div>
  )
}
