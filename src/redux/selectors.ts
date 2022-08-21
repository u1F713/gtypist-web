import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, StoreDispatch } from './store'
import { useDispatch as useReduxDispach, useSelector as useReduxSelect } from 'react-redux'

export const useDispatch: () => StoreDispatch = useReduxDispach
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelect
