import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { defaultValue as initialState, MenuState } from '../models/menuState'

const menuSlice = createSlice({
  name: 'Menu',
  initialState,
  reducers: {
    setMenu: (state, payload: PayloadAction<{ menu: MenuState }>) => {
      state = payload.payload.menu
    }
  }
})

export const { reducer, actions } = menuSlice
