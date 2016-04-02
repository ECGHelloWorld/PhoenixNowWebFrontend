import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import AppContainer from './components/App'
import UserListContainer from './components/UserList'
import SigninListContainer from './components/SigninList'
import LoginRegisterContainer from './components/LoginRegisterContainer'
import Token from './components/Token'
import Home from './components/Home'

import { user, users, signins, error } from './reducers'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import thunkMiddleware from 'redux-thunk'

import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

let store = createStore(
    combineReducers({
        user,
        users,
        signins,
        error,
        routing: routerReducer
    }),
    applyMiddleware(
        thunkMiddleware,
        promiseMiddleware({promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR']})
    )
)

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
      <Router history={history}>
          <Route path="/" component={AppContainer}>
              <IndexRoute component={Home} />
              <Route path="users" component={UserListContainer} />
              <Route path="token" component={Token} />
              <Route path="signins" component={SigninListContainer} />
          </Route>
      </Router>
  </Provider>,
  document.getElementById('content')
)
