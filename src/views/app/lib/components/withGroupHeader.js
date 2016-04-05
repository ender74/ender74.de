import React, { Component } from 'react'
import { Button, Panel } from 'react-bootstrap'

class WithGroupHeader extends Component {
    constructor() {
        super()
        this.state = {
            open: true
        }
    }

    render() {
        const title = (
            <h3 onClick={ ()=> this.setState({ open: !this.state.open })}>
              {this.props.title}
            </h3>
        )

        return (
            <Panel header = { title } collapsible expanded={this.state.open}>
                    {this.props.children}
            </Panel>
        )
    }
}

export default WithGroupHeader