import { FunctionComponent, useMemo } from 'react'
import { useSeries } from '~/features/series/state/useSeries'
import Default from '~/layouts/default'
import Display from '~/layouts/display'

const IndexPage: FunctionComponent = () => {
  const { series } = useSeries()

  const lessonId = useMemo(() => series.ids[0], [series])

  return (
    <Default>
      {JSON.stringify(series.entities[lessonId]?.name)}
      <p></p>
      <Display />
    </Default>
  )
}

export default IndexPage
