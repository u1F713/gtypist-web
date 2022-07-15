import { useCallback, useEffect, useRef, useState } from 'react'

export const useGetInputKey = (compare: string): { text: string } => {
  const [text, setText] = useState<string>('')
  const keyIndex = useRef(-1)

  const handleInputKey = useCallback((e: KeyboardEvent) => {
    e.preventDefault()
    keyIndex.current++

    if (keyIndex.current > compare.length) return null
    if (e.key !== compare[keyIndex.current]) {
      return setText((prevText) => `${prevText}^`)
    }
    setText((prevText) => `${prevText}${e.key}`)
  }, [])

  useEffect(() => {
    globalThis.addEventListener('keydown', handleInputKey)

    return () => globalThis.removeEventListener('keydown', handleInputKey)
  }, [handleInputKey])

  return { text }
}
