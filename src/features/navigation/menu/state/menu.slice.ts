import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { defaultValue as initialState, MenuState } from '../models/menuState'

const menuSlice = createSlice({
  name: 'Menu',
  initialState,
  reducers: {
    setMenu: (_state, payload: PayloadAction<{ menu: MenuState }>) => {
      return payload.payload.menu
    }
  }
})

export const { reducer, actions } = menuSlice
export default menuSlice.reducer
