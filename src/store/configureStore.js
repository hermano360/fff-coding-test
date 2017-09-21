var redux = require('redux')
var thunk = require('redux-thunk').default
var {ProfileReducer, ThumbnailReducer} = require('../reducers/reducers.js')

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    profiles: ProfileReducer,
    lastThumbNail: ThumbnailReducer
  })
  initialState = {
    profiles: [],
    lastThumbNail: ''
  }
  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
  return store
}
