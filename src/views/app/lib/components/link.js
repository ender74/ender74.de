import React, { Component } from 'react'

class Link extends Component {
  render() {
      if (this.props.href) {
        return (
            <span>
                <a className='hide-when-printing' href={this.props.href} target="_blank">{this.props.text}</a>
                <span className='hide-on-screen'>{this.props.text}</span>
            </span>
        )
      } else {
        return (
            <div>{this.props.text}</div>
        )
      }
  }
}

export default Link