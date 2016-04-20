import React, { Component } from 'react'

import { Router, Route, Redirect, browserHistory } from 'react-router'
import { IntlProvider } from 'react-intl'

import App from './components/App'
import BoundResume from './resume/BoundResume'
import BoundProjects from './projects/BoundProjects'
import Disclaimer from './legal/Disclaimer'
import Start from './start/Start'

const AppView =() => {
    return (
        <IntlProvider locale='de'>
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
        </IntlProvider>
    )
}

export default AppView
module.exports = AppView