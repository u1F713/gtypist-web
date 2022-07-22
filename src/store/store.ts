import { configureStore } from '@reduxjs/toolkit'
import { reducer as menu } from '@feat/navigation/menu/'
import { series } from '~/features/series'

const store = configureStore({
  reducer: {
    series,
    menu
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
