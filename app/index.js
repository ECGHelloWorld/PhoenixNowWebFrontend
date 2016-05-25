import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import AppContainer from './components/App'
import UserSigninListContainer from './components/UserSigninList'
import UserListContainer from './components/UserList'
import SigninListContainer from './components/SigninListContainer'
import EventListContainer from './components/EventList'
import LoginRegisterContainer from './components/LoginRegisterContainer'
import Token from './components/Token'
import Home from './components/Home'

import { getuser, user, users, signins, error, events } from './reducers'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import thunkMiddleware from 'redux-thunk'
import reduxReset from 'redux-reset'

import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

let store = createStore(
    combineReducers({
        user,
        users,
        getuser,
        signins,
        events,
        error,
        routing: routerReducer
    }),
    applyMiddleware(
        thunkMiddleware,
        promiseMiddleware({promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR']})
    ),
    reduxReset()
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
              <Route path="users/:userid" component={UserSigninListContainer}/>
          </Route>
      </Router>
  </Provider>,
  document.getElementById('content')
)
