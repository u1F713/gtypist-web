import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '..'

describe('Handle React-redux provider', () => {
  test('should be defined', () => {
    render(
      <Provider store={store}>
        <span>testing</span>
      </Provider>
    )

    expect(screen.getByText('testing')).toBeDefined()
  })
})
