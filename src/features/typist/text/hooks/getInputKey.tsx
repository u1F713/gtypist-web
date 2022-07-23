import { useEffect, useRef, useState } from 'react'
import { useInputsKeys } from '~/features/console/inputs'

export const useGetInputKey = (compare: string): { inputText: string } => {
  const { inputState } = useInputsKeys()
  const [inputText, setInputText] = useState<string>('')
  const keyIndex = useRef<number>(-1)

  useEffect(() => {
    keyIndex.current++

    if (inputState.key !== compare[keyIndex.current]) {
      return setInputText((prevText) => `${prevText}^`)
    }
    setInputText((prevText) => `${prevText}${inputState.key}`)
  }, [])

  return { inputText }
}
