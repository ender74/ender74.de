'use strict'

import React from 'react'
import ReactDOM from 'react-dom/server'
import $ from 'jquery'
import Resume from './views/app/resume/resume'

$.getJSON( "static/resume.json", function( data ) {
    console.log(ReactDOM.renderToString(<Resume data={data} />, document.getElementById("container")))
})
