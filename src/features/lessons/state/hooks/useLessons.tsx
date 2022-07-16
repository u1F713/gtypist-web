import { EntityState } from '@reduxjs/toolkit'
import { useAppDispatch, useAppSelector } from '~/store/app.selectors'
import { ILesson } from '../../models/lesson.entity'
import { lessonsActions } from '../lessons.slice'

interface ReturnType {
  lessons: EntityState<ILesson>
  setLessons: (lessons: ILesson[]) => void
}

export const useLessons = (): ReturnType => {
  const lessons = useAppSelector((state) => state.lessons)
  const dispatch = useAppDispatch()

  const setLessons = (lessons: ILesson[]): void => {
    dispatch(lessonsActions.received({ lessons }))
  }

  return {
    lessons,
    setLessons
  }
}
