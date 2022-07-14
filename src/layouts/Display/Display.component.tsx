import { nanoid } from '@reduxjs/toolkit'
import { FunctionComponent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { lessonsActions } from '~/features/lessons/lessons.slice'
import { useAppSelector } from '~/store/app.selectors'
import * as Styles from './Display.styled'

export const Display: FunctionComponent = () => {
  const dispatch = useDispatch()
  const lesson = useAppSelector((state) => state.lessons)
  const lessonId = useAppSelector((state) => state.lessons.ids[0])

  useEffect(() => {
    dispatch(
      lessonsActions.received({
        lessons: [
          {
            id: nanoid(),
            description: 'lesson Q1',
            serie: 'serie Q',
            text: 'asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj asdf ;lkj'
          }
        ]
      })
    )
  }, [])

  return (
    <section>
      <p>{lesson.entities[lessonId]?.description}</p>
      <p>{lesson.entities[lessonId]?.text}</p>
      <Styles.Input type="text" name="" id="" autoComplete="disable" />
    </section>
  )
}
