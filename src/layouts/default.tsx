import { FunctionComponent, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '~/store/app.selectors'
import { actions } from '~/features/navigation/menu/state/menu.slice'
import Router from '@pages/router'
import Header from '@components/Header'

const Default: FunctionComponent = () => {
  const { selected } = useAppSelector((state) => state.menu)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(
      actions.setMenu({
        menu: {
          selected: 'The following 10 lesson series are available',
          description: '',
          options: []
        }
      })
    )
  }, [])

  useEffect(() => console.log(selected), [selected])

  return (
    <main>
      <Header selected={selected} />
      <Router />
    </main>
  )
}

export default Default
