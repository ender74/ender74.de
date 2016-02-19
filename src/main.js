'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import Resume from './views/app/resume/resume'

$.getJSON( "resume.json", function( data ) {
    ReactDOM.render(<Resume data={data} />, document.getElementById("container"))
})
