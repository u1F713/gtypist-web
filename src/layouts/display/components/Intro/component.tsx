import { FC } from 'react'
import * as S from './styles'

interface IntroProps {
  text: string
}

export const Intro: FC<IntroProps> = ({ text }) => {
  // const [press, setPress] = useState<Boolean>(false)

  // useEffect(() => {
  //   globalThis.document.addEventListener('keypress', (e) => (e.key === 'Enter' ? setPress(true) : null))
  // }, [])

  return <S.Wrapper>{text}</S.Wrapper>
}
