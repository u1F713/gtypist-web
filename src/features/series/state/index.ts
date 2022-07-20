import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { serieModel } from '../models/entity'
import { seriesAdapter } from './actions/entityAdapter'

const slice = createSlice({
  initialState: seriesAdapter.getInitialState(),
  name: 'series',
  reducers: {
    load: (_state, action: PayloadAction<{ series: serieModel[] }>) => {
      seriesAdapter.setAll(_state, action.payload.series)
    }
  }
})

export const { reducer, actions } = slice
