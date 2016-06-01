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
            <div>
                <h5 style={styles.title}>{this.props.title}</h5>
                {this.props.children}
            </div>
        )
    }
}

const styles = {
    title: {
        borderBottomStyle: 'solid',
        borderColor: 'darkGray',
        color: 'darkGray'
    }
}

export default WithGroupHeader