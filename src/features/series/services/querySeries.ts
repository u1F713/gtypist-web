import YAML from 'yaml'
import seriesMap from '~/content/series'
import { serieModel } from '../models/entity'

export const querySeries = (): any => {
  const data: serieModel[] = Object.values(seriesMap).map((elm, index) => ({
    id: Object.keys(seriesMap)[index],
    ...YAML.parse(elm)
  }))

  return {
    data
  }
}
