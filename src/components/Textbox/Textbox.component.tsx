import { FunctionComponent } from 'react'
import { useGetInputKey } from '~/features/typist/text'
import * as S from './Textbox.styled'

export const TextBox: FunctionComponent = () => {
  const { text } = useGetInputKey('asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj')

  return (
    <div>
      <S.BoxStyled>{text}</S.BoxStyled>
    </div>
  )
}
