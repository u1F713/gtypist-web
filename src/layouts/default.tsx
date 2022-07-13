import { FunctionComponent } from 'react'
import { Router } from '~/pages'
import Header from '~/components/Header/Header'

const Default: FunctionComponent = () => {
  return (
    <main>
      <Header selectedMenu="current" />
      <Router />
    </main>
  )
}

export default Default
