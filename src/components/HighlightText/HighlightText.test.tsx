import { describe, expect, test } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { Wrapper } from '@test-utils'
import Highlight from './index'

describe('Test Highlight component', () => {
  const currentElement = (): HTMLElement => screen.getByTestId('current-element')

  test('text spacing l2 r4', async () => {
    render(<Highlight text=" testing  " />, { wrapper: Wrapper })
    await waitFor(() => {
      expect(currentElement()).toBeDefined()
    })

    expect(currentElement().textContent?.length).toBe(10)
  })
})
