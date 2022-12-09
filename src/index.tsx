import React from 'react'

import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import ErrorBoundary from './Config/ErrorHandler/ErrorBoundary'
import Router from './Config/Router/Router'
import reducers from './Config/Store/reducers'
import rootSaga from './Config/Store/sagas'

import './View/Layout/Styles/Globals/_style.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './Config/Icons/FontAwesome/Main'
import './Config/Language/I18n/Initialize'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)))
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)

export type RootState = ReturnType<typeof store.getState>
export { store }
