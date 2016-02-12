var React = require("react")
var ReactDOM = require("react-dom")
var Resume = require("./resume.jsx")

$.getJSON( "resume.json", function( data ) {
    ReactDOM.render(<Resume data={data} />, document.getElementById("container"));
});
