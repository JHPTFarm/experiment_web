import * as mobx from 'mobx'
import { Provider } from 'mobx-react'
import * as React from 'react'
import ReactDOM from 'react-dom'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'

import StoreIndex from '../store/StoreIndex'
import routes from './routes'

mobx.configure({
  enforceActions: 'observed',
})

const App = (props: any) => {
  const rootStore = props.rootStore || new StoreIndex()

  return (
    <Provider rootStore={rootStore}>
      {renderRoutes(routes)}
    </Provider>
  )
}

export default ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
)
