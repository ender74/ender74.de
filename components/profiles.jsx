var React = require("react")
var Link = require("./link.jsx")

var ProfileEntry = React.createClass({
  render: function () {
    return (
      <div className="profileEntry">
        <h3>{this.props.network}</h3>
        <Link href={this.props.url} text={this.props.username} />
      </div>
    );
  }
});

var Profiles = React.createClass({
  render: function () {
    var profiles = this.props.profiles.map(function (profile, index) {
      return (
        <ProfileEntry
          network={profile.network}
          url={profile.url}
          username={profile.username} />
      );
    });
    return (
      <div className="group">
        <h2 className="groupHeader">Profile</h2>
        {profiles}
      </div>
    );
  }
});

module.exports = Profiles