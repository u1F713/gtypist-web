import { describe, test, expect } from 'vitest'
import { store } from '../'
import typist from '@feats/typist/reducer'

describe('Handle', () => {
  test('initial state', () => {
    expect(store.getState()).toEqual({ typist: typist(undefined, { type: undefined }) })
  })
})
