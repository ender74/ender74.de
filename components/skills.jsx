var React = require("react")
var Tags = require("./tags.jsx")

var SkillEntry = React.createClass({
  render: function () {
    return (
      <div className="skillEntry">
        <h3>{this.props.name}</h3>
        <Tags title="" tags={this.props.keywords} />
      </div>
    );
  }
});

var Skills = React.createClass({
  render: function () {
    var skills = this.props.skills.map(function (skill, index) {
      return (
        <SkillEntry
          name={skill.name}
          level={skill.level}
          keywords={skill.keywords} />
      );
    });
    return (
      <div className="group">
        <h2 className="groupHeader">Fähigkeiten</h2>
        {skills}
      </div>
    );
  }
});

module.exports = Skills