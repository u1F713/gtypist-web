import { FunctionComponent } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Default from '../layouts/default'

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <Default />
    </Provider>
  )
}

export default App
