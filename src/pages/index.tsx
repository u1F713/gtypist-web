import { FunctionComponent, useMemo } from 'react'
import { useSeries } from '~/features/series/state/useSeries'
import Default from '~/layouts/default'
import Display from '~/layouts/display'

const IndexPage: FunctionComponent = () => {
  const { series } = useSeries()
  const lessonId = useMemo(() => series.entities[series.ids[0]]?.id, [series])

  return (
    <Default>
      <p></p>
      <Display id={lessonId?.toString() ?? '0'} />
    </Default>
  )
}

export default IndexPage
