import { createEntityAdapter } from '@reduxjs/toolkit'
import { serieModel } from '../../models/entity'

export const seriesAdapter = createEntityAdapter<serieModel>({
  selectId: (serie) => serie.id,
  sortComparer: () => 1
})
