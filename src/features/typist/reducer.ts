import { combineReducers } from '@reduxjs/toolkit'
import { lessonSlice } from './lesson'

export default combineReducers({
  typistLessons: lessonSlice.reducer
})
