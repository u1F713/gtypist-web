import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type TypistLesson from '../types/Lesson'
import lessonEntity from './lessonEntityAdapter'

export default createSlice({
  name: 'lessons',
  initialState: lessonEntity.getInitialState(),
  reducers: {
    resived: (state, action: PayloadAction<{ lessons: TypistLesson[] }>) => {
      lessonEntity.setAll(state, action.payload.lessons)
    }
  }
})
