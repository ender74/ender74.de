import React, { Component } from 'react'
import $ from 'jquery'
import Resume from './Resume'

class BoundResume extends Component {
    constructor() {
        super()
        this.state = {}
        BoundResume.setState = this.setState.bind(this)
    }

    componentWillMount() {
        $.getJSON( "/resume.json", function( data ) {
            BoundResume.setState({data: data})
        })
    }

    render() {
        return <Resume {...this.state.data} />
    }
}

export default BoundResume