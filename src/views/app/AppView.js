import React, { Component } from 'react'
import {
  HashRouter,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';

import { Provider } from 'react-intl-redux'
import watch from 'redux-watch'
import { connect } from 'react-redux'

import App from './components/App'
import BoundResume from './resume/BoundResume'
import BoundProjects from './projects/BoundProjects'
import Disclaimer from './legal/Disclaimer'
import LocaleActions from './actions/LocaleActions'
import ResumeActions from './actions/ResumeActions'
import ProjectActions from './actions/ProjectActions'
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
            store.dispatch(ProjectActions.loadProjects(newVal))
        }))
    }

    render() {
        return (
            <Provider store={ store }>
                <HashRouter>
                  <App>
                    <Redirect from='/' to='/app/start' />
                    <Switch>
                      <Route path='/app/start' component= { Start } />
                      <Route path='/app/resume'><BoundResume /></Route>
                      <Route path='/app/projects'><BoundProjects /></Route>
                      <Route path='/app/disclaimer'><Disclaimer /></Route>
                    </Switch>
                  </App>
                </HashRouter>
            </Provider>
        )
    }
}

export default AppView
module.exports = AppView
