import { FunctionComponent } from 'react'
import { useSeries } from '~/features/series/state/useSeries'
import Default from '~/layouts/default'
import Display from '~/layouts/display'

const IndexPage: FunctionComponent = () => {
  const { series } = useSeries()

  return (
    <Default>
      {JSON.stringify(series.entities[series.ids[0]])}
      <Display />
    </Default>
  )
}

export default IndexPage
