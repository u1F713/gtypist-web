import { createEntityAdapter } from '@reduxjs/toolkit'
import type TypistLesson from '../types/Lesson'

export default createEntityAdapter<TypistLesson>({
  selectId: (lesson) => lesson.name,
  sortComparer: (x, y) => x.name.localeCompare(y.name)
})
