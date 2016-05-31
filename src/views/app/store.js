import { combineReducers, applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { intlReducer } from 'react-intl-redux'

import resumeReducer from './actions/ResumeReducers'
import projectReducer from './actions/ProjectReducers'

const rootReducer = combineReducers({
    resume: resumeReducer,
    projects: projectReducer,
    intl: intlReducer
})

const window = window || {}
const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f

const store = compose(applyMiddleware(thunk), devTools)(createStore)(rootReducer)

export default store