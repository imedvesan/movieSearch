import { applyMiddleware, combineReducers, createStore }  from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import allMovies from './allMovies'
import singleMovie from './singleMovie'
import reviewedMovieReducer from './reviewedMovies'

const reducer = combineReducers({
  allMovies,
  singleMovie,
  reviewedMovies: reviewedMovieReducer,
})

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({collapsed: true})))
const store = createStore(reducer, middleware)

export default store
