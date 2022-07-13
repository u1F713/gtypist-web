import { configureStore } from '@reduxjs/toolkit'
import lessons from 'src/features/lessons/lessons.slice'

const store = configureStore({
  reducer: { lessons }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
