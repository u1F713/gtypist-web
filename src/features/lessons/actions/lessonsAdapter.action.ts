import { createEntityAdapter } from '@reduxjs/toolkit'
import { ILesson } from '../lesson.entity'

const lessonsAdapter = createEntityAdapter<ILesson>({
  selectId: (lesson) => lesson.id,
  sortComparer: (x, y) => x.description.localeCompare(y.description)
})

export default lessonsAdapter
