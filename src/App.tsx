import { FunctionComponent } from 'react'
import { Provider } from 'react-redux'
import { store } from '@store'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, TangoDark } from './features/styles'
import { Pages } from './pages'

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={TangoDark}>
        <GlobalStyle />
        <Pages />
      </ThemeProvider>
    </Provider>
  )
}

export default App
