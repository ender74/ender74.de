import React, { Component } from 'react'

import { Router, Route, Redirect, browserHistory } from 'react-router'

import App from './components/App'
import BoundResume from './resume/BoundResume'
import Work from './work/Work'
import Disclaimer from './legal/Disclaimer'
import Start from './start/Start'

const AppView =() => {
    return (
        <Router history={ browserHistory }>
            <Redirect from='/' to='/app/start' />
            <Route component = { App }>
                <Route path='/app'>
                    <Route path='start' component= { Start } />
                    <Route path='resume' component= { BoundResume } />
                    <Route path='work' component= { Work } />
                    <Route path='disclaimer' component= { Disclaimer } />
                </Route>
            </Route>
        </Router>
    )
}

export default AppView
module.exports = AppView