import React, { Component } from 'react'
import {connect} from 'react-redux'
import Projects from './components/Projects'

class BoundProjects extends Component {
    render() {
        return (
            <div>
                <Projects {...this.props.data} />
                <footer className='hide-when-printing'>
                Die Daten werden aus einer <a href='/projects.json'>JSON Datei</a> geladen.
                </footer>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const locale = state.intl.locale
    const data = state.projects.data

    return {
        locale,
        data
    }
}

var mapDispatchToProps = function(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoundProjects)