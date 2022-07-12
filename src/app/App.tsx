import { FunctionComponent } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '~/styles/global.styled'
import TangoDark from '~/styles/themes/tango-dark'
import Default from '../layouts/default'
import store from './store'

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={TangoDark}>
        <GlobalStyle />
        <Default />
      </ThemeProvider>
    </Provider>
  )
}

export default App
