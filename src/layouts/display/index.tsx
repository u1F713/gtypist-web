import { FC } from 'react'
import { useAppSelector } from '~/store/app.selectors'
import TextEntry from './components/TextEntry'

interface DisplayProps {
  id: string
}

const Display: FC<DisplayProps> = ({ id }) => {
  const lesson = useAppSelector((state) => state.series.entities[id]?.lessons[0])

  if (lesson?.states[1] == null) {
    return <div>...</div>
  }

  return <TextEntry label={lesson?.states[0].description} drill={lesson.states[1].drill} />
}

export default Display
