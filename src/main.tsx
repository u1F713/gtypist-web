import { createRoot } from 'react-dom/client'
import React from 'react'

const root = createRoot(document.querySelector('#root') ?? document.body)

root.render(
  <React.StrictMode>
    <div>
      <h1>
        I jumped in the river and what did I see? <br /> Black-eyed angels swam with me
      </h1>
    </div>
  </React.StrictMode>
)
