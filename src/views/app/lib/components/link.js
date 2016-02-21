import React, { Component } from 'react'

class Link extends Component {
  render() {
      if (this.props.href) {
        return (
            <a href={this.props.href} target="_blank">{this.props.text}</a>
        )
      } else {
        return (
            <div>{this.props.text}</div>
        )
      }
  }
}

export default Link