import { FunctionComponent } from 'react'
import * as Styles from './Textbox.styled'

export const TextBox: FunctionComponent = () => {
  return (
    <div>
      <Styles.BoxStyled type="text" name="" id="" autoComplete="off" autoCorrect="off" spellCheck="false" />
    </div>
  )
}
