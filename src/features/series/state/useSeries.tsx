import { useEffect } from 'react'
import { EntityState } from '@reduxjs/toolkit'
import { useAppDispatch, useAppSelector } from '~/store/app.selectors'
import { querySeries, serieModel, seriesActions } from '@feat/series'

interface useReturn {
  series: EntityState<serieModel>
}

export const useSeries = (): useReturn => {
  const { series } = useAppSelector((state) => state)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(seriesActions.load({ series: querySeries().data }))
  }, [])

  return { series }
}
