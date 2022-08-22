import { configureStore } from '@reduxjs/toolkit'
import typist from '@feats/typist/reducer'

const store = configureStore({
  reducer: { typist }
})

export type RootState = ReturnType<typeof store.getState>
export type StoreDispatch = typeof store.dispatch
export default store
