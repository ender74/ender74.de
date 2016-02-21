import React, { Component } from 'react'

class WithGroupHeader extends Component {
    render() {
        return (
            <div className='group' >
                <h2 className='groupHeader'>{this.props.title}</h2>
                {this.props.children}
            </div>
        )
    }
}

export default WithGroupHeader