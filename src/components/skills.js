import React from 'react'
import Tags from './tags'

const SkillEntry = React.createClass({
  render: function () {
    return (
      <div className="skillEntry">
        <h3>{this.props.name}</h3>
        <Tags title="" tags={this.props.keywords} />
      </div>
    );
  }
});

const Skills = React.createClass({
  render: function () {
    var skills = this.props.skills.map(function (skill, index) {
      return (
        <SkillEntry
          key={index}
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

export default Skills