'use strict'

import React from 'react'
import ReactDOM from 'react-dom/server'

function renderToString(reactComponent, data) {
    const component = require(reactComponent)
    const react = ReactDOM.renderToString(React.createElement(component, data))
    console.log(react.length)
    return react   
}

export default renderToString
module.exports = renderToString