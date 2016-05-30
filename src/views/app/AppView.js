import React, { Component } from 'react'

import { Router, Route, Redirect, browserHistory } from 'react-router'
import { Provider } from 'react-intl-redux'
import watch from 'redux-watch'

import App from './components/App'
import BoundResume from './resume/BoundResume'
import BoundProjects from './projects/BoundProjects'
import Disclaimer from './legal/Disclaimer'
import LocaleActions from './actions/LocaleActions'
import ResumeActions from './actions/ResumeActions'
import Start from './start/Start'
import store from './store'

function detectLocale() {
    var lang = window.navigator.userLanguage || window.navigator.browserLanguage || window.navigator.language
    if (lang.indexOf('-') !== -1)
        lang = lang.split('-')[0]

    if (lang.indexOf('_') !== -1)
        lang = lang.split('_')[0]

    return lang
}

class AppView extends Component {
    componentDidMount() {
        const locale = detectLocale()
        store.dispatch(LocaleActions.setLocale(locale))

        let wLocale = watch(store.getState, 'intl.locale')
        store.subscribe(wLocale((newVal, oldVal, objectPath) => {
            store.dispatch(ResumeActions.loadResume(newVal))
        }))
    }

    render() {
        return (
            <Provider store={ store }>
                <Router history={ browserHistory }>
                    <Redirect from='/' to='/app/start' />
                    <Route component = { App }>
                        <Route path='/app'>
                            <Route path='start' component= { Start } />
                            <Route path='resume' component= { BoundResume } />
                            <Route path='projects' component= { BoundProjects } />
                            <Route path='disclaimer' component= { Disclaimer } />
                        </Route>
                    </Route>
                </Router>
            </Provider>
        )
    }
}

export default AppView
module.exports = AppView