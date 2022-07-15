import { useCallback, useEffect, useState } from 'react'

export const useGetInputKey = (): { text: string } => {
  const [text, setText] = useState<string>('')

  const handleInputKey = useCallback((e: KeyboardEvent) => {
    e.preventDefault()
    setText((prevText) => `${prevText}${e.key}`)
  }, [])

  useEffect(() => {
    globalThis.addEventListener('keydown', handleInputKey)

    return () => globalThis.removeEventListener('keydown', handleInputKey)
  }, [handleInputKey])

  return { text }
}
