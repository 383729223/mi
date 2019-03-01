import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import homeStore from './home/store'

// combineReducers 可以用来组合各个分reducer
const reducer = combineReducers({
    homeStore
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;