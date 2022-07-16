import { configureStore } from '@reduxjs/toolkit'
import { reducer as lessons } from '~/features/lessons'
import { reducer as menu } from '@feat/navigation/menu/'

const store = configureStore({
  reducer: { lessons, menu }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
