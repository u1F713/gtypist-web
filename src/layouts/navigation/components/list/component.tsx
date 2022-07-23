import { FC, useMemo } from 'react'
import { serieModel } from '~/features/series'
import { useSeries } from '~/features/series/state/useSeries'
import * as S from './styled'

export const NavigationList: FC = () => {
  const { series } = useSeries()
  const list = useMemo(() => series.ids.map((id) => series.entities[id]), [series])

  return (
    <S.Navigation>
      <ul>
        {list.map((entity: serieModel) => (
          <li key={entity.id}>
            <span>{entity.id}</span>
            <span>{entity.name}</span>
            <span>{`(${entity.id[0]}${entity.lessons.length} - ${entity.id[0]}${entity.lessons.length})`}</span>
          </li>
        ))}
      </ul>
    </S.Navigation>
  )
}
