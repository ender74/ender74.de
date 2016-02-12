var React = require("react")

var Location = React.createClass({
  render: function () {
    return (
      <div className="group">
        <h2 className="groupHeader">Adresse (Arbeit)</h2>
        <div>{this.props.location.address}</div>
        <div>{this.props.location.postalCode} {this.props.location.city}</div>
      </div>
    );
  }
});

module.exports = Location