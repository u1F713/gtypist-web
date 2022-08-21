import { FunctionComponent, lazy } from 'react'
import { BrowserRouter, BrowserRouterProps, Route, Routes } from 'react-router-dom'

const Home = lazy(async () => await import('./Home').then())

const RouterAdapter: FunctionComponent<BrowserRouterProps> = (opts) => {
  return (
    <BrowserRouter {...opts}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterAdapter
