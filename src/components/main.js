import React from 'react'
import ReactDOM from 'react-dom'
import Resume from './resume'

$.getJSON( "resume.json", function( data ) {
    ReactDOM.render(<Resume data={data} />, document.getElementById("container"));
});
