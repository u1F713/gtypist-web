import { FunctionComponent, useEffect } from 'react'
import TextBox from '~/components/Textbox'
import { useLessons } from '~/features/lessons'
import lesson_1 from '~/content/lessons/test.json'

const Display: FunctionComponent = () => {
  const { lessons, setLessons } = useLessons()

  useEffect(() => {
    setLessons([lesson_1])
  }, [])

  return (
    <section>
      <p>{lessons.entities[lessons.ids[0]]?.description}</p>
      <p>{lessons.entities[lessons.ids[0]]?.text}</p>
      <TextBox />
    </section>
  )
}

export default Display
