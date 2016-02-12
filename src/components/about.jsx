var React = require("react")

var About = React.createClass({
  render: function () {
    return (
      <div className="group">
        <h2 className="groupHeader">Über mich</h2>
        <div>{this.props.basics.summary}</div>
      </div>
    );
  }
});

module.exports = About