import { FunctionComponent } from 'react'
import TextBox from '~/components/Textbox'
import { useAppSelector } from '~/store/app.selectors'

interface DisplayProps {
  id: string
}

const Display: FunctionComponent<DisplayProps> = ({ id }) => {
  const lesson = useAppSelector((state) => state.series.entities[id]?.lessons[0])

  return (
    <section>
      {lesson?.intro}
      <TextBox />
    </section>
  )
}

export default Display
