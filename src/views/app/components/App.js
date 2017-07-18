import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import LocaleActions from '../actions/LocaleActions'

class App extends Component {
    render() {
        const { children, locale, setLocale } = this.props

        return (
            <div>
                <header>
                    <Header locale={locale} setLocale={setLocale} />
                </header>
                <section>
                    <Grid>
                    {children}
                    </Grid>
                </section>
                <footer>
                    <Footer locale={locale} />
                </footer>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const locale = state.intl.locale

    return {
        locale
    }
}

var mapDispatchToProps = function(dispatch) {
    return {
        setLocale: (locale) => dispatch(LocaleActions.setLocale(locale))
    }
}

const BoundApp = withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

export default BoundApp
