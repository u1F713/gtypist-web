import { FunctionComponent, useMemo } from 'react'
import { useSeries } from '~/features/series/state/useSeries'
import Default from '~/layouts/default'
import Display from '~/layouts/display'

const IndexPage: FunctionComponent = () => {
  const { series } = useSeries()
  const lessonId = useMemo(() => series.entities[series.ids[0]]?.id, [series])

  if (lessonId != null) {
    return (
      <Default>
        <Display id={lessonId} />
      </Default>
    )
  }

  return <span>...</span>
}

export default IndexPage
