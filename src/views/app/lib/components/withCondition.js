import React, { Component } from 'react'

class WithCondition extends Component {
    render() {
        if (!this.props.condition || !this.props.children)
            return <div/>
        else
            return this.props.children
    }
}

export default WithCondition