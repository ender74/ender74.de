var React = require("react")
var About = require("./about.jsx")
var Education = require("./education.jsx")
var Footer = require("./footer.jsx")
var Location = require("./location.jsx")
var Profiles = require("./profiles.jsx")
var Publications = require("./publications.jsx")
var Skills = require("./skills.jsx")
var Title = require("./title.jsx")
var Work = require("./work.jsx")

var Resume = React.createClass({
  render: function () {
    var style = {
        width: '100%',
        background: 'white',
        fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
        fontSize: '1.0em'
    };
    return (
      <div style={style}>
        <Title basics={this.props.data.basics} />
        <About basics={this.props.data.basics} />
        <Education education={this.props.data.education} />
        <Publications publications={this.props.data.publications} />
        <Skills skills={this.props.data.skills} />
        <Profiles profiles={this.props.data.basics.profiles} />
        <Location location={this.props.data.basics.location} />
        <Work work={this.props.data.work} />
        <Footer basics={this.props.data.basics} />
      </div>
    );
  }
});

module.exports = Resume