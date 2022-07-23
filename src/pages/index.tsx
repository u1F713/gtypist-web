import { FunctionComponent } from 'react'
import Default from '~/layouts/default'
import NavigationMenu from '~/layouts/navigation/'

const IndexPage: FunctionComponent = () => {
  return (
    <Default>
      <NavigationMenu />
    </Default>
  )
}

export default IndexPage
