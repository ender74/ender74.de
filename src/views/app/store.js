import { combineReducers, applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { intlReducer } from 'react-intl-redux'

import resumeReducer from './actions/ResumeReducers'

const rootReducer = combineReducers({
    resume: resumeReducer,
    intl: intlReducer
})

const window = window || {}
const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f

const store = compose(applyMiddleware(thunk), devTools)(createStore)(rootReducer)

export default store