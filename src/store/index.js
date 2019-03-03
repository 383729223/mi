import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import homeStore from './home/store'
import loginStore from './login/store'
import registerStore from './register/store'

// combineReducers 可以用来组合各个分reducer
const reducer = combineReducers({
    homeStore,
    loginStore,
    registerStore
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;