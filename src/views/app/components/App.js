import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'

import Header from './Header'
import Footer from './Footer'

const App = ( {children} ) => {
    return <div>
        <header>
            <Header />
        </header>
        <section>
            <Grid>
            {children}
            </Grid>
        </section>
        <footer>
            <Footer />
        </footer>
    </div>
}

export default App