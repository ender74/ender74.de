import React from "react"

const About = React.createClass({
  render: function () {
    return (
      <div className="group">
        <h2 className="groupHeader">Über mich</h2>
        <div>{this.props.basics.summary}</div>
      </div>
    );
  }
});

export default About