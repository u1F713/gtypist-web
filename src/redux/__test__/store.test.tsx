import { describe, test, expect } from 'vitest'
import { store } from '../'

describe('Handle', () => {
  test('should by a empty object', () => {
    expect(store.getState()).toEqual({})
  })
})
