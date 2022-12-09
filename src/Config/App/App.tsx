import React from 'react'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import ErrorBoundary from '../ErrorHandler/ErrorBoundary'
import Router from '../Router/Router'
import reducers from '../Store/reducers'
import rootSaga from '../Store/sagas'

const App: React.FC = () => {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]
  const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)))
  sagaMiddleware.run(rootSaga)

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <Router />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  )
}

export default App
