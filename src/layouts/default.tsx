import { nanoid } from '@reduxjs/toolkit'
import { FunctionComponent, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '~/app/app.selectors'
import Header from '~/components/Header/Header'
import { lessonsActions } from '~/features/lessons/lessons.slice'

const Default: FunctionComponent = () => {
  const dispatch = useAppDispatch()
  const lessons = useAppSelector((state) => state.lessons)

  useEffect(() => {
    dispatch(
      lessonsActions.received({
        lessons: [{ id: nanoid(), serie: 'Q', description: 'Quick QWERTY course' }]
      })
    )
  }, [])

  return (
    <main>
      <Header selectedMenu="current" />
      <div>
        <h1>
          I jumped in the river and what did I see? <br /> Black-eyed angels swam with me
        </h1>
      </div>
      {lessons?.ids.map((entityId) => {
        console.log(lessons)

        return <span key={entityId}>{lessons.entities[entityId]?.description}</span>
      })}
    </main>
  )
}

export default Default
