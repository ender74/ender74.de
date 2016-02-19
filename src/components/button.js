import React from 'react'

const Button = React.createClass({
  render: function () {
    const imgStyle = {
        width: '2.0em',
        height: '2.0em',
        padding: '0.5em',
        margin: '0.2em',
        background: '#CCCCCC',
        border: '1px solid #888888'
    }
    return (
        <img onClick={ this.props.onClick } style={imgStyle} src={ this.props.image } alt= { this.props.alt }/>
    )
  }
})

export default Button