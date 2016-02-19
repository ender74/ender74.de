import React from 'react'

const Button = React.createClass({
  render: function () {
    const imgStyle = {
        padding: '0.6em',
        marginRight: '0.2em',
        background: '#CCCCCC',
        border: '1px solid #888888'
    }
    return (
        <img onClick={ this.props.onClick } style={imgStyle} src={ this.props.image } alt= { this.props.alt }/>
    )
  }
})

export default Button