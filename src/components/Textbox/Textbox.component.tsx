import { FunctionComponent, useCallback, useEffect, useRef, useState } from 'react'
// import * as Styles from './Textbox.styled'

export const TextBox: FunctionComponent = () => {
  const boxRef = useRef<HTMLElement>(null)
  const [text, setText] = useState<string>('')
  const handleInputKey = useCallback((event: { key: string }) => {
    const { key } = event
    setText((prevText) => `${prevText}${key}`)
  }, [])

  useEffect(() => {
    if (boxRef?.current != null) {
      globalThis.addEventListener('keydown', handleInputKey)
    }

    return () => globalThis.removeEventListener('keydown', handleInputKey)
  }, [handleInputKey])

  return (
    <div>
      <article ref={boxRef}>{text}</article>
    </div>
  )
}
