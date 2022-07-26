import { useCallback, useEffect, useState } from 'react'
import { useInputsKeys } from './useInputsKey'

interface SelectProps {
  list: any[]
}

interface SelectState {
  focus: string | null
  setFocus: (key: string) => void
}

export const useSelectItem = ({ list }: SelectProps): SelectState => {
  const [focus, select] = useState<string | null>(null)
  const { inputState, handleInputKey } = useInputsKeys()

  useEffect(() => {
    globalThis.document.addEventListener('keydown', handleInputKey)
    const { key } = inputState
    switch (key) {
      case 'ArrowLeft':
        break

      case 'ArrowUp':
        break

      case 'ArrowRight':
        break

      case 'ArrowDown':
        break

      default:
        break
    }

    return () => globalThis.document.removeEventListener('keydown', handleInputKey)
  }, [list])

  const setFocus = useCallback((key: string): void => {
    select(key)
  }, [])

  return { focus, setFocus }
}
