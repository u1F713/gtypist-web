import { FunctionComponent } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexPage from '~/pages'

const Router: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="help" element={<>Help</>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
