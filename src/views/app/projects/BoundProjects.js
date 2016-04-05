import React, { Component } from 'react'
import $ from 'jquery'
import Projects from './components/Projects'

class BoundProjects extends Component {
    constructor() {
        super()
        this.state = {}
        BoundProjects.setState = this.setState.bind(this)
    }

    componentWillMount() {
        $.getJSON( "/projects.json", function( data ) {
            BoundProjects.setState({data: data})
        })
    }

    render() {
        return <Projects {...this.state.data} />
    }
}

export default BoundProjects