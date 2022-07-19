import { FunctionComponent, ReactNode, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '~/store/app.selectors'
import { actions } from '~/features/navigation/menu/state/menu.slice'
import Header from '@components/Header'

interface DefaultLayoutProps {
  children?: ReactNode
}

const Default: FunctionComponent<DefaultLayoutProps> = ({ children }) => {
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

  return (
    <main>
      <Header selected={selected} />
      {children}
    </main>
  )
}

export default Default
