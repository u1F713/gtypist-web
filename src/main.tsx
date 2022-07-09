import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './app/App'

const root = createRoot(document.querySelector('#root') ?? document.body)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
