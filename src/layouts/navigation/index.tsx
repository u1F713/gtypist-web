import { FC, useEffect } from 'react'
import { useAppDispatch } from '~/store/app.selectors'
import { actions as menuActions } from '@feat/navigation/menu'
import NavigationList from './components/list'
import { useSeries } from '~/features/series/state/useSeries'

const NavigationMenu: FC = () => {
  const dispatch = useAppDispatch()
  const { series } = useSeries()

  useEffect(() => {
    dispatch(
      menuActions.setMenu({
        menu: {
          selected: `The following ${series.ids.length} lesson series are available`,
          description: '',
          options: []
        }
      })
    )
  }, [series])

  return (
    <section>
      <NavigationList />
    </section>
  )
}

export default NavigationMenu
