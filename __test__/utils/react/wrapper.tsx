import { FunctionComponent, ReactElement, useEffect, useRef } from 'react'
import { Provider } from 'react-redux'
import { store } from '@store'
import { ThemeProvider } from 'styled-components'
import { TangoDark } from '~/features/styles'

interface Props {
  children: ReactElement
}

const ComponentWrapper: FunctionComponent<Props> = ({ children }) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    ref.current?.firstElementChild?.setAttribute('data-testid', 'current-element')
  }, [ref.current])

  return (
    <Provider store={store}>
      <ThemeProvider theme={TangoDark}>
        <span ref={ref}>{children}</span>
      </ThemeProvider>
    </Provider>
  )
}

export default ComponentWrapper
