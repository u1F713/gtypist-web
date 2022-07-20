import YAML from 'yaml'
import seriesMap from '~/content/series'

export const querySeries = (): any => {
  const data = Object.values(seriesMap).map((elm, index) => ({
    id: Object.keys(seriesMap)[index],
    ...YAML.parse(elm)
  }))

  return {
    data
  }
}
