import { FunctionComponent } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './Global.styled'
import TangoDark from './themes/tango-dark'
import Default from '~/layouts/default'
import store from '~/store/store'

export const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={TangoDark}>
        <GlobalStyle />
        <Default />
      </ThemeProvider>
    </Provider>
  )
}
