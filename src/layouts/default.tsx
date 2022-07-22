import { FunctionComponent, ReactNode } from 'react'
import { useAppSelector } from '~/store/app.selectors'
import Header from '@components/Header'

interface DefaultLayoutProps {
  children?: ReactNode
}

const Default: FunctionComponent<DefaultLayoutProps> = ({ children }) => {
  const { selected } = useAppSelector((state) => state.menu)

  return (
    <main>
      <Header selected={selected} />
      {children}
    </main>
  )
}

export default Default
