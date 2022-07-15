import { FunctionComponent } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Display from '~/layouts/display'

const Router: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Display />} />
        <Route path="help" element={<>Help</>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
