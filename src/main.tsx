import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'

const root = ReactDom.createRoot(document.querySelector('#root') ?? document.body)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
