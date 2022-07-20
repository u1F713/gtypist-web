import YAML from 'yaml'
import seriesMap from '~/content/series'

export const querySeries = (): any => {
  const data = Object.values(seriesMap).map((elm) => ({
    id: Object.keys(seriesMap),
    ...YAML.parse(elm)
  }))

  return {
    data
  }
}
