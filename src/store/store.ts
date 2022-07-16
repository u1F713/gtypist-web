import { configureStore } from '@reduxjs/toolkit'
import lessons from 'src/features/lessons/lessons.slice'
import menu from '~/features/navigation/menu/state/menu.slice'

const store = configureStore({
  reducer: { lessons, menu }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
