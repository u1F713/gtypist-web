import { FunctionComponent } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Router: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<>Index Route</>} />
        <Route path="help" element={<>Help</>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
