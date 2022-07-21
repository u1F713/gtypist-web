import { useCallback, useReducer } from 'react'

interface KeyReducerAction {
  type: KeyboardEvent
  payload: string
}

interface InputState {
  key: string
}

const inputReducer = (state: InputState, action: KeyReducerAction): InputState => {
  const { type } = action

  /** to prevent key drift to the open browser menus */
  if (type.altKey || type.ctrlKey || type.metaKey) {
    return { key: '' }
  }

  if (action.payload === 'Enter') {
    return { key: '\n' }
  }

  return { key: action.payload }
}

export const useInputsKeys = (): { inputstate: InputState; handleInputKey: (e: KeyboardEvent) => void } => {
  const [inputstate, dispatch] = useReducer(inputReducer, { key: '' })

  const handleInputKey = useCallback((e: KeyboardEvent) => {
    dispatch({ type: e, payload: e.key })
  }, [])

  return { inputstate, handleInputKey }
}
