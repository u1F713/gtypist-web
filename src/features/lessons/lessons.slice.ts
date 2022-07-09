import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ILesson } from './lesson.entity'
import lessonsAdapter from './actions/lessonsAdapter.action'

const lessonsSlice = createSlice({
  name: 'lessons',
  initialState: lessonsAdapter.getInitialState(),
  reducers: {
    received(state, action: PayloadAction<{ lessons: ILesson[] }>) {
      lessonsAdapter.setAll(state, action.payload.lessons)
    }
  }
})

export const lessonsActions = lessonsSlice.actions
export default lessonsSlice.reducer
