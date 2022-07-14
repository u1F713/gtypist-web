import { FunctionComponent } from 'react'
import Router from '@pages/router'
import Header from '@components/Header'

const Default: FunctionComponent = () => {
  return (
    <main>
      <Header selectedMenu="current" />
      <Router />
    </main>
  )
}

export default Default
